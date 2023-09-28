import React,{useState} from "react";
import './index.css'
alert("Welcome to BMI App,Click ok to continue");
function App() {
  
  //state
  const[weight,setWeight]=useState(0)
  const[height,setHeight]=useState(0)
  const[bmi,setBmi]=useState('')
  const[message,setMessage]=useState('')
  let imgSrc = ''
  let calcBmi=(event)=>{
    event.preventDefault()
    if(weight==0 || height==0){
      alert('Please enter a valid weight and height')
    }else{
      let bmi=(weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMessage('You are underweight')
      }else if(bmi>=25&&bmi<30){
        setMessage('You are a healthy weight')
      }else{
        setMessage('you are overweight')
      }
    }
  }
  if(bmi<1){
    imgSrc=null
  }else{
    if(bmi<25){
      imgSrc=require('../src/images/underweight.jpg')
    }else if(bmi>=25 && bmi<30){
      imgSrc=require('../src/images/healthy.jpg')
    }else{
      imgSrc=require('../src/images/overweight.jpg')
    }
  }
  return (
    <div className="flexbox">
 
      <div className="card">
  
        <h1 className="center" >BMI Calculator</h1>
        <form onSubmit={calcBmi}>
          <div>
            <label> Weight(in pounds)</label>
            <input value={weight} onChange={(e)=> setWeight(e.target.value)} />
          </div>
          <div>
            <label> Height(in inches)</label>
            <input value={height} onChange={(event)=> setHeight(event.target.value)} />
          </div>
          <div>
          <h3 className="center"> <b>  <blink> Submit to Calculate your BMI !</blink></b>  </h3>
            <button className="btn" type="submit">Submit</button>
          </div>
        </form>
        <div className="center">
          <h3 color="red">Your BMI is:{bmi}</h3>
          <p >{message}</p>
        </div>
        <div className="img-container">
          <img src={imgSrc} alt=''></img>
          <br></br>
          <a  href="https://calculatorsworld.com/health/wp-content/uploads/sites/4/bmi-chart-metric.png">Bmi chart</a>
        </div>
      </div>
    </div>
  );
}

export default App;
