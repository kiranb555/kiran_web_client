import { FooterWrapper } from './Footer.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faTwitter,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';

const Footer = () =>
	<FooterWrapper data-testid='footer'>
			<Fade left cascade>
				<div>
					<FontAwesomeIcon icon={faTwitter} data-testid='footer-icon-twitter'/>
					<FontAwesomeIcon icon={faGithub} data-testid='footer-icon-github'/>
					<FontAwesomeIcon icon={faLinkedin} data-testid='footer-icon-linkedin'/>
				</div>
			</Fade>
	</FooterWrapper>
	

export default Footer;
