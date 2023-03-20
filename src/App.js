import './App.css';
import React, { useEffect, useState } from 'react';
import EmailList from "./components/EmailList/EmailList";
import Header from './components/Header/Header'
import Sidebar from "./components/Sidebar/Sidebar";
import SendMail from "./components/SendEmail/SendEmail"
import Mail from "./components/Mail/Mail"
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import {
   BrowserRouter as Router,
  Route,
  Routes,
 } from 'react-router-dom';
import Login from "./components/Login/Login";
import {login, logout, selectUser } from './features/userSlice';
import { db, auth } from './firebase';
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import { onAuthStateChanged } from '@firebase/auth';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser);
  const [emails, setEmails] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth,(authUser) =>{
      if(authUser) {
        dispatch(login({
          username:authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid,
        }))
      }else {
            dispatch(logout())
      }
  })
    onSnapshot(query(collection(db,'emails'),orderBy("timestamp", "desc")), (snapshot => setEmails(snapshot.docs.map(doc=>({
      id: doc.id,
            data: doc.data(),
    })
    )
    )
    )
    )
  }, []);


  return (
    <Router>
      {!user ? (
      <Login />
    ) : (
      <div className="app">
      <Header />
      <div className="app__body">
      <Sidebar emails={emails} />
      <Routes>
        <Route path="/mail" element={<Mail/>} />
        <Route path="/" element={<EmailList emails={emails}/>} />
      </Routes>
      
      </div>
      {sendMessageIsOpen && <SendMail />}
    </div>
    )}
    </Router>  
  );
}

export default App;
