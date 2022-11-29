import './App.css';
import Nav from './nav/nav'
import Form from './form/form'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Nav></Nav>
        <Form></Form>
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
