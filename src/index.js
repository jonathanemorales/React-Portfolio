import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import NavBar from './components/Nav/NavBar';
import Github from './components/Social/Github/Github';

ReactDOM.render(
  <>
    <NavBar />
    <div id="mainDiv">
      <About />
      <Github />
      <Experience />
    </div>
  </>
  ,
  document.getElementById('root')
);
