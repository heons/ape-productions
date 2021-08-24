import React from 'react'
import { Container } from 'react-bootstrap';
import { noteList } from '../resources/noteList'
import NoteItem from './NoteItem'


const NotePage = ({ screenSize, zIndex }) => {

    const pageStyle = {
        width: screenSize.width,
        height: screenSize.height,
        position: 'absolute',
        top: `0px`,
        left: `0px`,
        paddingTop: `80px`,
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
        
export default NotePage
        