import { FooterWrapper } from './Footer.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faTwitter,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';
import { GITHUB_URL, TWITTER_URL, LINKEDIN_URL } from '../../api/constant';

const Footer = () =>
	<FooterWrapper data-testid='footer'>
		<Fade left cascade>
			<div>
				<a href={ TWITTER_URL } target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faTwitter} data-testid='footer-icon-twitter'/>
				</a>
				<a href={ GITHUB_URL } target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faGithub} data-testid='footer-icon-github'/>
				</a>
				<a href={ LINKEDIN_URL } target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faLinkedin} data-testid='footer-icon-linkedin'/>
				</a>
			</div>
		</Fade>
	</FooterWrapper>
	// Test1 commit

export default Footer;
