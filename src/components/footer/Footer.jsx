import { FooterWrapper } from './Footer.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faTwitter,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';

const Footer = () => {
	return (
		<FooterWrapper data-testid='footer'>
			<Fade left cascade>
				<div>
					<FontAwesomeIcon icon={faTwitter} />
					<FontAwesomeIcon icon={faGithub} />
					<FontAwesomeIcon icon={faLinkedin} />
				</div>
			</Fade>
		</FooterWrapper>
	);
};

export default Footer;
