import React from "react";
import { BlogDetailsWrapper } from "./blog.styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import getSrc from "../../utilities/getSrc.js";

const BlogDetails = (props) => {
  let history = useHistory();
  let { state } = props.location;
  const { title, imageType, code } = state;
  console.log({ state});
  return (
    <BlogDetailsWrapper>
      <div>
          <div className="heading">
            <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={() => history.goBack()}
              className="refresh"
            />
            <h1>{title}</h1>
          </div>
          <hr />
        <div className="image">
          <img src={getSrc(imageType)} alt="img" width="300px" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
    </BlogDetailsWrapper>
  );
};

export default BlogDetails;
