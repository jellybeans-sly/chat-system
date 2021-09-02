import './App.css';
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './firebase'

function App() {

  // true or false magiging value ni [user], aalamin nya kung nag login ba o hindi
  const [user] = useAuthState(auth)

  return (
    <>
      {user ? <Chat /> : <SignIn />}
    </>
  );
}

export default App;
