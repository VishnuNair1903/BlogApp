import React, { useEffect } from 'react'
import '../App.css';
import {useState} from 'react';
import {addDoc, collection} from 'firebase/firestore';
import {db, auth} from '../firebase-config';
import { useNavigate } from 'react-router-dom';

function CreatePost({isAuth}) {

  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');

  const postCollectionRef=collection(db, 'posts' );
  let navigate=useNavigate();

  const createPost=async()=>{

    await addDoc(postCollectionRef, {
      title: title,
      postText: postText,
      author: {name: auth.currentUser.displayName, id:auth.currentUser.uid},
    });

    navigate('/');

  }

  useEffect(()=>{
    if(!isAuth){
      navigate('/login');

    }
  },[]);

  return (
    <div className='createPostPage'>
      <div className='postcontainer'>
        <h1>Create A Post</h1>
        <div className='inputGp'>

          <label>Title:</label>
          <input type='text' placeholder='Title' onChange={(event)=>{setTitle(event.target.value)}} />

        </div>
        <div className='inputGp'>

          <label>Post:</label>
          <textarea placeholder='Post' onChange={(event)=>{setPostText(event.target.value)}} />

        </div>
        <button onClick={createPost}>Post</button>

      </div>
        
      
    </div>
  )
}

export default CreatePost
