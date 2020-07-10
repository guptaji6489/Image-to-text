import React from 'react';
import './App.css';
import Tesseract from 'tesseract.js';
import ImageWrapper from './components/ImageWrapper';
import TextWrapper from './components/TextWrapper';


const AppData = async () =>{
  const result  = await Tesseract.recognize(
    'https://tesseract.projectnaptha.com/img/eng_bw.png',
    'eng');
};

const App = () =>{

  return(
    <>
       <div className="App">
      <h1 className={{style:"align-center"}}> Image To Text Converter</h1><br/>
      <div className="container">
       {/* <ImageWrapper /> */}
      <TextWrapper />
      </div>
    </div>
    </>

  )


}

export default App;
