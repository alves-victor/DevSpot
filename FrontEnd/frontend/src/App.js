import './App.css';
import logo from './assets/devspot.png';
import Rotas from './routes';

function App() {
  return (
    <div className='container'>
      <img className='logo' src={logo} alt='DevSpot Logo' />

      <div className='content'>
        <Rotas />
      </div>

    </div>  
  );
}

export default App;
