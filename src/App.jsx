import Header from "./components/Header/Header";
import css from "./styles/app.module.scss";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Courses from "./components/Courses/Courses";
import Links from "./components/Links/Links";
import Qualification from "./components/Qualification/Qualification";

function App() {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Courses />
      <Links />
      <Qualification />
    </div>
  );
}

export default App;
