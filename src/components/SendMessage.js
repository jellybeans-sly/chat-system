import React, {useState} from 'react'
import {Button, Input} from '@material-ui/core'
import {db, auth} from '../firebase'
import firebase from 'firebase'

// we send {scroll} to this function from Chat.js, prop sya na nakalagay scroll={scroll}
function SendMessage({scroll}) {

  const [msg, setMsg] = useState('')
  // bale pag nag edit sa input ng value maiistore na agad sa msg natin dahil sa onChange

  async function sendMessage(e){
    e.preventDefault()

    // kapag nag sign up kasi tayo sa gmail marami sya sinesend, kasama na ron yung imageURL tsaka text
    // bale uid tsaka photoURL lang need natin for now
    const { uid, photoURL } = auth.currentUser

    // bale wait nya muna ito iadd kasi nga naka async tayo, 1 by 1 lang pasahan ng data
    await db.collection('messages').add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })

    // we gonna empty the message
    setMsg('')
    // this will make our scroll smooth when new message appear
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div style={{ width: '100vw', position: 'relative' }}>
      <form onSubmit={sendMessage} style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
        <Input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Message..." style={{width: '76%'}} />
        <Button type="submit" style={{width: '15%', background: '#395dff', color: '#fff', fontWeight: 'bold', marginRight: '30px'}}>Send</Button>
      </form>
    </div>
  )
}

export default SendMessage
