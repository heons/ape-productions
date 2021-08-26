import React from 'react'


const ContactPage = ({ width, height, zIndex }) => {
    const pageStyle = {
        width: width,
        height: height,
        position: 'absolute',
        top: `0px`,
        left: `0px`,
        paddingTop: `100px`,
        paddingLeft: `30px`,
        // backgroundColor: 'black',
        zIndex: zIndex,
    };
    
    return (
        <div
            style={pageStyle}
        >
            <div
                style={{color: 'white', textAlign: 'left'}}
            >
                <h2>서울특별시 마포구 양화진길 6, 6층</h2>
                <h2>+82-10-8487-2110</h2>
                <h2>+82-10-4642-8321</h2>
                <h2>apeproductionskr@gmail.com</h2>
            </div>
        </div>
    )
}
        
export default React.memo(ContactPage);
        