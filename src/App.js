import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AuthorizedDealer from './components/sections/AuthorizedDealer';
import Benefits from './components/sections/Benefits';
import Convert3DPro from './components/sections/Convert3DPro';
import Counseling from './components/sections/Counseling';
import FAQ from './components/sections/FAQ';
import Featured from './components/sections/Featured';
import Memberships from './components/sections/Memberships';
import Header from './components/sections/Header';
import Results from './components/sections/Results';
import Courses from './components/sections/Courses';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />    
      <Results />
      <Courses />
      <Convert3DPro />
      <Memberships />
      <Counseling />
      <Featured />
      <Benefits />
      <AuthorizedDealer />  
      {/* FIXME: expansión de preguntas e imagen  */}
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
