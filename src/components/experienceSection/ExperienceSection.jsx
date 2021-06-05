import React from 'react';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '../Chip';
import Divider from '@material-ui/core/Divider';
import useStyles from './ExperienceSection.styles';
import data from './data.json';
import PaperTable from '../PaperTable';

export default function ExperienceSection() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{data.map((obj, idx) => (
				// <Accordion defaultExpanded={false} key={idx}>
				//   <AccordionSummary
				//     expandIcon={<ExpandMoreIcon />}
				//     aria-controls="panel1c-content"
				//     id="panel1c-header"
				//   >
				//     <div className={classes.column}>
				//       <Typography className={classes.heading}>
				//         {obj.company_name}
				//       </Typography>
				//     </div>

				//     <div className={classes.column}>
				//       <Typography className={classes.secondaryHeading}>
				//         {obj.title}
				//       </Typography>
				//     </div>
				//     <div className={classes.column}>
				//       <Typography className={classes.ternaryHeading}>
				//         {obj.period}
				//       </Typography>
				//     </div>
				//   </AccordionSummary>
				//   <AccordionDetails className={classes.details}>
				//     <div className={clsx(classes.column, classes.desc)}>
				//       {obj.description}
				//     </div>
				//     <div className={classes.column}>
				//       {obj.skills.map((skill, sid) => (
				//         <Chip
				//           key={sid}
				// 					label={skill}
				// 					variant='filled'
				// 					color='primary'
				// 					size='small'
				//         />
				//       ))}
				//     </div>
				//     <div className={clsx(classes.column, classes.helper)}>
				//       <Typography variant="h6">
				//         Team size - {obj.team_size}
				//         <br />
				//       </Typography>
				//     </div>
				//   </AccordionDetails>
				//   <Divider />
				// </Accordion>

				<PaperTable key={idx} data={obj} />
			))}
		</div>
	);
}
