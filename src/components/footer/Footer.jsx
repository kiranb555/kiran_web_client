import { FooterWrapper } from './Footer.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faTwitter,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Fade from 'react-reveal/Fade';
import { GITHUB_URL, TWITTER_URL, LINKEDIN_URL } from '../../api/constant';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();
	return (
	<FooterWrapper data-testid='footer'>
		<div>
			Kiran B
		</div>
		<Fade left cascade>
			<div className='footer-social'>
				<a href={TWITTER_URL} target="_blank" rel="noreferrer" aria-label='twitter'>
					<FontAwesomeIcon icon={faTwitter} data-testid='footer-icon-twitter'/>
				</a>
				<a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label='github'>
					<FontAwesomeIcon icon={faGithub} data-testid='footer-icon-github'/>
				</a>
				<a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label='linkedin'>
					<FontAwesomeIcon icon={faLinkedin} data-testid='footer-icon-linkedin'/>
				</a>
			</div>
		</Fade>
		<div className='footer-copywrite'>
			{t("all_rights_reserved")} &copy; {new Date().getFullYear()}
		</div>
	</FooterWrapper>
	)
}

export default Footer;
