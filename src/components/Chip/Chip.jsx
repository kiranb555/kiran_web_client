import ChipWrapper from './Chip.style';
import PropTypes from 'prop-types';

const Chip = ({ label, size, variant, ...props }) => {
	return (
		<ChipWrapper size={size} variant={variant} {...props}>
			{label}
		</ChipWrapper>
	);
};

Chip.propTypes = {
	label: PropTypes.string,
	size: PropTypes.string,
	variant: PropTypes.string,
};
export default Chip;
