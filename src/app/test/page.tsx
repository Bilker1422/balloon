"use client";

import React, { useEffect, useState } from "react";
import Balloon from "../../components/balloon";

export default function Page() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/post");
      const json = await res.json();
      setPosts(json.posts);
    };

    fetchData(); // Initial fetch

    const interval = setInterval(() => {
      fetchData(); // Fetch every 1 second
    }, 1000);

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, []);

  // Sort the posts array by id in ascending order
  const sortedPosts = [...posts].sort((a, b) => b.current - a.current);

  return (
    <div className="flex h-screen">
      <div className="flex flex-col m-auto w-4/5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
              <tr>
                <th scope="col" className="px-6 py-4 text-xl ">
                  Image
                </th>
                <th scope="col" className="px-6 py-4 text-xl text-center">
                  Id
                </th>
                <th scope="col" className="px-6 py-4 text-xl text-center">
                  Color
                </th>
                <th scope="col" className="px-6 py-4 text-xl text-center">
                  current
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedPosts.map((post: any) => (
                <Balloon props={post} key={post.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
