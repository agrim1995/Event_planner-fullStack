import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function MainC() {
    return <>

        <Navbar />
        <Sidebar />
        <br></br>
        <br></br>



        <div className="mt-5" style={{ "minHeight": "100vh" }}>
            <Outlet />
        </div>
        <Footer />
    </>
}