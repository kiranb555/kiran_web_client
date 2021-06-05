import { Snackbar, Typography, Container, Fade } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector } from 'react-redux';
import ContactForm from '../../components/contactForm';
import useStyles from './contact.styles';

const Contact = () => {
	const classes = useStyles();
	const contact = useSelector((state) => state.contact);

	function Alert(props) {
		return <MuiAlert elevation={6} variant='filled' {...props} />;
	}

	return (
		<>
			<Fade in={true}>
				<section className={classes.contactHolder}>
					<Container maxWidth='md'>
						<Typography
							variant='h4'
							align='center'
							className={classes.heading}
						>
							CONTACT
						</Typography>

						<ContactForm />
						{contact.formSubmitSuccess && (
							<Snackbar open={true}>
								<Alert severity='success'>
									Your Details submitted successfully. We will
									contact you ASP, Thank you
								</Alert>
							</Snackbar>
						)}
						{contact.formSubmitFailure && (
							<Snackbar open={true}>
								<Alert severity='error'>
									Failed to submit details, please try again
									later.
								</Alert>
							</Snackbar>
						)}
					</Container>
				</section>
			</Fade>
		</>
	);
};

export default Contact;
