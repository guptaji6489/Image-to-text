import React, { useState, useEffect } from 'react';
import './App.css';
import Tesseract from 'tesseract.js';
import ImageWrapper from './components/ImageWrapper';
import TextWrapper from './components/TextWrapper';
import Axios from 'axios';


// const AppData = async () =>{
//   const result  = await Tesseract.recognize(
//     'https://tesseract.projectnaptha.com/img/eng_bw.png',
//     'eng');
// };

const API_KEY = "36b83bbd1b92af74bbe0965b4982c642";


const App = () =>{

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [text, setText] = useState(null);

  const convertImageToText = async () => {
    setLoading(true);
    const result = await Tesseract.recognize(imageUrl, "eng");
    setText(result.data.text);
    setLoading(false);
  };

  const uploadFile = async e => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      const config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
  
      const res = await Axios.post(
        `https://api.imgbb.com/1/upload?expiration=60&key=${API_KEY}`,
        formData,
        config
      );

      setImageUrl(res.data.data.url);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (imageUrl != null) {
      convertImageToText();
    }
  }, [imageUrl]);
  

  return(
    <>
       <div className="App">
      <h1 className={{style:"align-center"}}> Image To Text Converter</h1><p>By Harshit Gupta</p><br/>
      <div className="container">
      {loading && <div className="loader"></div>}
        {text == null ? (
          <ImageWrapper loading={loading} uploadFile={uploadFile} />
        ) : (
          <TextWrapper text={text} />
        )}
      </div>
    </div>
    </>

  )


}

export default App;
