import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	App: {
		display: 'flex',
		flexDirection: 'column',
		[theme.breakpoints.down('sm')]: {
			height: `calc(100vh - 3rem)`,
		},
		height: `calc(100vh - 3rem)`,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		backgroundColor: theme.palette.primary.main,
	},
	suspense: {
		fontSize: '30px',
		color: theme.palette.primary.main,
		textAlign: 'center',
	},
	themeIcon: {
		position: 'fixed',
		left: '10px',
		bottom: '20vh',
	},
}));
