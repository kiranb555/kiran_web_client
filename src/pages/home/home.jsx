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
import { LABEL_HOME_GREETING, LABEL_JOB_ROLE, LABEL_DOWNLOAD_RESUME } from '../../constants';
import Fade from 'react-reveal/Fade';
import useGetData from '../../api/useGetData';

const Home = () => {
	const { width } = useViewPort();
	const isLargeScreen = width > 600;
	
	useGetData();
	return (
		<HomePageWrapper>
			<BannerWrapper data-testid="home-banner">
				<Fade bottom cascade>
					<BannerTitle>{LABEL_HOME_GREETING} </BannerTitle>
					<BannerSubtitle>{LABEL_JOB_ROLE}</BannerSubtitle>
					<BannerButtonWrapper>
						<Button
							as='link'
							variant='contained'
							color='secondary'
							href='kiran_2021.pdf'
							size={isLargeScreen ? 'medium' : 'small'}
							download
							label={`${LABEL_DOWNLOAD_RESUME} `}
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
