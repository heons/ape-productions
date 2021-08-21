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
    };
    
    return (
        <div
            style={pageStyle}
        >
            <div
                style={{position: 'absolute', top: `60px`, left: `10px`, color: 'white'}}
            >
                <h1>Company</h1>
                <TextList textList={clientCompanyList} width='300px' height='300px'/>
            </div>
            
            <div
                style={{position: 'absolute', top: `${screenSize.height-400}px`, left:`${screenSize.width-410}px`, color: 'white'}}
            >
                <h1>Artist</h1>
                <TextList textList={clientArtistList} width='400px' height='300px'/>
            </div>
        </div>
    )
}
        
export default ClientPage
        