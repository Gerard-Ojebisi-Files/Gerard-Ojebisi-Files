import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Shorts from './pages/Shorts';
import Subscriptions from './pages/Subscriptions';
import You from './pages/You';
import Download from './pages/Downloads';
import NotFound from './pages/NotFound';
import TopBar from './components/TopBar';
import Navigation from './components/Navigation';
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shorts",
    element: <Shorts />
  },
  {
    path: "/subscriptions",
    element: <Subscriptions />
  },
  {
    path: "/you",
    element: <You />
  },
  {
    path: "/download",
    element: <Download />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

function App() {
  return (
    <div className='parent' style={{ backgroundColor: "#000", color: "#fff", position: "relative", width: "100vw", height: "100vh", overflowY: "scroll" }}>
      <TopBar />
      <div className='main-div' style={{ position: "absolute", top: "60px", left: "120px", color: "#fff", backgroundColor: "#000", width: "90%" }}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
