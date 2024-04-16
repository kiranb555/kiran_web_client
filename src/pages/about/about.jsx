import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';
import PaperTable from '../../components/PaperTable';
import ExperienceSection from '../../components/experienceSection';
import { AboutWrapper, ChipHolder, SectionWrapper } from './about.styles';
import SkeletonLoader from '../../components/skeletonLoader/skeletonLoader';
import useGetData from '../../api/useGetData';
import { Badge } from 'reactstrap';

const About = () => {
	const { t } = useTranslation();
	const {
		root: {
		data: { skills, education },
		loader
	} } = useSelector((state) => state);
	useGetData();
	return (
		<AboutWrapper>
			<SectionWrapper>
				<Fade bottom>
					<h2>{t('about')}</h2>
				</Fade>
				<Fade cascade>
					<p
						dangerouslySetInnerHTML={{ __html: t('introduction')}}
					></p>
				</Fade>
					{loader && <SkeletonLoader/>}
			</SectionWrapper>
			<SectionWrapper>
				<Fade bottom>
					<h2>{t('skills')}</h2>
				</Fade>
				 <Fade cascade> 
					<ChipHolder>
						{skills?.length && skills?.map((skill, id) => <Badge pill key={id}>{skill.toUpperCase()}</Badge>)}
					</ChipHolder>
				 </Fade>
				{loader && <SkeletonLoader/>}
			</SectionWrapper>
			<SectionWrapper>
				<Fade bottom>
					<h2>{t('experience')}</h2>
				</Fade>
				<ExperienceSection />
				{loader && <SkeletonLoader/>}
			</SectionWrapper>
			<SectionWrapper>
				<Fade bottom>
					<h2>{t('education')}</h2>
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
