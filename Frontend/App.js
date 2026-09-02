import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";


const App=()=>{
    return(
        <div>
            <Header/>
            <Body/>
            <Footer/>
            
        </div>
    )
}


const approuter=createBrowserRouter([
    {
        path:"/",
        element:<App/>
    }
])

const root=document.getElementById('root');
const rootElement=ReactDOM.createRoot(root)
rootElement.render(<RouterProvider router={approuter}/>)


