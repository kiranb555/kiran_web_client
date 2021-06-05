import { FooterWrapper } from './Footer.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faTwitter,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<FooterWrapper data-testid='footer'>
			<div>
				<FontAwesomeIcon icon={faTwitter} />
				<FontAwesomeIcon icon={faGithub} />
				<FontAwesomeIcon icon={faLinkedin} />
			</div>
		</FooterWrapper>
	);
};

export default Footer;
