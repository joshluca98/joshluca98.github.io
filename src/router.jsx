import App from './App.jsx';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Education from './pages/Education.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import { createBrowserRouter } from 'react-router-dom';


export default createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/education',
                element: <Education />,
            },
            {
                path: '/projects',
                element: <Projects />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
    {
        path: '*',
        element: (
            <div>
                Page does not exist
                <br />
                <a href="/" className="text-blue-400">
                    Return Home
                </a>
            </div>
        ),
    },
]);