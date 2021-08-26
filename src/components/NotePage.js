import React from 'react'
import { Container } from 'react-bootstrap';
import { noteList } from '../resources/noteList'
import NoteItem from './NoteItem'


const NotePage = ({ width, height, zIndex }) => {

    const pageStyle = {
        width: width,
        height: height,
        position: 'absolute',
        top: `0px`,
        left: `0px`,
        paddingTop: `100px`,
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
