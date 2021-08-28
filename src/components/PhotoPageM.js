import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { getBasePageStyle } from '../utils'

// Resources
import { getPhotoUrlsByIndex } from '../resources/photos'

// Hooks
import useWindowDimensions from '../hooks/useWindowDimensions'

const PhotoPageM = ({ zIndex }) =>{
    const { height, width } = useWindowDimensions();

    const photoList = [...getPhotoUrlsByIndex(0, true), ...getPhotoUrlsByIndex(1, true)];

    const pageStyle = {
        ...getBasePageStyle(width, height, zIndex),
        backgroundColor: 'black',
        overflowY: 'scroll',
        paddingLeft: '10px',
        paddingRight: '10px',
    };

    return (
        <div style={pageStyle}>
            <Row>
                {
                    photoList.map((photo, idx) => {
                        return (
                            <Col xs='4'
                                key={`photo-page-m-${idx}`}
                                style={{'padding': '5px', 'textAlign': 'center'}}
                            >
                                <img width='100%' style={{'padding': '0', 'border': '0',}} src={`${photo}`} alt={`photo-page-m-${idx}`}></img>
                            </Col>
                    )})
                }
            </Row>
        </div>
    )
}

export default PhotoPageM

