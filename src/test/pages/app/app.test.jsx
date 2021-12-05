import App from '../../../App';
import { render, screen } from '../../test.utils';


describe('App test cases', () => {
	beforeEach(() => {
		render( <App/>);
	});
	test("Should present navbar", () => {
		expect(screen.queryByTestId('navbar')).toBeInTheDocument();
	});
	test("Should present footer", () => {
		expect(screen.queryByTestId('footer')).toBeInTheDocument();
	});
});
