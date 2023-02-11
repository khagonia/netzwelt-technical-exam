import Login from "./components/Login";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from "./components/Root";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {path: '/', element: <Home /> },
      {path: '/home/index', element: <Home /> },
      {path: '/account/login', element: <Login /> },
    ]
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
