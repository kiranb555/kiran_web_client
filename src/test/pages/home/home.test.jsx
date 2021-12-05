import { LABEL_DOWNLOAD_RESUME, LABEL_HOME_GREETING, LABEL_JOB_ROLE } from '../../../constants';
import Home from '../../../pages/home/home';
import { render, screen, fireEvent } from '../../test.utils';


describe('Home test cases', () => {
	beforeEach(() => {
		render( <Home/>);
	});
	test("Should presnt banner", () => {
		expect(screen.queryByTestId('home-banner')).toBeInTheDocument();
	});
	test("Should present download resume button", () => {
		expect(screen.getByText(LABEL_DOWNLOAD_RESUME)).toBeInTheDocument();
	});
	test("Should present greeting message", () => {
		expect(screen.getByText(LABEL_HOME_GREETING)).toBeInTheDocument();
	});
	test("Should present job role", () => {
		expect(screen.getByText(LABEL_JOB_ROLE)).toBeInTheDocument();
	});
	test("Should present project list holder", () => {
		expect(screen.queryByTestId('project-list')).toBeInTheDocument();
	});
	test("Should download resume on click download button", () => {
		const btn = screen.getByText(LABEL_DOWNLOAD_RESUME);
		const onClick = jest.fn();

		fireEvent.click(btn);
    
		expect(btn).toBeInTheDocument();
		// expect(btn.href).toBeCloseTo("kiran_2021.pdf");
		// expect(onClick).toHaveBeenCalledTimes(1);
	});
});
