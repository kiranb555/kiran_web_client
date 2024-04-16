import React from 'react'
import BikeSVG from '../../images/UndrawBike.svg.jsx';
import UndrawBalloon from '../../images/UndrawBalloon.svg.jsx';
import CameraSVG from '../../images/UndrawCamera.svg.jsx';
import EscapeButtonSVG from '../../images/UndrawEscapeButton.svg.jsx';
import FunArrowSVG from '../../images/UndrawFunArrow.svg.jsx';
import UndrawHeart from '../../images/UndrawHeart.svg.jsx';
import UndrawSmileyFace from '../../images/UndrawSmileyFace.svg.jsx';

const SvgUndraw = ({type}) => {
    const renderIcon = (type) => {
    switch (type){
        case 'BikeSVG': 
            return <BikeSVG/>
        case 'BalloonSVG':
            return <UndrawBalloon/>
        case 'CameraSVG': 
            return <CameraSVG/>
        case 'EscapeButtonSVG':
            return <EscapeButtonSVG/>
            case 'FunArrowSVG': 
            return <FunArrowSVG/>
        case 'HeartSVG':
            return <UndrawHeart/>
        case 'SmileyFaceSVG':
            return <UndrawSmileyFace/>
        default:
            return null
    }
    }
    return <div>{renderIcon(type)}</div>
}

export default SvgUndraw