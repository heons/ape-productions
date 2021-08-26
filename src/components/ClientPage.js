// Reference: For the animations - https://css-tricks.com/using-multi-step-animations-transitions/

import React from 'react'
import TextList from './TextList'
import { clientCompanyList, clientArtistList } from '../resource';


const ClientPage = ({ screenSize, zIndex }) => {
    // TODO : Re-arrange with screen resize.

    const pageStyle = {
        width: screenSize.width,
        height: screenSize.height,
        position: 'absolute',
        top: `0px`,
        left: `0px`,
        // backgroundColor: 'black',
        zIndex: zIndex,
        overflowY: 'auto',
    };

    const textListWidth = screenSize.width > 500 ? 400 : 300;

    const companyPosLeft = screenSize.width > 850 ? 30 : (screenSize.width-textListWidth) / 2;
    const companyStyle = {
        position: 'absolute',
        top: `100px`,
        left: `${companyPosLeft}px`,
        color: 'white',
    };

    const artistPosTop = screenSize.width > 850 ? screenSize.height-400 : 450;
    const artistPosLeft = screenSize.width > 850 ? screenSize.width-410 : (screenSize.width-textListWidth) / 2;
    const artistStyle = {
        position: 'absolute',
        top: `${artistPosTop}px`,
        left:`${artistPosLeft}px`,
        color: 'white',
    };

    
    return (
        <div
            style={pageStyle}
        >
            <div
                style={companyStyle}
            >
                <h1>Company</h1>
                <TextList textList={clientCompanyList} width={`${textListWidth}px`} height='300px'/>
            </div>
            
            <div
                style={artistStyle}
            >
                <h1>Artist</h1>
                <TextList textList={clientArtistList} width={`${textListWidth}px`} height='300px'/>
            </div>
        </div>
    )
}
        
export default ClientPage
        