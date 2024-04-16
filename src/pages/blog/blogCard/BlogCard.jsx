import React from "react";
import "./blogCard.style.js";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { faHeart as farHeartUnfilled } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";
import { BlogDetailsWrapper } from "./blogCard.style.js";
import getSrc from "../../../utilities/getSrc.js";

const BlogCard = ({blog}) => {
const {     
    _id = "",
    shortdescription = "",
    blogPublishDate = "",
    topic = "",
    title = "",
    imageType = "",
    readtimings = ""
    // rating = ""
 } = blog;
  return (
    <BlogDetailsWrapper>
      <div className="blogCard__content">
        <Link to={{ pathname: `blog/${_id}`, state: blog }}>
          <h2>{title}</h2>
          <p>{shortdescription}</p>
        </Link>
        <div className="blogCard__content-footer">
          <div className="blogCard__content-footer-details">
            <span>{blogPublishDate}</span>
            { readtimings && <span className="readtimings">.&nbsp; {readtimings} read &nbsp;.</span> }
            <span className="topic">{topic}</span>
            {/* <span>{rating}</span> */}
          </div>
          {/* <div className='blogCard__content-footer-likes'>
                {rating}K &nbsp; <FontAwesomeIcon onClick={() => alert(1)} icon={rating > 4.5 ? farHeartUnfilled : faHeart} color={rating > 4.5 ? "" : "red"} /> 
                </div> */}
        </div>
      </div>
      <div className="blogCard__image">
        <Link to={{ pathname: `blog/${_id}`, state: blog }}>
          <img
            src={getSrc(imageType)}
            alt="blog"
            width="200"
            height="150"
            loading="lazy"
          />
        </Link>
      </div>
    </BlogDetailsWrapper>
  );
};

export default BlogCard;
