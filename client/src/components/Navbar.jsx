import React from 'react'

export const Navbar = ({obj}) => {
  
  const {requestForm, setRequestForm} = obj;
   
  return (
  <nav>
    <div>
    <p>Abstract | Help center</p>
    <button onClick={() => setRequestForm(state => !state)}>{
      requestForm ? 'X' : 'Submit a request'
      }</button>
    </div>
  </nav>
  )
}
