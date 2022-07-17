import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [charLimit, setCharLimit] = useState(50);
  const [fontSize, setFontSize] = useState(16);

  const handleChange = (e) => {

    const value = e.target.value;
    if (value.length <= charLimit) {
      setText(value);

      const wCount = value == '' ? 0 : value.split(' ');
      setWordCount(wCount.length);

      const chCount = value == '' ? 0 : value.split('');
      setCharCount(chCount.length);
    }
  }

  const fontSizeChangeHandler = (e) => {
    setFontSize(e.target.value);
  }

  const handleLimitChange = (e) => {
    setCharLimit(e.target.value);
  }


  return (
    <div id="main">
      <div>
        <label>Font Size picker</label>
        <input type="range" id="fontSize-input" min='16px' max="32px" onChange={fontSizeChangeHandler} value={fontSize}></input>
      </div>
      <div>
        <label>Word Limit Input</label>
        <input type="text" id="char-limit-input" value={charLimit} onChange={handleLimitChange} ></input>
      </div>

      <textarea onChange={handleChange} style={{ fontSize: fontSize + "px" }} value={text} max={charLimit}></textarea>


      <div id="word-counter" >Total no of words written {wordCount}</div>
      <div id="char-counter" >Total no of characters used {charCount}</div>
    </div>
  )
}


export default App
