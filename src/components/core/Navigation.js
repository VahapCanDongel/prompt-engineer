import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import getCategories from "../../../utils/category/getCategories";
import addPrompt from "../../../utils/prompt/addPrompt";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

export default function Navigation() {
  const [addPromptVisibility, setAddPromptVisibility] = useState(true);
  const [categories, setCategories] = useState([]);

  const [category_id, setSelecetedCategories] = useState("");
  const [title, setCategoryTitle] = useState("");
  const [description, setCategoryDescription] = useState("");
  const [content, setPromptContent] = useState("");

  const user = useUser();

  const router = useRouter();

  const supabaseClient = useSupabaseClient()

  const handleModalVisibility = () => {
    setAddPromptVisibility(!addPromptVisibility);
  };

  const addPromptHandler = async () => {
    const user_id = user.id;
    const user_name = user.user_metadata.full_name;
    const user_picture = user.user_metadata.picture;

    await addPrompt({
      category_id,
      user_id,
      user_name,
      user_picture,
      title,
      description,
      content,
    });
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  if (user) {
  }
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
          {/* <li>
            <input
              type="text"
              placeholder="Search"
              className="input w-full max-w-xs font-inter bg-white border-[1px] border-gray-400 rounded-sm"
            />
          </li> */}

          <div className="dropdown dropdown-bottom  dropdown-right ">
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
              className="dropdown-content menu p-2 shadow rounded-box w-52 bg-white"
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
                <a onClick={supabaseClient.auth.signOut()}>Sign Out</a>
              </li>
            </ul>
          </div>
        </ul>
      </div>

      {!addPromptVisibility && (
        <div className=" z-50 inset-1 flex absolute justify-center my-[2%] ">
          <div className="bg-white  w-[750px] h-[750px] rounded-md shadow-md border-[1px] border-gray-300 flex flex-col gap-2 p-6">
            <div className="flex justify-between">
              <div className="text-[20px] font-semibold text-gray-500">
                Add Prompt
              </div>
              <div
                className="hover:text-gray-300 transition-smooth hover:cursor-pointer"
                onClick={handleModalVisibility}
              >
                Close
              </div>
            </div>
            <div>
              You can add prompt to desired category, please give brief, clear
              description for the purpose of the prompt.
            </div>

            <div className="flex flex-col gap-4 justify-center items-center h-[600px]">
              <select
                className="w-[350px] bg-none p-2 rounded-sm border-gray-400 border-[1px] focus:outline-none mr-24 bg-white"
                onChange={(e) => setSelecetedCategories(e.target.value)}
              >
                <option>Please select</option>
                {Array.isArray(categories) &&
                  categories.map((data, index) => (
                    <option
                      key={index}
                      value={data.id}
                      className="g-gray-200 text-gray-800 hover:bg-gray-300 hover:text-gray-900 focus:bg-gray-300 focus:text-gray-900"
                    >
                      {data.name}
                    </option>
                  ))}
              </select>
              <input
                type="text"
                placeholder="Title"
                className=" rounded-sm p-2 w-[450px] border-gray-400 border-[1px] focus:outline-none focus:border-gray-500 transition-smooth bg-white"
                onChange={(e) => setCategoryTitle(e.target.value)}
              />
              <textarea
                placeholder="Short Description"
                className="bg-white rounded-sm p-2 w-[450px] border-gray-400 border-[1px] focus:outline-none focus:border-gray-500 transition-smooth  h-[80px] resize-none"
                onChange={(e) => setCategoryDescription(e.target.value)}
              ></textarea>
              <textarea
                placeholder="Prompt Content"
                className="bg-white rounded-sm p-2 w-[450px] border-gray-400 border-[1px] focus:outline-none focus:border-gray-500 transition-smooth  h-[250px]"
                onChange={(e) => setPromptContent(e.target.value)}
              ></textarea>

              <div
                onClick={addPromptHandler}
                className="bg-indigo-400 p-2 w-[100px] flex items-center justify-center text-white rounded-sm hover:bg-indigo-500 transition-smooth hover:cursor-pointer"
              >
                Add
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
