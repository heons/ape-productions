import React from 'react'


const ContactPage = ({ screenSize, zIndex }) => {
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
                style={{position: 'absolute', top: `80px`, left: `30px`, color: 'white', 'textAlign': 'left'}}
            >
                <h1>APE.</h1>
                <h2>서울특별시 마포구 양화진길 6, 6층</h2>
                <h2>+82-10-8487-2110</h2>
                <h2>+82-10-4642-8321</h2>
                <h2>apeproductionskr@gmail.com</h2>
            </div>
        </div>
    )
}
        
export default ContactPage
        