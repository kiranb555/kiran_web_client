import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { blogGetData } from "../redux/actions/blogActions";


const useGetBlogs = () => {
    const dispatch = useDispatch();
    // const data = useSelector((state) => state?.blogData?.data);
    useEffect(() => {
        // if (data?.length === 0) {
            dispatch(blogGetData())
        // }
    },[dispatch])
}

export default useGetBlogs;