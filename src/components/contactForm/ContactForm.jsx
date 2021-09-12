import { useDispatch, useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import {
  formInputHandler,
  formSubmit,
} from "../../redux/actions/contactActions";
import Button from "../Button";
import { ContactWrapper, Row, InputField } from "./ContactForm.styles";

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
    console.log("-------------submit handler called ------------", formData);
    dispatch(formSubmit());
  };
  return (
    <ContactWrapper>
      <form onSubmit={formSubmitHandler}>
        <Row>
          <Fade bottom cascade>
            <div>
              <label>First name</label>
              <InputField
                label="First Name"
                name="first_name"
                placeholder="First Name"
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
                label="Second Name"
                name="second_name"
                placeholder="Second Name"
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
                label="Phone"
                type="tel"
                name="phone"
                pattern="[6-9]{1}[0-9]{9}"
                placeholder="Phone"
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
                label="Email"
                type="email"
                name="email"
                placeholder="Email"
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
                label="Message"
                type="text"
                name="message"
                placeholder="Message"
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
              variant="contained"
              size="large"
              type="submit"
              label="SUBMIT"
            />
          </div>
        </Fade>
      </form>
    </ContactWrapper>
  );
};

export default ContactForm;
