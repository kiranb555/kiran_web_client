import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import { LABEL_EMAIL, LABEL_FIRST_NAME, LABEL_MESSAGE, LABEL_SECOND_NAME, LABLE_PHONE } from "../../constants";
import {
  formInputHandler,
  formSubmit,
} from "../../redux/actions/contactActions";
import { ContactWrapper, Row, InputField } from "./ContactForm.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheck } from '@fortawesome/free-solid-svg-icons'
import { Button as RTSButton } from 'reactstrap';
import sendEmail from "./emailJsHelper";

const ContactForm = () => {
	const formRef = useRef()
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const {formData, formLoader, formSubmittedSuccessfully } = useSelector((state) => state.contact);

  const handleChange = (e) => {
    let { name, value } = e.target;
    dispatch(formInputHandler({ key: name, value }));
};

const formSubmitHandler = (e) => {
		e.preventDefault();
		sendEmail({ref: formRef});
		dispatch(formSubmit());
	};
	return (
		<ContactWrapper>
			<form onSubmit={formSubmitHandler} ref={formRef}>
				<Row>
					<Fade bottom cascade>
						<div>
							<label>{t("first_name")}</label>
							<InputField
								label={LABEL_FIRST_NAME}
								name="first_name"
								placeholder={t("first_name")}
								value={formData.first_name}
								onChange={handleChange}
								fullWidth
								required
							/>
						</div>
					</Fade>
					<Fade bottom cascade>
						<div>
							<label>{t("last_name")}</label>
							<InputField
								label={LABEL_SECOND_NAME}
								name="second_name"
								placeholder={t("last_name")}
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
							<label>{t('phone')}</label>
							<InputField
								label={ LABLE_PHONE }
								type='tel'
								name="phone"
								pattern="[6-9]{1}[0-9]{9}"
								placeholder={t('phone')}
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
						<label>{t('message')}</label>
						<InputField
							label={ LABEL_MESSAGE }
							type='text'
							name="message"
							placeholder={t('message')}
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
						<RTSButton outline type="submit">
							{t("submit")} {formLoader ? <FontAwesomeIcon icon={faSpinner} spin/> : formSubmittedSuccessfully ? <FontAwesomeIcon icon={faCheck} />: null}
						</RTSButton>
					</div>
				</Fade>
			</form>
		</ContactWrapper>
	);
};

export default ContactForm;
