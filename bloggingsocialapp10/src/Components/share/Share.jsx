import React from 'react'
import './share.css'

import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material' 

export default function Share() {
    return (
        <div className='share'>
           <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src="../src/images/person/1.jpeg" alt="profile picture" />
                    <input placeholder="Add a Blog" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                       <div className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon'/>
                        <span className='shareOptionText'>Photo or Video</span>
                        </div> 
                        <div className="shareOption">
                        <Label htmlColor='blue' className='shareIcon'/>
                        <span className='shareOptionText'>Tag</span>
                        </div> 
                        <div className="shareOption">
                        <Room htmlColor='green' className='shareIcon'/>
                        <span className='shareOptionText'>Location</span>
                        </div> 
                        <div className="shareOption">
                        <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                        <span className='shareOptionText'>Feelings</span>
                        </div> 
                    </div>
                            <button className="shareButton">Share</button>
                </div>
           </div>
        </div>
    )
}

// function BlogApp() {
//     const [posts, setPosts] = useState([]);
//     const [newPost, setNewPost] = useState('');
    
//     const handleNewPostChange = (e) => {
//       setNewPost(e.target.value);
//     };
    
//     const handleAddPost = () => {
//       if (newPost.trim() !== '') {
//         setPosts([...posts, { content: newPost, likes: 0, comments: [] }]);
//         setNewPost('');
//       }
//     };
    
//     const handleLikePost = (index) => {
//       const updatedPosts = [...posts];
//       updatedPosts[index].likes++;
//       setPosts(updatedPosts);
//     };
    
//     const handleAddComment = (index, comment) => {
//       const updatedPosts = [...posts];
//       updatedPosts[index].comments.push(comment);
//       setPosts(updatedPosts);
//     };
    
//     return (
//       <div>
//         <h1>Blog App</h1>
//         <div>
//           <input
//             type="text"
//             placeholder="Write a new post..."
//             value={newPost}
//             onChange={handleNewPostChange}
//           />
//           <button onClick={handleAddPost}>Add Post</button>
//         </div>
//         <div>
//           {posts.map((post, index) => (
//             <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
//               <p>{post.content}</p>
//               <button onClick={() => handleLikePost(index)}>Like ({post.likes})</button>
//               <div>
//                 <input type="text" placeholder="Add a comment..." />
//                 <button onClick={() => handleAddComment(index, 'Sample comment')}>Add Comment</button>
//               </div>
//               <div>
//                 <h3>Comments</h3>
//                 <ul>
//                   {post.comments.map((comment, i) => (
//                     <li key={i}>{comment}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
  
//   export default BlogApp;