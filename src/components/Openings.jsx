import React from "react";

export default function Openings() {
  return (
    <div className="my-20">
      <div className="flex justify-between sm:flex-row flex-col">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl basis-[40%] ">
          We're looking for talented people
        </h1>
        <p className="basis-[40%] my-10 md:my-0">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          deserunt quidem voluptatum ea ex amet aliquam. Dolores cupiditate
          quam, neque deleniti harum blanditiis est iste tempore unde! Eum
          laboriosam quaerat doloribus cum impedit?
        </p>
      </div>
      <div className="p-10 my-20 bg-slate-200">
        <div className="flex justify-center flex-col ">
          <h1 className="text-xl font-bold my-3">Current Opennings</h1>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-w-0 flex-auto rounded-md border-0 bg-gray-100 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            placeholder="Search Jobs"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-10 ">
        <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="p-6">
            <h3 class="mb-2 block font-sans text-lg font-semibold leading-snug tracking-normal antialiased">
              UI Developer
            </h3>
            <h5 className="text-base text-center"> Labkafe | Full Time</h5>
            <h5 className="text-sm my-1"> Responsibility</h5>
            <ul className="list-disc ml-3">
              <li className="text-xs">Lorem ipsum dolor, sit amet </li>
              <li className="text-xs">Lorem ipsum dolor, sit amet </li>
              <li className="text-xs">Lorem ipsum dolor, sit amet </li>
            </ul>
          </div>
          <div class="p-6">
            <button
              class="middle none center mr-4 rounded-full bg-yellow-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Apply
            </button>
          </div>
        </div>
        <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="p-6">
            <h3 class="mb-2 block font-sans text-lg font-semibold leading-snug tracking-normal antialiased">
              UI Developer
            </h3>
            <h5 className="text-base text-center"> Labkafe | Full Time</h5>
            <h5 className="text-sm my-1"> Responsibility</h5>
            <ul className="list-disc ml-3">
              <li className="text-xs">Lorem ipsum dolor, sit amet </li>
              <li className="text-xs">Lorem ipsum dolor, sit amet </li>
              <li className="text-xs">Lorem ipsum dolor, sit amet </li>
            </ul>
          </div>
          <div class="p-6">
            <button
              class="middle none center mr-4 rounded-full bg-yellow-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Apply
            </button>
          </div>
        </div>
        <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="p-6">
            <h3 class="mb-2 block font-sans text-lg font-semibold leading-snug tracking-normal antialiased">
              UI Developer
            </h3>
            <h5 className="text-base text-center"> Labkafe | Full Time</h5>
            <h5 className="text-sm my-1"> Responsibility</h5>
            <ul className="list-disc ml-3">
              <li className="text-xs">Lorem ipsum dolor, sit amet </li>
              <li className="text-xs">Lorem ipsum dolor, sit amet </li>
              <li className="text-xs">Lorem ipsum dolor, sit amet </li>
            </ul>
          </div>
          <div class="p-6">
            <button
              class="middle none center mr-4 rounded-full bg-yellow-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Apply
            </button>
          </div>
        </div>{" "}
        <div class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="p-6">
            <h3 class="mb-2 block font-sans text-lg font-semibold leading-snug tracking-normal antialiased">
              UI Developer
            </h3>
            <h5 className="text-base text-center"> Labkafe | Full Time</h5>
            <h5 className="text-sm my-1"> Responsibility</h5>
            <ul className="list-disc ml-3">
              <li className="text-xs">Lorem ipsum dolor, sit amet </li>
              <li className="text-xs">Lorem ipsum dolor, sit amet </li>
              <li className="text-xs">Lorem ipsum dolor, sit amet </li>
            </ul>
          </div>
          <div class="p-6">
            <button
              class="middle none center mr-4 rounded-full bg-yellow-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center my-10">
        <button class="bg-blue-400 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full">
          View All Openings
        </button>
      </div>
    </div>
  );
}
