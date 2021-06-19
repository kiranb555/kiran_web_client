import Error404 from '../../svg/404';
import { ErrorWrapper } from './styles';

const Error = () => {
	return (
		<ErrorWrapper>
			<div>
				<Error404 />
			</div>
		</ErrorWrapper>
	);
};

export default Error;
