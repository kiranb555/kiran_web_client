import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { useViewPort } from '../ViewportProvider';
import { NavBarWrapper } from './NavBar.style';
import { useLocation } from 'react-router-dom';
import { viberate } from '../../utilities/helper';
// import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

function NavBarB(args) {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const menuItems = ["home","about","blog","project","contact"];
  const [isOpen, setIsOpen] = useState(false);
  const { isLargeScreen } = useViewPort();
  const toggle = () => setIsOpen(!isOpen);
  const lng = {
    en:
    {
      nativeName: "english",
    },
    de:
    {
      nativeName: "deutsche"
    }
  }
  return (
    <NavBarWrapper>
    <Navbar {...args} dark fixed='top' full="true" container="fluid" expand={ !!isLargeScreen } color='dark'> 
        <NavbarBrand href="/">Kirandev.in</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className='justify-content-end'>
          <Nav navbar>
            {
              menuItems.map((e) => 
                <NavItem key={e}>
                  <NavLink href={`/${e}`} active={e === pathname?.slice(1) } onClick={() => viberate()}>{ t(e)}</NavLink>
                </NavItem>
              )
            }
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {t("language")}
              </DropdownToggle>
              <DropdownMenu dark>
                {
                  Object.keys(lng).map((e,i) => (
                    <Fragment key={`lng${i}`} >
                      <DropdownItem onClick={() => i18n.changeLanguage(e)}>{t(lng[e].nativeName)}</DropdownItem>
                      {i === 0 && <DropdownItem divider />}
                    </Fragment>
                  ))
                }
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* <ThemeSwitch/> */}
          </Nav>
        </Collapse>
      </Navbar>
    </NavBarWrapper>
  );
}

export default NavBarB;