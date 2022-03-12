import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeSwitchWrapper } from './ThemeSwtich.style';
import { setTheme } from "../../redux/actions/themeAction";

const ThemeSwitch = () => {
    const dispatch = useDispatch();
    const {
        isThemeLight
    } = useSelector(state => state);
    return (
        <ThemeSwitchWrapper className="theme-switcher">  
            <button onClick={() => dispatch(setTheme()) } aria-label="switch">
                <FontAwesomeIcon icon={!isThemeLight ? faSun : faMoon} />
            </button>
          {/* <FontAwesomeIcon icon={!isThemeLight ? faSun : faMoon} onClick={() => dispatch(setTheme()) }/> */}
      </ThemeSwitchWrapper>
  )
}

export default ThemeSwitch