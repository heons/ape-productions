import React from 'react'


const NotePage = ({ screenSize, zIndex }) => {
    // TODO : Re-arrange with screen resize.

    const pageStyle = {
        width: screenSize.width,
        height: screenSize.height,
        position: 'absolute',
        top: `0px`,
        left: `0px`,
        backgroundColor: 'black',
        zIndex: zIndex,
    };
    
    return (
        <div
            style={pageStyle}
        >
            <div
                style={{position: 'absolute', top: `80px`, left: `30px`, color: 'white', 'textAlign': 'left'}}
            >
                <h1>Note.</h1>
            </div>
        </div>
    )
}
        
export default NotePage
        