import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Players from "./components/players";
import './App.css';



function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Players />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>

  );
}


const Header = () => {
  return (
    <div>
      <header className="header">
          Players
      </header>
      <hr />

    </div>
  );
};

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerText'>
        Miro 2022
      </div>
    </div>
  )
}


export default App;
