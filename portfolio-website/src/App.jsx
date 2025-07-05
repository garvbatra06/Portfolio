import './App.css'
import Home from './NavBar/Home'
import About from './NavBar/About'
import Experience from './NavBar/Experience'
import Contact from './NavBar/Contact'
import Navbar from './NavBar/Navbar'
import Background from './background'
import TechStack from './Techstack'
import Projects from './NavBar/Projects'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Background />
        <Navbar />
        <Home />
        <TechStack />
      </>
    )
  },
  {
    path: '/about',
    element: (
      <>
        <Background />
        <Navbar />
        <About />
      </>
    )
  },
  {
    path: '/projects',
    element: (
      <>
        <Background />
        <Navbar />
        <Projects />
      </>
    )
  },
  {
    path: '/experience',
    element: (
      <>
        <Background />
        <Navbar />
        <Experience />
      </>
    )
  },
  {
    path: '/contact',
    element: (
      <>
        <Background />
        <Navbar />
        <Contact />
      </>
    )
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;