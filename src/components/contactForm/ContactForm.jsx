import { useDispatch, useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import { LABEL_EMAIL, LABEL_FIRST_NAME, LABEL_MESSAGE, LABEL_SECOND_NAME, LABEL_SUBMIT, LABLE_PHONE } from "../../constants";
import {
  formInputHandler,
  formSubmit,
} from "../../redux/actions/contactActions";
import Button from "../Button";
import { useViewPort } from "../ViewportProvider/ViewportProvider";
import { ContactWrapper, Row, InputField } from "./ContactForm.styles";

const ContactForm = () => {
	const dispatch = useDispatch();
	const {formData, formLoader, formSubmittedSuccessfully } = useSelector((state) => state.contact);

  const handleChange = (e) => {
    let { name, value } = e.target;
    dispatch(formInputHandler({ key: name, value }));
  };

	const formSubmitHandler = (e) => {
		e.preventDefault();
		dispatch(formSubmit());
	};

	const { isLargeScreen } = useViewPort();

	return (
		<ContactWrapper>
			<form onSubmit={formSubmitHandler}>
				<Row>
					<Fade bottom cascade>
						<div>
							<label>{LABEL_FIRST_NAME}</label>
							<InputField
								label={LABEL_FIRST_NAME}
								name="first_name"
								placeholder={LABEL_FIRST_NAME}
								value={formData.first_name}
								onChange={handleChange}
								fullWidth
								required
							/>
						</div>
					</Fade>
					<Fade bottom cascade>
						<div>
							<label>{ LABEL_SECOND_NAME }</label>
							<InputField
								label={LABEL_SECOND_NAME}
								name="second_name"
								placeholder={LABEL_SECOND_NAME}
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
							<label>{ LABLE_PHONE }</label>
							<InputField
								label={ LABLE_PHONE }
								type='tel'
								name="phone"
								pattern="[6-9]{1}[0-9]{9}"
								placeholder={ LABLE_PHONE }
								value={formData.phone}
								onChange={handleChange}
								fullWidth
							/>
						</div>
					</Fade>
					<Fade bottom cascade>
						<div>
							<label>{ LABEL_EMAIL }</label>
						<InputField
								label={ LABEL_EMAIL }
							type='email'
							name="email"
							placeholder={ LABEL_EMAIL }
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
						<label>{  LABEL_MESSAGE }</label>
						<InputField
							label={ LABEL_MESSAGE }
							type='text'
							name="message"
							placeholder={ LABEL_MESSAGE }
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
							size={!isLargeScreen ? 'medium' : 'large' }
							type='submit'
							label={ LABEL_SUBMIT }
							icon
							iconType={formLoader ? 'spinner'
								: formSubmittedSuccessfully
								? 'check'
								: '' }
						/>
					</div>
				</Fade>
			</form>
		</ContactWrapper>
	);
};

export default ContactForm;
