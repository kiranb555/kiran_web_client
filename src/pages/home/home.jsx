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

const Home = (props) => {
	const { width } = useViewPort();
	const isLargeScreen = width > 600 ? true : false;

	return (
		<HomePageWrapper>
			<BannerWrapper>
				<BannerTitle>G'day, I'm Kiran </BannerTitle>
				<BannerSubtitle>Front-end Developer </BannerSubtitle>
				<BannerButtonWrapper>
					<Button
						as='link'
						variant='contained'
						color='secondary'
						href='kiran_2021.pdf'
						size={isLargeScreen ? 'medium' : 'small'}
						download
						label='Download Resume '
					></Button>
				</BannerButtonWrapper>
			</BannerWrapper>
			<Projects />
		</HomePageWrapper>
	);
};

export default Home;

// https://mattfarley.ca/
