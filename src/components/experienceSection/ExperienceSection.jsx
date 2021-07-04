import {experience} from '../../api/data.json';
import PaperTable from '../PaperTable';
import Fade from 'react-reveal/Fade';

export default function ExperienceSection() {
	return (
		<Fade>
			<div>
				{experience.map((obj, id) => (
						<PaperTable key={id} data={obj} />
				))}
			</div>
		</Fade>
	);
}
