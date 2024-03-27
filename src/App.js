import React from 'react';
import  ReactDOM from 'react-dom/client';
import Header from './components/Header'
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './components/Error';
import About from './components/about';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';


const App = ()=>{
    return (
        <div>
            <Header></Header>
            <Outlet/>
            <Footer></Footer>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Body></Body>

            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path: "/restaurant/:id",
                element:<RestaurantMenu/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


