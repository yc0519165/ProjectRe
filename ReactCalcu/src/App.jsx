import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Display from './components/Display'

function App() {
  const [calVal, setcalVal] = useState(" ");
  const onButtonClick =(buttonText)=>{
    if(buttonText === 'AC'){
      setcalVal("")
    }else if (buttonText === '='){
      const result = eval(calVal)
      setcalVal(result)
    }else if(buttonText === 'DEL'){
      const newsetcalVal = calVal.buttonText(0, buttonText.length-1)
      setcalVal(newsetcalVal)
    }else{
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue)
    }

  }
  return (
    <div className="calsi-content">
      <Display displayValue={calVal}></Display>
      <Button onButtonClick={onButtonClick}></Button>
    </div>
  )
}

export default App
