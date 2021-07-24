import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import Chip from '../../components/Chip';
import PaperTable from '../../components/PaperTable';
import ExperienceSection from '../../components/experienceSection';
import { AboutWrapper, ChipHolder, SectionWrapper } from './about.styles';
import SkeletonLoader from '../../components/skeletonLoader/skeletonLoader';
import useGetData from '../../api/useGetData';

const About = () => {
	const { root: { data: { about, skills, education }, loader } } = useSelector((state) => state);
	useGetData();
	return (
		<AboutWrapper>
			<SectionWrapper>
				<Fade bottom>
					<h2>About</h2>
				</Fade>
				<Fade cascade>
					{about?.length && about?.map((para, index) => (
					<p
						index={index}
						key={index}
						dangerouslySetInnerHTML={{ __html: para }}
					></p>
					))}
				</Fade>
					{loader && <SkeletonLoader/>}
			</SectionWrapper>
			<SectionWrapper>
				<Fade bottom>
					<h2>Skills</h2>
				</Fade>
				 <Fade cascade> 
					<ChipHolder>
						{skills?.length && skills?.map((skill, id) => (
							<Chip
								key={id}
								label={skill.toUpperCase()}
								variant='outlined'
								size='medium'
							/>
						))}
					</ChipHolder>
				 </Fade>
						{loader && <SkeletonLoader/>}
			</SectionWrapper>
			<SectionWrapper>
				<Fade bottom>
					<h2>Experience</h2>
				</Fade>
				<ExperienceSection />
				{loader && <SkeletonLoader/>}
			</SectionWrapper>
			<SectionWrapper>
				<Fade bottom>
					<h2>Education</h2>
				</Fade>
					<div>
						{education?.length && education?.map((edu, id) => (
							<Fade bottom key={id}>
								<PaperTable key={id} data={edu} />
							</Fade>
						))}
						{loader && <SkeletonLoader/>}
					</div>
			</SectionWrapper>
		</AboutWrapper>
	);
};

export default About;
