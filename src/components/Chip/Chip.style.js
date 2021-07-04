import Styled from 'styled-components';

const ChipWrapper = Styled.button`
    padding : ${(props) =>
		props.size === 'large'
			? '10px 16px'
			: props.size === 'medium'
			? '8px 14px'
			: '5px 12px'};
    border : ${(props) =>
		props.variant === 'outlined' ? '1px solid #231c42' : '0px'};
    border-radius : ${(props) =>
		props.variant === 'outlined' &&
		(props.size === 'large' || props.size === 'medium')
			? '14px'
			: '12px'};
    background-color : ${(props) =>
		props.variant === 'filled' ? '' : '#a2ddc7'};
    cursor : ${(props) => (props.cursor ? 'pointer' : '')}
`;

export default ChipWrapper;
