import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faLink} from '@fortawesome/free-solid-svg-icons'
import CardWrapper from './Card.style';

const Card = ({project}) => {
    const {title, description, github, web } = project;

    return (
        <CardWrapper>
            <h2 className="title">{title}</h2>
            <div className="description">{description}</div>
            {
                github && web ?  <ul>
                    {
                        github && <li><a href={github} rel="noreferrer" target="_blank" aria-label="github link"><FontAwesomeIcon icon={faGithub} /></a></li>
                    }
                    {
                        web && <li><a href={web} rel="noreferrer" target="_blank" aria-label="web link"><FontAwesomeIcon icon={faLink} /></a></li>
                    }
            </ul>: null
            }
           
        </CardWrapper>
    )
}

export default Card
