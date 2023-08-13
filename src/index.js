import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Error from './error'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <MyApp />
  </>
);
function MyApp() {
  const [email, setEmail] = useState("@gmail.com")
  const [name, setName] = useState("")
  const [errorName, setErrorName] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault()
    if (name === ""){
      setErrorName("Please enter your name")
      return
    }
    if (email === ""){
      setErrorEmail("Please enter your email")
      return
    }
    if (Validate() === false){
      setErrorEmail("Please enter a valid email")
      return
    }
    console.log(name, email)
  }
  const Validate = ()=>{
    const emailRegx = ""
    const emailValid = true;
    if (emailValid){
      return true;
    }else{
      return false;
    }
  }
  return (
    <>
      <h1>Form Submission</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input onChange={e => setEmail(e.target.value)} value={email} type='text' />
        </label>
        <br/>
        {errorEmail && <Error msg={errorEmail}/>}
        <br />
        <lable>
          Name
          <input onChange={e => setName(e.target.value)} value={name} type='text' />
        </lable>
        <br/>
        {errorName && <Error msg={errorName}/>}
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  )
}

