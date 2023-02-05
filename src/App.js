import './App.css';
import Header from './Header'
import Home from './Home'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe';
function App() {
  return (
    <div className="App">
    <Header />
    <Home/>
   <AboutMe/>
      <ContactMe/> 
    </div>
  );
}

export default App;
