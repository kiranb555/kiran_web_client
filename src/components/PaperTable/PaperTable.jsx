import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { PaperTableWrapper, ChipWrapper } from './PaperTable.style';
import { Badge } from 'reactstrap';

const PaperTable = ({ data }) => {
	const { t } = useTranslation();
	return (
		<PaperTableWrapper>
			{data && Object.keys(data).length > 0
				? Object.keys(data).map((key, i) => (
					<div className='paper__holder' key={i}>
							<div>{ t(key.toLowerCase())}</div>
							{Array.isArray(data[key]) ? (
								<ChipWrapper>
									{data[key].map((item, id) => (
										<Badge key={id} pill>{item.toUpperCase()}</Badge>
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
