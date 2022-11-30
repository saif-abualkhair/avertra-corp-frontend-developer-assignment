import './form.css';
import { useState } from 'react';

function getMessage(isValid) {
  if (isValid) {
    return <span className=''>Valid</span>;
  } else {
    return <span className=''>Invalid</span>;
  }
}

function Form() {
  let textboxValue;
  const [isValid, setIsTextboxValid] = useState(false);

  const handleChange = (e) => {
    textboxValue = e.target.value;
    setIsTextboxValid((textboxValue && textboxValue != ''));
  };

  const handleSubmit = (e) => {
    console.log('submit', textboxValue);
  }
  
  return (
    <form>
      <input onChange={handleChange}></input>
      {getMessage(isValid)}

      <button className='btn btn-cyan' type='button' onClick={handleSubmit}>Submit</button>
    </form>
  );
}



export default Form;