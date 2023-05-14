import React from "react";
import Image from "next/image";
import check from "../../public/balloons.svg";

interface SVGIconProps {
  width: string | number;
  color: string;
  name: string;
}

const SvgIcon: React.FC<SVGIconProps> = ({ width, color, name }) => {
  const [element, setElement] = React.useState<JSX.Element | null>(null);

  React.useEffect(() => {
    import(`../icons/${name}.svg`).then((res) => {
      const Icon = res.ReactComponent as React.ComponentType<
        JSX.IntrinsicElements["svg"]
      >;
      setElement(<Icon fill={color} width={width} />);
    });
  }, [name, color, width]);

  return element;
};

function Page({ props }: any) {
  return (
    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th className="py-4">
        <Image src={check} alt="check" />
      </th>
      <td className="px-6 py-4 text-2xl text-center text-gray-900 whitespace-nowrap dark:text-white">
        {props.id}
      </td>
      <td className="px-6 py-4 text-2xl text-center text-gray-900 whitespace-nowrap dark:text-white">
        {props.color}
      </td>
      <td className="px-6 py-4 text-2xl text-center text-gray-900 whitespace-nowrap dark:text-white">
        {props.current}
      </td>
    </tr>
  );
}

export default Page;
