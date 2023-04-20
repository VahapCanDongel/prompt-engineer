import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useState } from "react";
import PromptEditor from "../prompt/PromptEditor";


export default function Navigation() {
  const [addPromptVisibility, setAddPromptVisibility] = useState(true);
  const user = useUser();
  const router = useRouter();

  const handleModalVisibility = () => {
    setAddPromptVisibility(!addPromptVisibility);
  };

  return (
    <div className="w-full sticky z-50 inset-1 bg-white">
      <div className="flex justify-center items-center gap-[200px] ">
        <div
          className="text-transparent bg-clip-text text-[40px] font-bold font-right bg-gradient-to-r from-indigo-300 to-purple-400 select-none hover:cursor-pointer"
          onClick={() => router.push("/")}
        >
          CGPrompT
        </div>
        <ul className="flex justify-center items-center gap-3">
          <li>
            <input
              type="text"
              placeholder="Search"
              className="input w-full max-w-xs font-inter bg-white border-[1px] border-gray-400"
            />
          </li>

          <div className="dropdown dropdown-bottom  dropdown-right">
            {!user ? (
              <div
                className="hover:cursor-pointer hover:text-gray-500 transition-smooth"
                onClick={() => router.push("/login")}
              >
                Login
              </div>
            ) : (
              <img
                src={user.user_metadata.picture}
                tabIndex={0}
                className="rounded-full border-[1px] border-gray-400 w-12 h-12 p-2 hover:cursor-pointer"
              />
            )}

            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={handleModalVisibility}>
                <a>
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 24 24"
                    className="fill-gray-400"
                  >
                    <path d="M8.239 11.634 3.292 6.7a.997.997 0 0 1 1.09-1.634 1 1 0 0 1 .323.224l5.654 5.64a.996.996 0 0 1 0 1.41l-5.654 5.64a.999.999 0 1 1-1.413-1.41l4.947-4.936Zm3.754 4.33h7.995a1 1 0 0 1 1 .998.996.996 0 0 1-1 .997h-7.995a1 1 0 0 1-.999-.997.996.996 0 0 1 1-.997Z" />
                  </svg>
                  Add Prompt
                </a>
              </li>
              <li>
                <a>My Prompts</a>
              </li>

              <li>
                <a>Sign Out</a>
              </li>
            </ul>
          </div>
        </ul>
      </div>

      {!addPromptVisibility && (
        <div className=" z-50 inset-1 flex absolute justify-center my-[2%] ">
          <div className="bg-white  w-[750px] h-[750px] rounded-md shadow-md border-[1px] border-gray-300 flex flex-col gap-2">
            <select className="w-[250px] bg-none p-2 rounded-md border-gray-400 border-[1px] focus:outline-none">
                <option className="g-gray-200 text-gray-800 hover:bg-gray-300 hover:text-gray-900 focus:bg-gray-300 focus:text-gray-900">Marketing</option>
                <option>Education</option>
                <option>Mentoring</option>
            </select>
           <input type="text" placeholder="Title" className="bg-none rounded-md p-2 w-[250px] border-gray-400 border-[1px] focus:outline-none focus:border-gray-500 transition-smooth "/>
           <textarea placeholder="Description" className="bg-none rounded-md p-2 w-[250px] border-gray-400 border-[1px] focus:outline-none focus:border-gray-500 transition-smooth  h-[150px] resize-none"></textarea>
          
            <PromptEditor/>
        
          </div>
        </div>
      )}
    </div>
  );
}
