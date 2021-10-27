import { render, screen } from '../../test.utils';
import Chip from '../../../components/Chip';

describe('Chip test cases', () => {
	test("Should render chip with content", () => {
		render(<Chip
			label="test chip"
			size="medium"
			variant="outlined"
		/>);
		expect(screen.getAllByRole('button')[0]).toHaveTextContent("test chip");
	});
	test("Should render chip without content", () => {
		render(<Chip
			size="medium"
			variant="outlined"
		/>);
		expect(screen.getAllByRole('button')[0]).toHaveTextContent("");
	});
});
