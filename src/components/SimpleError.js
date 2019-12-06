import React, { Component } from 'react'

function SimpleError(dope=""){

  dope.map(ele=>{
    console.log(ele);
  })
  return (
    <div>
      Hello from simple error
    </div>
  )
}

export default SimpleError;