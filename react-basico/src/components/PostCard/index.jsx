import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const PostCard = ({ id, title, cover, body }) => {
  return (
    <div className="post" key={id}>
      <img src={cover} alt={title} />
      <article className="post-content">
        <h3>{title}</h3>
        <p>{body}</p>
        <span>{id}</span>
      </article>
    </div>
  );
};

PostCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostCard;
