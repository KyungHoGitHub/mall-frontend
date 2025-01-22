import BasicLayout from "../../layouts/BasicLayout.jsx";
import {Outlet} from "react-router-dom";

const IndexPage = () => {

    return (
        <>
            <BasicLayout>
                <div className="w-full flex m2 p-2">
                    <div className="text-xl m-1 p-2 w-20 font-extrabold text-centerunderline">
                        LIST
                    </div>
                    <div className="text-xl m-1 p-2 w-20 font-extrabold text-centerunderline">
                        ADD
                    </div>
                </div>
                <div className="flex flex-wrap w-full">
                    <Outlet/>
                </div>
            </BasicLayout>
        </>
    )
}
export default IndexPage;