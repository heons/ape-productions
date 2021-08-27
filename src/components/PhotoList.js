import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { photoWorkList, getPhotoUrlsByIndex } from '../resources/film'


const PhotoList = ({ match }) =>{

    const workName = photoWorkList[match.params.id].name;
    const photoUrls = getPhotoUrlsByIndex(match.params.id);

    return (
        <div style={{'overflowX': 'scroll'}}>
            <ListGroup horizontal>
                {
                    photoUrls.map((url, idx) => {
                        return (
                            <ListGroup.Item
                                key={`${workName}-${idx}`}
                                style={{'height': '100vh', 'border': '0', 'textAlign': 'center'}}
                            >
                                <img height='100%' style={{'padding': '0'}} src={`${url}`} alt={`${workName}-${idx}`}></img>
                            </ListGroup.Item>
                    )})
                }
            </ListGroup>
        </div>
    )
}

export default PhotoList

