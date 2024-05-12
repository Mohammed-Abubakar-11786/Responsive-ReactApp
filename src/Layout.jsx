/* import { Outlet } from "react-router-dom"; */
import Home from "./Components/Home/Home"; /* 
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"; */

function Layout() {
  return (
    <>
      <div className="">
        <Home />
      </div>
      {/* <div className="min-[455px]:hidden">
        <p className="font-bold text-red-500 text-4xl px-10 py-5">
          This Website supports for the screen widths greater than 455 pixel{" "}
        </p>
      </div> */}
    </>
  );
}

export default Layout;
