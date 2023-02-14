import styled from 'styled-components';
import { Card } from 'reactstrap';

const CardWrapper = styled(Card)`
	${({ theme }) => `
		transition:transform 200ms cubic-bezier(0.165, 0.84, 0.44, 1);
		height: 100%;
		.card-link{
			cursor: pointer;
			font-size: 20px;
			margin-right: 20px;
		}
		&:hover{
			transform: translate(0, -4px);
		}
	`
	}
`;

export default CardWrapper;
