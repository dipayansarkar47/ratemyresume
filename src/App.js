
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Result from './components/Result';
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

import Hero from './pages/hero';
import Parser from './components/parser';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <Hero></Hero>
      <Parser></Parser>
  
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
