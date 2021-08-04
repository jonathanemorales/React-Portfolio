import ReactDOM from 'react-dom';
import './includes/css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import NavBar from './components/Nav/NavBar';

ReactDOM.render(
  <>
    <NavBar />
    <div id="mainDiv">
      <About />
      <Experience />
    </div>
  </>
  ,
  document.getElementById('root')
);
