import Card from '../Card';
import {
	ProjectWrapper,
	ProjectHeading,
	ProjectCardWrapper,
} from './Projects.styles';
import {projectList} from '../../api/data.json';
import Fade from 'react-reveal/Fade';

const Projects = () => {
	return (
		<ProjectWrapper>
			 <Fade cascade>
				<ProjectHeading>Recent projects & work</ProjectHeading>
			 </Fade>
				<Fade cascade>
					<ProjectCardWrapper>
						{projectList.map((e) => (
								<Card key={e.title} project={e}/>
						))}
					</ProjectCardWrapper>
				</Fade>
		</ProjectWrapper>
	);
};

export default Projects;
