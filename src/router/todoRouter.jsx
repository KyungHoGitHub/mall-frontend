import {lazy, Suspense} from "react";

const Loading = <div>Loading...</div>
const TodoList = lazy(()=> import("../pages/todo/ListPage.jsx"))
const todoRouter= ()=>{

    return[
        {
            path: "list",
            element:<Suspense fallback={Loading}><TodoList/></Suspense>
        }
    ]
}
export default todoRouter;