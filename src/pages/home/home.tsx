import React, { FC, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import KeyboardArrowDownOutlined from '@material-ui/icons/KeyboardArrowDownOutlined';
import SkillsAndServiceCards from '../../components/skillsAndServiceCards';
import useStyles from './home.styles.js';

function Alert(props: AlertProps) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const Home: FC<{}> = (props) => {
	const classes: any = useStyles();
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};
	return (
		<div className={classes.homePG}>
			<div className={classes.banner}>
				<div>
					<h2>G'day, I'm Kiran </h2>
					<h6>Front-end Developer</h6>
					<Button
						variant='contained'
						color='secondary'
						style={{ margin: '10px' }}
						href='kiran_2021.pdf'
						onClick={handleClick}
						download
					>
						Download Resume <KeyboardArrowDownOutlined />
					</Button>
				</div>
			</div>
			<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
				<Alert onClose={handleClose} severity='success'>
					Resume Downloaded successfully !
				</Alert>
			</Snackbar>
			<SkillsAndServiceCards />
		</div>
	);
};

export default withRouter(Home);

// https://mattfarley.ca/
