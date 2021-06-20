import Chip from '../../components/Chip';
import PaperTable from '../../components/PaperTable';
import ExperienceSection from '../../components/experienceSection';
import { AboutWrapper, ChipHolder, SectionWrapper } from './about.styles';
import data from './data.json';

const About = () => {
	return (
		<AboutWrapper>
			<SectionWrapper>
				<h2>About</h2>
				{data.about.map((para, index) => (
					<p
						index={index}
						key={index}
						dangerouslySetInnerHTML={{ __html: para }}
					></p>
				))}
			</SectionWrapper>

			<SectionWrapper>
				<h2>Skills</h2>
				<ChipHolder>
					{data.skills.map((skill, id) => (
						<Chip
							key={id}
							label={skill.toUpperCase()}
							variant='outlined'
							size='medium'
						/>
					))}
				</ChipHolder>
			</SectionWrapper>

			<SectionWrapper>
				<h2>Experience</h2>
				<ExperienceSection />
			</SectionWrapper>

			<SectionWrapper>
				<h2>Education</h2>
				<div>
					{data.education.map((edu, id) => (
						<PaperTable key={id} data={edu} />
					))}
				</div>
			</SectionWrapper>
		</AboutWrapper>
	);
};

export default About;
