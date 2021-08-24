import React, {useState} from 'react';


export const Picking = () => {
  const [first, setfirst] = useState("bear");
  const [second, setsecond] = useState("gorilla");


  return (
    <div>
      <div className="my-2">
        <h1 className="text-5xl tracking-wider font-bold text-center"> Pick what would win</h1>
      </div>
      <div className="flex justify-evenly my-4">
        <div className="flex border-2 border-black m-4 rounded-lg h-48 w-48 items-center justify-center">
          <h1>
            {first}
          </h1>
        </div>
        <div className="flex border-2 border-black m-4 rounded-lg h-48 w-48 items-center justify-center">
          <h1>
            {second}
          </h1>
        </div>
      </div>
    </div>
  );
};