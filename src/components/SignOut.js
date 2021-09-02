import React from 'react'
import {auth} from '../firebase'
import {Button} from '@material-ui/core'

function SignOut() {
  return (
    <div style={{ width: '100vw', display: 'flex'}}>
      <Button onClick={()=> auth.signOut()} style={{ padding: '10px', background: 'crimson', color: '#fff'}}>Sign Out</Button>
    </div>
  )
}

export default SignOut
