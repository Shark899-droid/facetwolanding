import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Download from './pages/Download/Download.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import Main from './pages/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/about-us' element={<About />}></Route>
        <Route path='/contact-us' element={<Contact />}></Route>
        <Route path='/download' element={<Download />}></Route>
        <Route path='/sign-in' element={<SignIn />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
