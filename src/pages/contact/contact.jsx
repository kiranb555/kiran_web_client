import ContactForm from '../../components/contactForm';
import { ContactWrapper } from './contact.styles';
import Fade from 'react-reveal/Fade';

const Contact = () => (
	<ContactWrapper>
		<div>
			<Fade bottom>
				<h2>Contact</h2>
			</Fade>
			<Fade>
				<ContactForm />
			</Fade>
		</div>
	</ContactWrapper>
);

export default Contact;
