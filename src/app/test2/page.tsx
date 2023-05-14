"use client";

import React, { useEffect, useState } from "react";
import Balloon from "../../components/sliderballon";

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
      fetchData(); // Fetch every 2 second
    }, 2000);

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, []);

  // Sort the posts array by id in ascending order
  const sortedPosts = [...posts].sort((a, b) => b.current - a.current);

  return (
    <div className="flex  h-screen">
      <div className="m-auto">
        <div className="grid gap-10 grid-flow-col md:grid-flow-col ml-5">
          {" "}
          {sortedPosts.map((post: any) => (
            <Balloon props={post} key={post.id} />
          ))}
        </div>

        <div className="flex flex-row"></div>
      </div>
    </div>
  );
}
