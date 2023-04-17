import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function Login() {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const handleSignInClick = () => {
    supabaseClient.auth.signInWithOAuth({ provider: "google" });
    router.push("/");
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="text-gray-600 text-[20px]"></div>
      <div
        className="rounded-md border-[1px] border-gray-400 p-2 w-[200px] text-gray-500 flex justify-center items-center gap-2 hover:shadow-xl transition-smooth hover:cursor-pointer
      "
        onClick={handleSignInClick}
      >
        <svg
          width={25}
          height={25}
          className="fill-gray-500"
          viewBox="0 0 24 24"
        >
          <path d="M6.376 10.068A5.944 5.944 0 0 0 6.056 12a5.915 5.915 0 0 0 1.775 4.24 5.945 5.945 0 0 0 7.17.891h.002a5.96 5.96 0 0 0 2.564-3.043H12.22v-3.956h9.605a9.998 9.998 0 0 1-3.564 9.666A9.958 9.958 0 0 1 12 22 9.997 9.997 0 0 1 3.118 7.401 9.998 9.998 0 0 1 12 2a9.96 9.96 0 0 1 6.383 2.302l-3.24 2.652a5.948 5.948 0 0 0-8.767 3.114Z" />
        </svg>
        Sign In
      </div>
    </div>
  );
}
