import Fade from 'react-reveal/Fade';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import Card from '../Card';
import {
	ProjectWrapper,
	ProjectHeading,
	ProjectCardWrapper,
} from './Projects.styles';


const Projects = () => {
	const { root: { data: { projectList } } } = useSelector((state) => state);
	return (
		<ProjectWrapper>
			 <Fade cascade>
				<ProjectHeading>Recent projects & work</ProjectHeading>
			 </Fade>
				<Fade cascade>
					<ProjectCardWrapper>
						{projectList?.length ? projectList?.map((e) => (
								<Card key={e.title} project={e}/>
						)) : <>
								<Skeleton width={300} height={300} />
								<Skeleton width={300} height={300} />
								<Skeleton width={300} height={300}/>
							</>
							}
					</ProjectCardWrapper>
				</Fade>
		</ProjectWrapper>
	);
};

export default Projects;
