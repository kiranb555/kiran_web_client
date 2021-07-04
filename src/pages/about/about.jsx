import Chip from '../../components/Chip';
import PaperTable from '../../components/PaperTable';
import ExperienceSection from '../../components/experienceSection';
import { AboutWrapper, ChipHolder, SectionWrapper } from './about.styles';
import {about, skills, education } from '../../api/data.json';
import Fade from 'react-reveal/Fade';

const About = () => {
	return (
		<AboutWrapper>
			<SectionWrapper>
				<Fade bottom cascade>
					<h2>About</h2>
				</Fade>
				<Fade cascade>
					{about.map((para, index) => (
					<p
						index={index}
						key={index}
						dangerouslySetInnerHTML={{ __html: para }}
					></p>
				))}
				</Fade>
			</SectionWrapper>
			<SectionWrapper>
				<Fade bottom cascade>
					<h2>Skills</h2>
				</Fade>
				 <Fade cascade> 
					<ChipHolder>
						{skills.map((skill, id) => (
							<Chip
								key={id}
								label={skill.toUpperCase()}
								variant='outlined'
								size='medium'
							/>
						))}
					</ChipHolder>
				 </Fade>
			</SectionWrapper>
			<SectionWrapper>
				<Fade bottom cascade>
					<h2>Experience</h2>
				</Fade>
					<ExperienceSection />
			</SectionWrapper>
			<SectionWrapper>
				<Fade bottom cascade>
					<h2>Education</h2>
				</Fade>
					<div>
						{education.map((edu, id) => (
							<Fade bottom key={id}>
								<PaperTable key={id} data={edu} />
							</Fade>
						))}
					</div>
			</SectionWrapper>
		</AboutWrapper>
	);
};

export default About;
