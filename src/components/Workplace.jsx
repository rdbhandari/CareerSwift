import React from "react";

export default function Workplace() {
  return (
    <div className="my-15 p-5">
      <div className="flex justify-between sm:flex-row flex-col">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl basis-[40%]">
          Fun at workplace
        </h1>
        <p className="basis-[40%] my-10 md:my-0">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          deserunt quidem voluptatum ea ex amet aliquam. Dolores cupiditate
          quam, neque deleniti harum blanditiis est iste tempore unde! Eum
          laboriosam quaerat doloribus cum impedit?
        </p>
      </div>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-flow-row-dense gap-4 mt-8 mx-auto">
        <div className="row-span-2 col-span-2 ">
          <img
            src="src\assets\images\Rectangle 3150.png"
            className="object-fill object-center h-80 w-full"
          />
        </div>
        <div>
          <img
            src="src\assets\images\Rectangle 3152.png"
            className="object-fill object-center h-36 w-full"
          />
        </div>
        <div className="row-span-2 col-span-2">
          <img
            src="src\assets\images\Rectangle 3151-1.png"
            className="object-fill object-center h-80 w-full"
          />
        </div>
        <div>
          <img
            src="src\assets\images\Rectangle 3153.png"
            className="object-fill object-center h-36 w-full"
          />
        </div>
        <div className="row-span-2 col-span-2">
          <img
            src="src\assets\images\Rectangle 3150-1.png"
            className="object-fill object-center h-80 w-full"
          />
        </div>
        <div className="row-span-2 col-span-2">
          <img
            src="src\assets\images\Rectangle 3151.png"
            className="object-fill object-center h-80 w-full"
          />
        </div>
        <div>
          <img
            src="src\assets\images\Rectangle 3154.png"
            className="object-fill object-center h-36 w-full"
          />
        </div>
        <div>
          <img
            src="src\assets\images\Rectangle 3153-1.png"
            className="object-fill object-center h-36 w-full"
          />
        </div>
      </div>
    </div>
  );
}
