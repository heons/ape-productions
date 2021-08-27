import React from 'react'

// Hooks
import useWindowDimensions from '../hooks/useWindowDimensions'


const ContactPage = ({ zIndex }) => {
    const { height, width } = useWindowDimensions();

    const pageStyle = {
        width: width,
        height: height,
        position: 'absolute',
        top: `0px`,
        left: `0px`,
        paddingTop: `12.0em`,
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
                <h1>서울특별시 마포구 양화진길 6, 6층</h1>
                <h1>+82-10-8487-2110</h1>
                <h1>+82-10-4642-8321</h1>
                <h1>apeproductionskr@gmail.com</h1>
            </div>
        </div>
    )
}
        
export default React.memo(ContactPage);
        