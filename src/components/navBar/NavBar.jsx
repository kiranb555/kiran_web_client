import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavWrapper } from './NavBar.style';
import { useViewPort } from '../ViewportProvider/ViewportProvider';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
// import LogoutButton from '../LogoutButton/LogoutButton';

const NavBar = () => {
	const [active, setActive] = useState(false);

	const { isLargeScreen } = useViewPort();
	const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true' ? true : false;

	const handler = () => {
		setActive(!active);
	};
	const navHandler = () => {
		setActive(false);
	};

	const navItems = [
		'home',
		'about',
		'contact',
		'Blog'
	];
	
	const { t } = useTranslation();
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
						<ThemeSwitch/>
					</ul>
					<ul
						className={
							isLargeScreen
								? 'nav-list nav-list-larger'
								: 'nav-list nav-list-small'
						}
					>

						{/* <LogoutButton/> */}
						{navItems?.map((e) => (
							<li
								className='nav-item'
								key={e}
								onClick={navHandler}
							>
								<NavLink to={`/${e.toLocaleLowerCase()}`} activeClassName="active-nav">
									{t(e)}
								</NavLink>
								
							</li>
						))}
						{
							isAuthenticated &&
							<li>
								<NavLink to={`/dashboard}`} activeClassName="active-nav">
									Dashboard
								</NavLink>
								
							</li>
						}
						<ThemeSwitch />
					</ul>
				</nav>
			</div>
		</NavWrapper>
	);
};

export default NavBar;
