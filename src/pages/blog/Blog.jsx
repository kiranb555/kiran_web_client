import React, {useEffect, useState} from "react";
import BlogCard from "./blogCard/BlogCard";
import { BlogWrapper } from "./blog.styles";
import { Spinner } from "reactstrap";
import useGetBlogs from "../../api/useGetBlogs";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons'

const Blog = () => {
  useGetBlogs();
  const {data = []} = useSelector((state) => state.blogData);
  const [displayData, setDisplayData] = useState(data);
  const [value, setValue] = useState(0);
  const sortHandler = () => {
    const sortData = displayData.sort(function (a, b) {
      const dateA = new Date(a.blogPublishDate), dateB = new Date(b.blogPublishDate)
      return value === 0 ? dateA - dateB : dateB - dateA;
    });
    setValue(value === 0 ? 1 : 0);
    setDisplayData([...sortData]);
  }
  console.log(displayData);
  return (
    <BlogWrapper>
      <div>
        {/* {displayData && ( */}
          <>
            <div className="heading">
              <h2> Blog </h2>
             { data.length > 1 && <FontAwesomeIcon icon={faSort} onClick={sortHandler}/> }
            </div>
            {!data && (
              <div>
                <Spinner />
              </div>
            )}
            {displayData.length && displayData?.map((blog) => (
              <BlogCard blog={blog} key={blog?._id}/>
            ))}
          </>
        {/* )} */}
      </div>
    </BlogWrapper>
  );
};

export default Blog;
