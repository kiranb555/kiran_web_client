import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavWrapper } from './NavBar.style';
import { useViewPort } from '../ViewportProvider/ViewportProvider';

const NavBar = () => {
	const [list] = useState(['Home', 'About', 'Contact']);
	const [active, setActive] = useState(false);

	const { width } = useViewPort();
	const isLargeScreen = width > 600 ? true : false;

	const handler = () => {
		setActive(!active);
	};
	const navHandler = () => {
		setActive(false);
	};

	return (
		<NavWrapper>
			<div className={active ? 'header active' : 'header'}>
				<nav className='nav'>
					<ul className='nav-list nav-list-mobile'>
						<li className='nav-item'>
							<div className='mobile-menu' onClick={handler}>
								<span className='line line-top'></span>
								<span className='line line-bottom'></span>
							</div>
						</li>
					</ul>
					<ul
						className={
							isLargeScreen
								? 'nav-list nav-list-larger'
								: 'nav-list nav-list-small'
						}
					>
						{list.map((e) => (
							<li
								className='nav-item'
								key={e}
								onClick={navHandler}
							>
								<Link to={`/${e.toLocaleLowerCase()}`}>
									{e}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</NavWrapper>
	);
};

export default NavBar;
