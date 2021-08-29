import { useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { getData } from "../redux/actions/getData";


const useGetData = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => Object.keys(state.root.data));
    useEffect(() => {
        if (data?.length === 0) {
            dispatch(getData())
        }
    },[dispatch, data?.length])
}

export default useGetData;