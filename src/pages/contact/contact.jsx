import ContactForm from '../../components/contactForm';
import { ContactWrapper } from './contact.styles';
import Fade from 'react-reveal/Fade';
import { LABEL_CONTACT } from '../../constants';

const Contact = () => (
	<ContactWrapper>
		<div>
			<Fade bottom>
				<h2>{ LABEL_CONTACT }</h2>
			</Fade>
			<Fade>
				<ContactForm />
			</Fade>
		</div>
	</ContactWrapper>
);

export default Contact;
