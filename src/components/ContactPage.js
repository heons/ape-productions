import React from 'react'
import { getBasePageStyle } from '../utils'

// Hooks
import useWindowDimensions from '../hooks/useWindowDimensions'


const ContactPage = ({ zIndex }) => {
    const { height, width } = useWindowDimensions();

    const pageStyle = {
        ...getBasePageStyle(width, height, zIndex),
        paddingLeft: `30px`,
    };
    
    return (
        <div
            className='PagePaddingTop'
            style={pageStyle}
        >
            <div>
                <h1>서울특별시 마포구 양화진길 6, 6층</h1>
                <h1>+82-10-8487-2110</h1>
                <h1>+82-10-4642-8321</h1>
                <h1>apeproductionskr@gmail.com</h1>
            </div>
        </div>
    )
}
        
export default React.memo(ContactPage);
        