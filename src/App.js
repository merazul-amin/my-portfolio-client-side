import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/Routes/routes';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'react-circular-progressbar/dist/styles.css';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from 'react';
import { DarkLightContext } from './contexts/ThemeContext/ThemeContext';

function App() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkLightContext);

  return (
    <div className='main-Container' >
      <ToastContainer position="top-center"
        autoClose={1000} />
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;
