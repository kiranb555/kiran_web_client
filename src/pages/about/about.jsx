import React from 'react';
import { Container, Fade } from '@material-ui/core';
import ExperienceSection from '../../components/experienceSection';
import useStyles from './about.styles';
import Chip from '../../components/Chip';
import './about.styles';
import data from './data.json';
import { ChipHolder, Header } from './about.styles';
import PaperTable from '../../components/PaperTable';

const About = () => {
	const classes = useStyles();
	return (
		<div
			className='about'
			style={{
				fontSize: '1.2rem',
			}}
		>
			<Fade in={true}>
				<Container maxWidth='md'>
					<section className={classes.section}>
						<Header>About</Header>
						{data.about.map((para, index) => (
							<p
								index={index}
								dangerouslySetInnerHTML={{ __html: para }}
							></p>
						))}
					</section>

					<section className={classes.section}>
						<Header>Skills</Header>
						<ChipHolder>
							{data.skills.map((skill, id) => (
								<Chip
									key={id}
									label={skill.toUpperCase()}
									variant='filled'
									size='medium'
								/>
							))}
						</ChipHolder>
					</section>

					<section className={classes.section}>
						<Header>Experience</Header>
						<ExperienceSection />
					</section>

					<section className={classes.section}>
						<Header>Education</Header>
						<div>
							{data.education.map((edu, id) => (
								<PaperTable key={id} data={edu} />
							))}
						</div>
					</section>
				</Container>
			</Fade>
		</div>
	);
};

export default About;
