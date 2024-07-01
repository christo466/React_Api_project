
import './About.css'; 
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
    <div>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/dash">Dash</Link></li>
    <hr></hr>
    </div>
    <div className="about-container">
     
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are committed to providing you with the best content.
        This is a simple example page to demonstrate navigation and routing in React.
      </p>
    </div>
    </>
  );
}

export default About;
