import React from 'react';
import PostCard from '../PostCard';
import './styles.css';
import PropTypes from 'prop-types';

const Posts = ({ posts = [] }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard key={post.id} id={post.id} title={post.title} cover={post.cover} body={post.body} />
      ))}
    </div>
  );
};

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ),
};

export default Posts;
