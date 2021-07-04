import styled from 'styled-components';

const CardWrapper = styled.div`
	/* color: #fff; */
	width: 320px;
	height: 200px;
	padding: 20px;
	border-radius: 4px;
	background-color: #a2ddc7;
	border: 1px solid #ccc;
	box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
		0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
	display: flex;
	flex-direction: column;

	.title{
		text-transform: capitalize;
		padding-bottom: 32px;
	}
	.description{
		padding-bottom: 30px;
	}
	& ul{
		list-style: none;
		margin-top: auto;
		display: flex;

		& > li{
			cursor: pointer;
			font-size: 25px;
			margin-right: 20px;
		}
	}
`;

export default CardWrapper;
