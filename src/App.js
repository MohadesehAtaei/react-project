import { BrowserRouter, Routes, Route } from 'react-router-dom';

// //css
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

// //icons
import "@fortawesome/fontawesome-free/css/all.min.css"

// //js
import "bootstrap/dist/js/bootstrap.bundle"

import NavBar from './Components/NavBar'
import Home from './Pages/Home.jsx';
import Events from './Pages/Events.jsx';
import Footer from './Components/Footer'

// images
import Evand from './assests/images/evand-full.png'
import parsPack from './assests/images/parspack.png'
import bazaar from './assests/images/bazaar.png'
import appStore from './assests/images/app-store-logo.png'
import android from './assests/images/android.png'


function App() {
  return (
    <BrowserRouter>

        <NavBar
        evand={Evand}
        />

        <Routes>

            <Route path='/'  element={<Home/>}/>
            <Route path='/events'  element={<Events/>}/>

        </Routes>

        <Footer
        parsPack={parsPack}
        bazaar={bazaar}
        appStore={appStore}
        android={android}
        />
        
    </BrowserRouter>
  );
}

export default App;
