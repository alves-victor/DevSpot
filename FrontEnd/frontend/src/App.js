import './App.css';
import logo from './assets/devspot.png';

function App() {
  return (
    <div className='container'>
      <img className='logo' src={logo} alt='DevSpot Logo' />

      <div className='content'>
        <p>
          Ofereça <strong>Spots</strong> para programadores e encontre <strong>Talentos</strong> para sua empresa
        </p>

        <form>
          <label htmlFor="email">EMAIL *</label>
          <input type="email" id="email" />
          <button className='btn' type='submit'>Entrar</button>
        </form>

      </div>

    </div>  
  );
}

export default App;
