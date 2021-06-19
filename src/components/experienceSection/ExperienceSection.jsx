import data from './data.json';
import PaperTable from '../PaperTable';

export default function ExperienceSection() {
	return (
		<div>
			{data.map((obj, idx) => (
				<PaperTable key={idx} data={obj} />
			))}
		</div>
	);
}
