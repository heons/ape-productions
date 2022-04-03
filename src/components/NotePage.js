import React from 'react'
import { Container } from 'react-bootstrap';
import NoteItem from './NoteItem'
import { getBasePageStyle } from '../utils'

// Resources
import { noteList } from '../resources/notes'

// Hooks
import useWindowDimensions from '../hooks/useWindowDimensions'


const NotePage = ({ zIndex }) => {
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
                {noteList.map(note => {
                    return (
                        <NoteItem note={note} key={note.id} />
                    )
                })}
            </Container>
        </div>
    )
}

export default React.memo(NotePage)
