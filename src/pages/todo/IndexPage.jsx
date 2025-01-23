import BasicLayout from "../../layouts/BasicLayout.jsx";
import {Outlet, useNavigate} from "react-router-dom";
import {useCallback} from "react";

const IndexPage = () => {
    const navigate = useNavigate();

    const handleClickList = useCallback(()=>{navigate({pathname:'list'})})
    const handleClickAdd = useCallback(()=>{navigate({pathname:'add'})})
    return (
        <>
            <BasicLayout>
                <div className="w-full flex m2 p-2">
                    <div className="text-xl m-1 p-2 w-20 font-extrabold text-centerunderline" onClick={handleClickList}>
                        LIST
                    </div>
                    <div className="text-xl m-1 p-2 w-20 font-extrabold text-centerunderline" onClick={handleClickAdd}>
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