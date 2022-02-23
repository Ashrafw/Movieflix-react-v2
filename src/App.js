import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import GenrePage from './pages//GenrePage';
import WatchMovie from './pages/WatchMovie';
import Search from './pages/Search';
import Footer from './components/Footer';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/Movieflix-react-v2' element={<Home />} />
                    <Route path='/Movieflix-react-v2/genre/:id' element={<GenrePage />} />
                    <Route
                        path='/Movieflix-react-v2/movie/:id'
                        element={<WatchMovie />}
                    />
                    <Route
                        path='/Movieflix-react-v2/search/:searchid'
                        element={<Search />}
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
