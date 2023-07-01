
import './App.css';
import Home from './components/Home';
import Result from './components/Result';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home></Home>
    ),
  },
  {
    path: "result",
    element: <Result></Result>
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
