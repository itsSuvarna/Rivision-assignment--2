import './App.css';
import React,{useState,useEffect} from "react"

function App() {

  useEffect(()=>{
    .fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(res=>setData(users))
  },[]);
  return (
   <>

   
   </>
  );
}

export default App;
