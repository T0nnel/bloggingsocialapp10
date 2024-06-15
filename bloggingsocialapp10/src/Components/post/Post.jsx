import React, { useState, useEffect } from "react";
import './post.css'; // Make sure to adjust the path to your CSS file
import likeImage from '../../Images/like.png'; // Adjust path to your image

function Post() {
  const [posts, setPosts] = useState([]);
  const [newHeading, setNewHeading] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Load posts from localStorage on component mount
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  // Save posts to localStorage whenever posts state changes
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handleNewHeadingChange = (e) => {
    setNewHeading(e.target.value);
  };

  const handleNewContentChange = (e) => {
    setNewContent(e.target.value);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddPost = () => {
    if (newHeading.trim() !== '' && newContent.trim() !== '') {
      const newPost = {
        heading: newHeading,
        content: newContent,
        likes: 0,
        comments: [],
        tags: [] // Add tags if needed
      };
      setPosts([...posts, newPost]);
      setNewHeading('');
      setNewContent('');
    }
  };

  const handleLikePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].likes++;
    setPosts(updatedPosts);
  };

  const handleAddComment = (index) => {
    if (newComment.trim() !== '') {
      const updatedPosts = [...posts];
      updatedPosts[index].comments.push(newComment);
      setPosts(updatedPosts);
      setNewComment('');
    }
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handleDeletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPosts = posts.filter(post => {
    return post.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
           post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
           post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  return (
    <div>
      <h1>Posts</h1>
      <div>
        <input
          type="text"
          placeholder="Enter heading..."
          value={newHeading}
          onChange={handleNewHeadingChange}
          className="heading-input"
        />
        <textarea
          placeholder="Write a new post..."
          value={newContent}
          onChange={handleNewContentChange}
          className="content-input"
        ></textarea>
        <button onClick={handleAddPost} className="add-post-button">Add Post</button>
      </div>
      <div>
        {filteredPosts.map((post, index) => (
          <div key={index} className="post-container">
            <h2>{post.heading}</h2>
            <p>{post.content}</p>
            <div className="interaction-buttons">
              <img
                src={likeImage}
                alt="like"
                className="like-button"
                onClick={() => handleLikePost(index)}
              />
              <span className="like-count">{post.likes} {post.likes === 1 ? 'like' : 'likes'}</span>
            </div>
            <div className="comment-section">
              <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={handleCommentChange}
                className="comment-input"
              />
              <button
                className="comment-button"
                onClick={() => handleAddComment(index)}
              >
                Add Comment
              </button>
            </div>
            <div className="post-actions">
              <button className="hide" onClick={toggleComments}>
                {showComments ? 'Hide Comments' : 'Show Comments'}
              </button>
              <button className="delete-button" onClick={() => handleDeletePost(index)}>
                Delete Post
              </button>
              {showComments && (
                <div className="comment-list">
                  <h3>Comments</h3>
                  <ul>
                    {post.comments.map((comment, i) => (
                      <li key={i}>{comment}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;

