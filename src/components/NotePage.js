import React from 'react'
import { Container } from 'react-bootstrap';
import NoteItem from './NoteItem'

// Resources
import { noteList } from '../resources/notes'

// Hooks
import useWindowDimensions from '../hooks/useWindowDimensions'


const NotePage = ({ zIndex }) => {
    const { height, width } = useWindowDimensions();

    const pageStyle = {
        width: width,
        height: height,
        position: 'absolute',
        top: `0px`,
        left: `0px`,
        paddingTop: `12.0em`,
        backgroundColor: 'black',
        overflowY: 'auto',
        textAlign: 'left',
        zIndex: zIndex,
    };
    
    return (
        <div
            style={pageStyle}
        >  
            <Container>
                {noteList.map(note => {
                    return (
                        <NoteItem note={note} key={note.id}/>
                )})}
            </Container>
        </div>
    )
}
        
export default React.memo(NotePage)
