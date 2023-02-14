import Fade from 'react-reveal/Fade';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import Card from '../Card';
import {
	ProjectWrapper,
	ProjectHeading,
} from './Projects.styles';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'reactstrap';


const Projects = () => {
	const { t } = useTranslation();
	const { root: { data: { projectList } } } = useSelector((state) => state);
	return (
		<ProjectWrapper>
			 <Fade cascade>
				<ProjectHeading>{t('recent_proj')}</ProjectHeading>
			 </Fade>
				<Fade cascade>
					<Row>
					{
						projectList?.length ? projectList?.map((e) => (
							<Col sm={12} md={4} className="p-3">
								<Card key={e.title} project={e}/>
							</Col>
					)) :
						<>
								<Skeleton width={300} height={300} />
								<Skeleton width={300} height={300} />
								<Skeleton width={300} height={300}/>
							</>
							}
					</Row>
				</Fade>
		</ProjectWrapper>
	);
};

export default Projects;
