import React from 'react'
import { useState,useEffect} from 'react'
import axios from 'axios'

function UserList() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res=>{
    console.log(res)
    setPosts(res.data)
  })
  .catch(err=>{
    console.log(err)
  })
    
  }, [])
      
  return (
    
    <div>
      <ul>
        {
        posts.map(post => (<li key ={post.id}> Name : {post.name} <br />   Username : {post.username}
        <br /> Email : {post.email} <br /> <hr /></li> 
        ))
}
      </ul>
    </div>
  )
}

export default UserList;
