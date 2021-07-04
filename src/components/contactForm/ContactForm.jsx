import { useDispatch, useSelector } from 'react-redux';
import {
	formInputHandler,
	forSubmitHandler,
} from '../../redux/contact/contactActions';
import Button from '../Button';
import { ContactWrapper, Row, InputField } from './ContactForm.styles';
import Fade from 'react-reveal/Fade';

const ContactForm = () => {
	const dispatch = useDispatch();
	const formData = useSelector((state) => state.contact.formData);

	const handleChange = (e) => {
		let { name, value } = e.target;
		dispatch(formInputHandler({ key: name, value }));
	};

	const formSubmitHandler = (e) => {
		// prevent default will
		// prevent form data displaying in url
		e.preventDefault();
		dispatch(forSubmitHandler());
	};
	return (
		<ContactWrapper>
			<form onSubmit={formSubmitHandler}>
				<Row>
					<Fade bottom cascade>
						<div>
							<label>First name</label>
							<InputField
								label='First Name'
								placeholder='First Name'
								value={formData.first_name}
								onChange={handleChange}
								fullWidth
								required
							/>
						</div>
					</Fade>
					<Fade bottom cascade>
						<div>
							<label>Second name</label>
							<InputField
								label='Second Name'
								placeholder='Second Name'
								value={formData.second_name}
								onChange={handleChange}
								fullWidth
							/>
						</div>
					</Fade>
					
					
				</Row>
				<Row>
					<Fade bottom cascade>
						<div>
							<label>Phone</label>
							<InputField
								label='Phone'
								type='tel'
								placeholder='Phone'
								value={formData.phone}
								onChange={handleChange}
								fullWidth
							/>
						</div>
					</Fade>
					<Fade bottom cascade>
						<div>
						<label>email</label>
						<InputField
							label='Email'
							type='email'
							placeholder='Email'
							value={formData.email}
							onChange={handleChange}
							fullWidth
							required
						/>
					</div>
					</Fade>
				</Row>
				<Row>
					<Fade bottom cascade>
					<div>
						<label>message</label>
						<InputField
							label='Message'
							type='text'
							placeholder='Message'
							multiline
							value={formData.message}
							onChange={handleChange}
							fullWidth
							spellCheck
						/>
					</div>
					</Fade>
				</Row>
				<Fade bottom cascade>
					<div>
						<Button
							variant='contained'
							size='large'
							type='submit'
							label='SUBMIT'
						/>
					</div>
				</Fade>
			</form>
		</ContactWrapper>
	);
};

export default ContactForm;
