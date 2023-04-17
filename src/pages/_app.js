import SideMenu from "@/components/SideMenu";
import Navigation from "@/components/core/Navigation";
import "@/styles/globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center antialiased font-source">
      <Navigation />

      <div className="flex w-[800px] gap-2">
        <SideMenu />
      </div>

      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
      </SessionContextProvider>
    </div>
  );
}
