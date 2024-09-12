import React from 'react'
import { useState, useEffect } from 'react';
import { getDocs , collection, deleteDoc, doc} from 'firebase/firestore';
import { db, auth } from '../firebase-config';

function Home({isAuth}) {

  const [postList, setPostList]=useState([]);
  const postCollectionRef=collection(db, 'posts' );

  useEffect(()=>{
    const getPosts=async()=>{
      const data=await getDocs(postCollectionRef);
      setPostList(data.docs.map(doc=>({...doc.data(), id:doc.id})));  ;
    }

    getPosts();
  })

  const deletePost=async(id)=>{
    const postDoc=doc(db, 'posts', id);
    await deleteDoc(postDoc);

  }

  return (
    <div className='homePage'>
      {postList.map((post)=>{
        return (<div className='post'>
          <div className='postHeader'>
            <div className='title'>{post.title}</div>
            <div className='deletePost'>
              {isAuth && post.author.id===auth.currentUser.uid&&<button onClick={()=>{deletePost(post.id)}}>X</button>}
            </div>
          </div>
          <div className='postTextContainer'>{post.postText}</div>
        </div>
        
        )
      })}


        
      
    </div>
  )
}

export default Home
