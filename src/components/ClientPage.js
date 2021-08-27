// Reference: For the animations - https://css-tricks.com/using-multi-step-animations-transitions/

import React from 'react'
import TextList from './TextList'
import { clientCompanyList, clientArtistList } from '../resources/clients';


const ClientPage = ({ width, height, zIndex }) => {
    // TODO : Re-arrange with screen resize.

    const pageStyle = {
        width: width,
        height: height,
        position: 'absolute',
        top: `0px`,
        left: `0px`,
        // backgroundColor: 'black',
        zIndex: zIndex,
        overflowY: 'auto',
    };

    const centerScreenX = width / 2;
    const textListWidth = width > 500 ? 400 : 300;

    const companyPosLeft = width > 850 ? (centerScreenX - textListWidth) : (width-textListWidth) / 2;
    const companyStyle = {
        position: 'absolute',
        paddingTop: `4.0em`,
        top: `100px`,
        left: `${companyPosLeft}px`,
        color: 'white',
    };

    const artistPosTop = width > 850 ? height-400 : 450;
    const artistPosLeft = width > 850 ? (centerScreenX) : (width-textListWidth) / 2;
    const artistStyle = {
        position: 'absolute',
        paddingTop: `4.0em`,
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
        
export default React.memo(ClientPage);
        