import React from 'react'
import firebase from 'firebase'
import {auth} from '../firebase'
import {Button} from '@material-ui/core'

function SignIn() {

  // function para sa google authentication
  function signInWithGoogle(){
    // pop up window
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider); // yung auth galing sa firebase.js
  }

  // gagawa tayo ng button gamit material ui
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center'}}>
      <Button onClick={signInWithGoogle} style={{ padding: '20px', background: 'crimson', color: '#fff' }}>Sign In With Google</Button>
    </div>
  )
}

export default SignIn
