import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography, Fade, Paper } from '@material-ui/core';
// import { fetchActions } from '../../redux';
import ExperienceSection from '../../components/experienceSection';
// import Carousel from "../../components/carousel";
import useStyles from './about.styles';
import Chip from '../../components/Chip';
import './about.styles';
import data from './data.json';

const About = () => {
	
	// const aboutData = useSelector((state) => state);
	// const dispatch = useDispatch();
	const classes = useStyles();
	// const clickMe = () => {
	// 	dispatch(fetchActions());
	// };

	// useEffect(() => {
	// 	dispatch(fetchActions());
	// }, [dispatch]);

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
						<Typography
							variant='h4'
							color='primary'
							className={classes.section__header}
						>
							About
						</Typography>
            {
              data.about.map((para, index) => <p index={index} dangerouslySetInnerHTML={{__html: para}}></p>)
            }
					</section>

					<section className={classes.section}>
						<Typography
							variant='h4'
							color='primary'
							className={classes.section__header}
						>
							Skills
						</Typography>
						<div>
							{data.skills.map((skill, id) => (
								<Chip
									key={id}
									label={skill}
									variant='outlined'
									color='primary'
									size='medium'
								/>
							))}
						</div>
					</section>

					<section className={classes.section}>
						<Typography
							variant='h4'
							color='primary'
							className={classes.section__header}
						>
							Experience
						</Typography>
						<ExperienceSection />
					</section>

					<section className={classes.section}>
						<Typography
							variant='h4'
							color='primary'
							className={classes.section__header}
						>
							Education
						</Typography>
						<div>
							{data.education.map((edu, id) => (
								<Paper
									key={id}
									elevation={1}
									className={classes.paper}
								>
									<div className={classes.educationHolder}>
										<span>Institution </span>
										<span>{edu.institute}</span>
									</div>
									<div className={classes.educationHolder}>
										<span>Course </span>
										<span>
											{edu.branch
												? `${edu.course} (${edu.branch})`
												: `${edu.course}`}
										</span>
									</div>
									<div className={classes.educationHolder}>
										<span>Period </span>
										<span>{edu.year}</span>
									</div>
								</Paper>
							))}
						</div>
					</section>
				</Container>
			</Fade>
		</div>
	);
};

export default About;
