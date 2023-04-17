import SideMenu from "@/components/SideMenu";
import Navigation from "@/components/core/Navigation";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center antialiased font-source">
      <Navigation />

      <div className="flex w-[800px] gap-2">
        <SideMenu />
      </div>

      <Component {...pageProps} />
    </div>
  );
}
