import { Route, Routes } from 'react-router-dom';

import GlobalStyle from './global'

import Navbar from "./components/Navbar";

import Home from './pages/index'
import About from './pages/about'
import Services from './pages/services';
import ContactUs from './pages/contact-us';
import SignUp from './pages/sign-up';

import SignIn from './pages/sign-in';

const App = () =>
  (
    <>
      <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>

          <Route path="/sign-In" element={<SignIn/>}/>
        </Routes>
    </>
  )

  export default App;

