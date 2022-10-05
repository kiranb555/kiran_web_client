import {
	HomePageWrapper,
	BannerWrapper,
	BannerTitle,
	BannerSubtitle,
	BannerButtonWrapper,
} from './home.styles';
import Button from '../../components/Button';
import Projects from '../../components/Projects';
import { useViewPort } from '../../components/ViewportProvider/ViewportProvider';
import { HOME_GREETING, JOB_ROLE } from '../../constants';
import Fade from 'react-reveal/Fade';
import useGetData from '../../api/useGetData';

const Home = () => {
	const { isLargeScreen } = useViewPort();
	useGetData();
	return (
		<HomePageWrapper>
			<BannerWrapper>
				<Fade bottom cascade>
					<BannerTitle>{HOME_GREETING} </BannerTitle>
					<BannerSubtitle>{JOB_ROLE}</BannerSubtitle>
					<BannerButtonWrapper>
						<Button
							as='link'
							variant='contained'
							color='secondary'
							href='kiran_b_Resume.pdf'
							size={isLargeScreen ? 'medium' : 'small'}
							download
							label='Download Resume '
						></Button>
					</BannerButtonWrapper>
				</Fade>
			</BannerWrapper>
			<Projects />
		</HomePageWrapper>
	);
};
export default Home;

// https://mattfarley.ca/
