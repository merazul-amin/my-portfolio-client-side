import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/Routes/routes';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div>
      <ToastContainer position="top-center"
        autoClose={1000} />
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;
