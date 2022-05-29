import Skeleton from 'react-loading-skeleton';
import { useViewPort } from "../ViewportProvider";

const SkeletonLoader = () => {
    const { isLargeScreen, width } = useViewPort();
    const isTabletScreen = (width >= 600 && width < 1440);

    return (
        <>
            {
                (isLargeScreen || isTabletScreen)
                    ? <Skeleton width={1000} height={80} />
                    : <Skeleton width={300} height={50} />
            }
        </>
    )
}

export default SkeletonLoader
