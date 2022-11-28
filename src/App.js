import './App.css';
import Nav from './nav/nav'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Nav></Nav>
        <div className='test'>
          <span className='text-dark-violet'>
            content
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
