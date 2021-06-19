import Card from '../Card';
import {
	ProjectWrapper,
	ProjectHeading,
	ProjectCardWrapper,
} from './Projects.styles';

const Projects = () => {
	return (
		<ProjectWrapper>
			<ProjectHeading>Recent projects and work</ProjectHeading>
			<ProjectCardWrapper>
				{[...Array(5).keys()].map((e) => (
					<Card key={e} />
				))}
			</ProjectCardWrapper>
		</ProjectWrapper>
	);
};

export default Projects;
