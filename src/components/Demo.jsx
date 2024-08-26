import { useState } from "react";
import { findNthPrime } from "../utils/helper";
import { useMemo } from "react";

const Demo = () => {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);
  //heavy operation
  console.log("calculating prime no. of ", number);

  const prime = useMemo(() => findNthPrime(number), [number]);
  return (
    <div
      className={
        "m-4 p-2 border border-black w-96 h-96 " +
        (darkTheme && "bg-black text-white")
      }
    >
      <div>
        <input
          type="number"
          placeholder="enter the number..."
          className="border border-black p-2 text-black"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div>
        <h1 className="font-bold my-4 mx-2 py-2">Nth prime no-{prime}</h1>
        <button
          className="px-4 py-2 bg-green-200 text-black"
          onClick={() => {
            setDarkTheme(!darkTheme);
          }}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Demo;
