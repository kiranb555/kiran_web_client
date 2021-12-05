import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledButton, StyledLink } from './Button.style';
import { faSpinner, faCheck } from '@fortawesome/free-solid-svg-icons';

const Button = ({ as, label, href, size, variant, type, icon, iconType, ...props }) => {
	const displayIcon = () => {
		if (icon && iconType) {
			let type = iconType.toLowerCase();
			return type === 'spinner'
				? <FontAwesomeIcon icon={faSpinner} spin/>
				: type === 'check'
					? <FontAwesomeIcon icon={faCheck} />
					: null;
		}
		return null;
	};
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
			{displayIcon()}
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
