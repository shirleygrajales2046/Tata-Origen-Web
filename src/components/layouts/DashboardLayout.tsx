import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/Sidebar"; 
import DashboardHeader from "../dashboard/DashboardHeader";

function DashboardLayout(){
    return(
        <div className="dashboard-layout">

            <Sidebar />
            <div className="dashboard-content">
                <DashboardHeader />

                <main className="dashboar-main">
                    <Outlet />
                </main>
            </div>

        </div>
    );
}

export default DashboardLayout;