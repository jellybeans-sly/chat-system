import React, {useState, useEffect, useRef} from 'react'
import { db, auth } from '../firebase'
import SendMessage from './SendMessage'
import SignOut from './SignOut'

function Chat() {
  // para maenable yung scroll to bottom
  const scroll = useRef()

  // useState gamit dito, sa messages natin ipapasa yung mga data natin
  const [messages, setMessages] = useState([])

  // useEffect ginagamit pag yung isa sa variable natin nagbago, mag uupdate yun o magrereload
  // ang logic ipapasa natin yung messages, bale pag naupdate yun reload mo yung useEffect
  useEffect(() => {
    // pwede natin ipasa yung messages sa baba sa loob ng [] pero kahit di na kasi si firebase
    // may tinatawag na SNAPSHOT

    // onSnapshot naman kapag may nabago sa messages natin magrurun sya
    // parameter na snapshot para sa every data sa collection natin
      db.collection('messages').orderBy('createdAt').limit(500).onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => doc.data()))
      })
  }, [])
  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({id, text, photoURL, uid}) => (
          <div>
            {/* yung className natin condition yan pag ako yung nag login class ko sent, pag iba class nyan received */}
            <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
              <img src={photoURL} alt=""/>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      {/* wag kalimutan yung rules sa firebase papalitan ng true */}

      <SendMessage scroll={scroll} />
      <div ref={scroll}></div> {/* ref={scroll} para sa scroll to bottom */}
    </div>
  )
}

export default Chat
