import ChipWrapper from './Chip.style';
import PropTypes from 'prop-types';

const Chip = ({ type, label, size, variant, ...props }) => {
	return (
		<ChipWrapper
			type={type}
			size={size}
			variant={variant}
			{...props}
		>
			{label}
		</ChipWrapper>
	);
};

Chip.propTypes = {
	type: PropTypes.string,
	filled: PropTypes.bool,
	value: PropTypes.string,
	size: PropTypes.string,
	variant: PropTypes.string,
};
export default Chip;
