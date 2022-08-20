import { useState, useEffect } from 'react';
import './App.css';
import Nav from './nav';
import  Lines from './Data.json';
import { ImCopy } from 'react-icons/im'

function App() {

const [pickup, setPickup] = useState({});
const getRandomData = () => {
  const data = Math.floor(Math.random() * Lines.length);
    setPickup(Lines[data])
}

useEffect(() => {
  getRandomData();
}, []);

const copyText = (e) => {
  let method ="";
  const copyData = navigator.clipboard.writeText(pickup.line);

     method = !copyData ? "alert('not copied')" : document.querySelector(".coppied").style.display= "block";

  setTimeout(() => {
    document.querySelector(".coppied").style.display= "none";
  }, 1000)
  return method;


}

const Footer = () => {
    return (
        <footer>
         <h6> Atomicity 2022 React project </h6>
        </footer>
    )
}
  return (
    <div className="App">
      <Nav/>
        <div className='section'>
            <h2>RANDOM PICKUP LINES</h2>
            <div className='coppied'>
              <p>Copied</p>
            </div>
            <div className="jumbotron">
                <p>{pickup.line}</p>
                <div className='button'>
                     <div className='copy'>
                           <ImCopy onClick={copyText}/>
                      </div>     
                    <button onClick={getRandomData}>
                        NEW LINES
                    </button>
                    
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
