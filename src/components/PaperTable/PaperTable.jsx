import PropTypes from 'prop-types';
import { PaperTableWrapper, ChipWrapper } from './PaperTable.style';
import Chip from '../Chip';

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
											variant='filled'
											size='small'
										/>
									))}
								</ChipWrapper>
							) : (
								<div>{data[key]}</div>
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
