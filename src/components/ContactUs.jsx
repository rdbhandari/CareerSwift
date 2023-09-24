import React from "react";

export default function ContactUs() {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-20 p-5 bg-slate-100 gap-5 ">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border-2 p-5">
          <img
            src="src\assets\icons\Group.png"
            alt=""
            className="h-8 w-8 object-cover object-center"
          />
          <h3 className="text-xl mt-2 font-bold">Contact Us</h3>
          <br />
          <p>We are on a mission to standardize lab education</p>
          <button class="bg-blue-800 hover:bg-blue-700 text-white py-1 px-4 rounded-full my-5">
              Join us!
            </button>
        </div>
        <div className="rounded-lg border-2 p-5">
          <img
            src="src\assets\icons\Group-1.png"
            alt=""
            className="h-8 w-8 object-cover object-center"
          />
          <h3 className="text-xl mt-2 font-bold">Call us!</h3>
          <br />
          <p>Speak to our lab experts we are happy to help</p>
          <button class="bg-green-800 hover:bg-blue-700 text-white py-1 px-4 rounded-full my-5">
              Dive In
            </button>
        </div>
        <div className="rounded-lg border-2 p-5 col-span-2">
          <img
            src="src\assets\icons\Vector-7.png"
            alt=""
            className="h-8 w-8 object-cover object-center"
          />
          <h3 className="font-bold">Don't like froms?</h3>
          <br />
          <p>
            We got you covered. Drop a quick mail or just a chat with us on
            WhatsApp. We are available for you.
          </p>
          <div className="flex justify-start my-5">
            <button class="bg-green-900 hover:bg-blue-700 text-white py-1 px-4 rounded-full mx-3">
              Chat 
            </button>
            <button class="bg-green-500 hover:bg-blue-700 text-white py-1 px-4 rounded-full">
              I Prefer Email
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold tracking-tight sm:text-4xl basis-[40%]">
          Let's Get In Touch
        </h1>
        <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                for="first-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div class="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div class="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="email"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div class="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="phone-number"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autocomplete="tel"
                class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Select Subject?
              </label>
              <div className="flex gap-10 mt-1">
                <div className="flex gap-3">
                  <input type="radio" name="type" checked/>
                  <label class="block text-xs">General Enquiry</label>
                </div>
                <div className="flex gap-3">
                  <input type="radio" name="type" />
                  <label class="block text-xs">Complain</label>
                </div>
                <div className="flex gap-3">
                  <input type="radio" name="type" />
                  <label class="block text-xs">Specific</label>
                </div>
                <div className="flex gap-3">
                  <input type="radio" name="type" />
                  <label class="block text-xs">Other</label>
                </div>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="message"
                class="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div class="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="mt-10">
            <button
              type="submit"
              class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
