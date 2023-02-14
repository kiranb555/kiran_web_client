import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';
import ContactForm from '../../components/contactForm';
import { ContactWrapper } from './contact.styles';

const Contact = () => {
	const { t } = useTranslation();
	return (
		<ContactWrapper>
			<div>
				<Fade bottom>
					<h2>{t("contact")}</h2>
				</Fade>
				<Fade>
					<ContactForm />
				</Fade>
			</div>
		</ContactWrapper>
	);
};

export default Contact;
