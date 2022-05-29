import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { LogoutButtonWrapper } from './LogoutButton.style';

const LogoutButton = () => {
    const history = useHistory();
    const handler = () => {
        localStorage.setItem('isAuthenticated', false);
        history.push('/');
    }
    return (
        <LogoutButtonWrapper>
            <button onClick={handler} aria-label="logout">
                <FontAwesomeIcon icon={faSignOutAlt}/>
            </button>  
      </LogoutButtonWrapper>
  )
}

export default LogoutButton