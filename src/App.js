import Players from "./components/players";
import './App.css';



function App() {
  return (
    <>
      <Header/>
      <Players/>
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
