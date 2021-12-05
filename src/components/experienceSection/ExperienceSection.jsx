import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import PaperTable from '../PaperTable';

const ExperienceSection = () => {
	const { root: { data: { experience } } } = useSelector((state) => state);
	return (
		<Fade>
			<div>
				{experience?.length && experience?.map((obj, id) => (
					<PaperTable key={id} data={obj} />
				))}
			</div>
		</Fade>
	);
};

export default ExperienceSection;