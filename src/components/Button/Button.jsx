import PropTypes from 'prop-types';
import { StyledButton, StyledLink } from './Button.style';

const Button = ({ as, label, href, size, variant, type, ...props }) => {
	return as && as.toLowerCase() === 'link' ? (
		<StyledLink
			href={href}
			size={size}
			variant={variant}
			target='_blank'
			{...props}
		>
			{label}
		</StyledLink>
	) : (
		<StyledButton size={size} variant={variant} type={type} {...props}>
			{label}
		</StyledButton>
	);
};

Button.propTypes = {
	as: PropTypes.string,
	label: PropTypes.string.isRequired,
	href: PropTypes.string,
	size: PropTypes.string,
	variant: PropTypes.string,
	type: PropTypes.string,
};
export default Button;
