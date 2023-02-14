import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faLink} from '@fortawesome/free-solid-svg-icons'
import CardWrapper from './Card.style';
import { CardBody, CardLink, CardText, CardTitle } from 'reactstrap';

const CardComponent = ({project}) => {
    const {title, description, github, web } = project;

    return (
        <CardWrapper>
            <CardBody>
                <CardTitle tag='h5'>{title}</CardTitle>
                <CardText>{description}</CardText>
                <>
                    {
                        (github || web) ?
                  <>
                        {
                            github &&
                            <CardLink href={github} target="_blank" rel="noreferrer" aria-label="github"><FontAwesomeIcon icon={faGithub} /></CardLink>
                       
                        }
                        {
                            web &&
                    
                            <CardLink  href={web} target="_blank" rel="noreferrer" aria-label="web link"><FontAwesomeIcon icon={faLink} /></CardLink>

                        }
                     </>
                                : null
                }
                </>
            </CardBody>
            </CardWrapper>
    )
}

export default CardComponent
