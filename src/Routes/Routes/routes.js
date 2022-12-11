import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import HireMe from "../../Pages/HireMe/HireMe";
import Home from "../../Pages/Home/Home";
import ProjectDetails from "../../Pages/ProjectDetails/ProjectDetails";

const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/', element: <Home></Home> },
            { path: '/about', element: <About></About> },
            { path: '/contactMe', element: <Contact></Contact> },
            { path: '/hireMe', element: <HireMe></HireMe> },
            {
                path: '/projectDetails/:id', element: <ProjectDetails></ProjectDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/projectDetails/${params.id}`)
            }
        ]
    }
])
export default routes;