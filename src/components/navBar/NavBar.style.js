import styled from 'styled-components';

export const NavWrapper = styled.header`
	height: 3rem;
	.header {
		position: fixed;
		top: 0;
		z-index: 1400;
		height: 3rem;
		width: 100%;
		background-color: #231c42;
		backdrop-filter: blur(2rem);
		color: #fff;
		text-transform: uppercase;
		font-weight: bold;
	}
	.nav-list {
		list-style: none;
	}
	.nav-list-mobile {
		display: none;
		margin: 0 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	a {
		color: #fff;
		padding: 0 1rem;
		cursor: pointer;
		transition: opacity 0.5s;
	}
	a:hover {
		opacity: 0.7;
	}
	.nav {
		height: 100%;
	}
	.nav-list-larger {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 100%;
		padding: 0 1rem;
	}
	.nav-list-small {
		visibility: hidden;
		box-sizing: border-box;
	}
	.nav-item {
		margin-right: 1rem;
	}
	@media (max-width: 767px) {
		.header {
			transition: background 0.36s cubic-bezier(0.32, 0.08, 0.24, 1),
				height 0.56s cubic-bezier(0.32, 0.08, 0.24, 1);
		}
		.header nav {
			padding: 0;
		}
		.nav-list {
			margin-top: 0;
		}
		.nav-list-mobile {
			display: flex;
		}
		.nav-item {
			min-width: 3rem;
			height: 3rem;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 0;
		}
		.nav-item-hidden {
			display: none;
		}
		.mobile-menu {
			position: relative;
			z-index: 1500;
			width: 50%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			cursor: pointer;
		}
		.line {
			position: absolute;
			width: 100%;
			height: 1px;
			background-color: #fff;
			transition: margin-top 0.3192s cubic-bezier (0.04, 0.04, 0.12, 0.96);
		}
		.line-top {
			margin-top: 3px;
		}
		.line-bottom {
			margin-top: -0.4rem;
		}
		.active .line-top {
			margin-top: 0;
			transform: rotate(45deg);
			transition: transform 0.3192s 0.1s cubic-bezier
				(0.04, 0.04, 0.12, 0.96);
		}
		.active .line-bottom {
			margin-top: 0;
			transform: rotate(-45deg);
			transition: transform 0.3192s 0.1s cubic-bezier
				(0.04, 0.04, 0.12, 0.96);
		}
		.header.active {
			height: 100%;
			background-color: #000;
		}
		.nav {
			position: relative;
		}
		.nav-link {
			font-size: 1.7rem;
			padding: 0;
			margin: auto 0;
		}
		.nav-list-larger {
			position: fixed;
			top: 0;
			left: 0;
			width: 0;
			height: 0;
			display: block;
			padding: 10.5rem 3rem;
			z-index: 1000;
			box-sizing: border-box;
			opacity: 0;
			visibility: hidden;
			transition: opacity 0.3s;
		}
		.active .nav-list-small {
			width: 100%;
			height: 100vh;
			opacity: 1;
			visibility: visible;
			padding: 2.85rem 2.5rem 0.5rem;
		}
		.nav-list-small .nav-item {
			width: 100%;
			justify-content: flex-start;
			border-bottom: 2px solid rgba(255, 255, 255, 0.1);
		}
		.active .nav-list-small .nav-item {
			animation: fadeIn 1s ease-in;
		}
		@keyframes fadeIn {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}
	}
`;
