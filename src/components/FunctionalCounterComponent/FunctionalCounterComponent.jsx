import React ,{useState} from 'react'
const  FunctionalCounterComponent=()=> {
   //let countNumber=0;
    const [countNumber,setCounter]=useState(0);
    const incrementfunction =()=>{
    setCounter(countNumber+1)  
    // console.log(countNumber++) 
    }
    const decrementfunction =()=>{
        setCounter(countNumber-1) 
       //  console.log(countNumber--) 
    }
    return (
    <React.Fragment>
      <h3>Functional Counter Component</h3>
        <button onClick={decrementfunction}> -1</button>
        {/* {}-used to denote an event(eg.reload,swipeup swipedown) */}
        <p>{countNumber}</p>
        <button onClick={incrementfunction}>+1</button>
    </React.Fragment>
  )
    }
export default FunctionalCounterComponent