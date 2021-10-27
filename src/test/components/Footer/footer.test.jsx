import { render,screen } from '../../test.utils';
import Footer from '../../../components/footer';

// add snapshot for order of icons
//https://blog.bitsrc.io/how-to-test-react-components-with-jest-and-enzyme-in-depth-145fcd06b90

describe("Footer test", () => {
	beforeEach(() => {
		render(<Footer/>);
	});
	test("should have three links", () => {
		expect(screen.getAllByRole('link').length).toBe(3);
	});

	test("should twitter icon present", () => {
		expect(screen.getByTestId("footer-icon-twitter")).toBeTruthy();
	});

	test("should github icon present", () => {
		expect(screen.getByTestId("footer-icon-github")).toBeTruthy();
	});

	test("should linkedin icon present", () => {
		expect(screen.getByTestId("footer-icon-linkedin")).toBeTruthy();
	});
});