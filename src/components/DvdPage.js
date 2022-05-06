import React from 'react'
import { Container } from 'react-bootstrap';
import DvdItem from './DvdItem'
import { getBasePageStyle } from '../utils'

// Resources
import { dvdList } from '../resources/dvds'

// Hooks
import useWindowDimensions from '../hooks/useWindowDimensions'


const DvdPage = ({ zIndex }) => {
    const { height, width } = useWindowDimensions();

    const pageStyle = {
        ...getBasePageStyle(width, height, zIndex),
        backgroundColor: 'black',
        overflowY: 'auto',
    };

    return (
        <div
            className='PagePaddingTop'
            style={pageStyle}
        >
            <Container>
                {dvdList.map(dvd => {
                    return (
                        <DvdItem item={dvd} key={dvd.title} />
                    )
                })}
            </Container>
        </div>
    )
}

export default React.memo(DvdPage)
