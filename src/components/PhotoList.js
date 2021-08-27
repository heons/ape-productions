import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { getBasePageStyle } from '../utils'

// Resources
import { photoWorkList, getPhotoUrlsByIndex } from '../resources/photos'

// Hooks
import useWindowDimensions from '../hooks/useWindowDimensions'


const PhotoList = ({ match }) =>{
    const { height, width } = useWindowDimensions();

    const workName = photoWorkList[match.params.id].name;
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
    }

    return (
        <div style={pageStyle}>
            <ListGroup horizontal={isHorizontal ? true : null}>
                {
                    photoUrls.map((url, idx) => {
                        return (
                            <ListGroup.Item
                                key={`${workName}-${idx}`}
                                style={itemStyle}
                            >
                                <img 
                                    src={`${url}`}
                                    alt={`${workName}-${idx}`}
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

