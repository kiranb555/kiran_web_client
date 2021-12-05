import PropTypes from 'prop-types';
import Chip from '../Chip';
import { PaperTableWrapper, ChipWrapper } from './PaperTable.style';

const PaperTable = ({ data }) => {
	return (
		<PaperTableWrapper>
			{data && Object.keys(data).length > 0
				? Object.keys(data).map((key, i) => (
					<div className='paper__holder' key={i}>
						<div>{key && key.split('_').join(' ')}</div>
						{Array.isArray(data[key]) ? (
							<ChipWrapper>
								{data[key].map((item, id) => (
									<Chip
										key={id}
										label={item.toUpperCase()}
										variant='outlined'
										size='small'
									/>
								))}
							</ChipWrapper>
						) : (
							<div
								className={
									key.includes('institute') ||
										key.includes('company')
										? 'bold'
										: ''
								}
							>
								{data[key]}
							</div>
						)}
					</div>
				  ))
				: null}
		</PaperTableWrapper>
	);
};

PaperTable.propTypes = {
	data: PropTypes.object.isRequired,
};

export default PaperTable;
