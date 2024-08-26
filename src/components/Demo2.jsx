import { useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  const z = useRef(0);
  //z is an object not z=0
  let x = 0;
  console.log("Rendering...");
  return (
    <div className="m-4 p-2 border border-black w-[400px] h-96">
      <button
        className="px-4 m-2 bg-green-100"
        onClick={() => {
          x = x + 1;
          console.log("X=", x);
        }}
      >
        Inc x
      </button>
      <span className="font-bold text-xl">X={x}</span>
      <button
        className="px-4 m-2 bg-green-100"
        onClick={() => {
          setY(y + 1);
          console.log("Y=", y);
        }}
      >
        Inc y
      </button>
      <span className="font-bold text-xl">Y={y}</span>
      <button
        className="px-4 m-2 bg-green-100"
        onClick={() => {
          z.current = z.current + 1;
          console.log("Z=", z.current);
        }}
      >
        Inc Z
      </button>
      <span className="font-bold text-xl">Z={z.current}</span>
    </div>
  );
};

export default Demo2;
