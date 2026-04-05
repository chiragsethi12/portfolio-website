import About from './components/About/About'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import TechStack from './components/TechStack/TechStack'
import { useEffect } from 'react'
import './App.css'
function App() {
  useEffect(() => {
    const dots = [];

    for (let i = 0; i < 12; i++) {
      const dot = document.createElement("div");
      dot.className = "trail";
      document.body.appendChild(dot);
      dots.push(dot);
    }

    let x = 0,
      y = 0;

    window.addEventListener("mousemove", (e) => {
      x = e.clientX;
      y = e.clientY;
    });

    function animate() {
      let dx = x;
      let dy = y;

      dots.forEach((dot, index) => {
        dot.style.left = dx + "px";
        dot.style.top = dy + "px";

        const nextDot = dots[index + 1] || dots[0];
        dx += (nextDot.offsetLeft - dx) * 0.3;
        dy += (nextDot.offsetTop - dy) * 0.3;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);


  return (
    <>
      <div className="cursor-trail"></div>

      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <TechStack></TechStack>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </>
  );
}

export default App
