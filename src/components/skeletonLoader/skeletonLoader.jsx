import Skeleton from 'react-loading-skeleton';
import { useViewPort } from "../ViewportProvider";

const SkeletonLoader = () => {
    const { width } = useViewPort();
	const isLargeScreen = width >= 1440 ? true : false;
    const isTabletScreen = (width >= 600 && width < 1440) ? true : false;

    return (
        <>
            {
                isLargeScreen ? <Skeleton width={1000} height={80} />
                    : isTabletScreen ? <Skeleton width={1000} height={80} />
                    : <Skeleton width={300} height={50} />
            }
        </>
    )
}

export default SkeletonLoader
