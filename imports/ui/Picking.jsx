import React from 'react';


export const Picking = () => {
  const [first, setfirst] = useState("bear");
  const [second, setsecond] = useState("gorilla");


  return (
    <div>
      <div>
        <h1 className="text-5xl tracking-wider font-bold"> Pick what would win</h1>
      </div>
      <div className="flex">
        <div className="border-2 border-black">
          {first}
        </div>
        <div className="">
          {second}
        </div>
      </div>
    </div>
  );
};