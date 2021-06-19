import { useDispatch, useSelector } from 'react-redux';
import {
	formInputHandler,
	forSubmitHandler,
} from '../../redux/contact/contactActions';
import Button from '../Button';
import { ContactWrapper, Row, InputField } from './ContactForm.styles';

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
			<div>
				<form onSubmit={formSubmitHandler}>
					<Row>
						<div>
							<label>First name</label>
							<InputField
								label='First Name'
								name='first_name'
								value={formData.first_name}
								onChange={handleChange}
								fullWidth
								required
							/>
						</div>
						<div>
							<label>Second name</label>
							<InputField
								label='Second Name'
								name='second_name'
								value={formData.second_name}
								onChange={handleChange}
								fullWidth
							/>
						</div>
					</Row>
					<Row>
						<div>
							<label>Phone</label>
							<InputField
								label='Phone'
								type='tel'
								name='phone'
								value={formData.phone}
								onChange={handleChange}
								fullWidth
							/>
						</div>
						<div>
							<label>email</label>
							<InputField
								label='Email'
								type='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								fullWidth
								required
							/>
						</div>
					</Row>
					<div>
						<label>message</label>
						<InputField
							label='Message'
							name='message'
							multiline
							value={formData.message}
							onChange={handleChange}
							fullWidth
							spellCheck
						/>
					</div>
					<div>
						<Button
							variant='contained'
							size='large'
							type='submit'
							label='SUBMIT'
						/>
					</div>
				</form>
			</div>
		</ContactWrapper>
	);
};

export default ContactForm;
