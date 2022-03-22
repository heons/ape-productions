import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { getBasePageStyle } from '../utils'

// Resources
import { photoWorkList, getPhotoUrlsByIndex } from '../resources/photos'

// Hooks
import useWindowDimensions from '../hooks/useWindowDimensions'


const PhotoList = ({ match }) =>{
    const { height, width } = useWindowDimensions();

    const workTitle = photoWorkList[match.params.id].title;
    const photoUrls = getPhotoUrlsByIndex(match.params.id);

    const isHorizontal = (width > height);

    const pageStyle = {
        ...getBasePageStyle(width, height, 1),
        backgroundColor: 'black',
        overflowX: isHorizontal ? 'scroll' : null,
        overflowY: !isHorizontal ? 'scroll' : null,
    };

    const itemStyle = {
        height: isHorizontal ? '100vh' : null,
        width: !isHorizontal ? '100vw' : null,
        border: '0',
        textAlign: 'center',
        padding: '0',
    }

    return (
        <div style={pageStyle}>
            <Helmet>
                <title>{ `Oh Eun Ho - ${workTitle}` }</title>
            </Helmet>
            <ListGroup horizontal={isHorizontal ? true : null}>
                {
                    photoUrls.map((url, idx) => {
                        return (
                            <ListGroup.Item
                                key={`${workTitle}-${idx}`}
                                style={itemStyle}
                            >
                                <img 
                                    src={`${url}`}
                                    alt={`${workTitle}-${idx}`}
                                    style={{'padding': '0'}}
                                    height={isHorizontal ? '100%': null}
                                    width={!isHorizontal ? '100%': null}
                                ></img>
                            </ListGroup.Item>
                    )})
                }
            </ListGroup>
        </div>
    )
}

export default PhotoList

