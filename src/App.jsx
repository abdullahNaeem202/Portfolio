import Toggle from './components/Toggle.jsx';
import Header from './components/Header.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
    return (
      <>
      <div className='overflow-x-hidden'>
        <NavigationBar></NavigationBar>
        <Header></Header>
        <Toggle></Toggle>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </div>

      </>

    );
}

export default App
