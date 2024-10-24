import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Homepage from './Pages/Homepage';
import Coinpage from './Pages/Coinpage';


function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/coins/:id' element={<Coinpage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
