import React from 'react';
import { Container } from 'react-bootstrap';

import SEO from './SEO';
import NoteItem from './NoteItem';
import { getBasePageStyle } from '../utils';

// Resources
import { noteList } from '../resources/notes';

// Hooks
import useWindowDimensions from '../hooks/useWindowDimensions';

const NotePage = ({ zIndex }) => {
  const { height, width } = useWindowDimensions();

  const pageStyle = {
    ...getBasePageStyle(width, height, zIndex),
    backgroundColor: 'black',
    overflowY: 'auto',
  };

  const itemTitles = noteList.map((item) => item.title);
  const description = `${itemTitles.join(', ')}`;

  return (
    <div className="PagePaddingTop" style={pageStyle}>
      <SEO title={`OH EUN HO - NOTE`} description={description} />
      <Container>
        {noteList.map((note, index) => {
          return <NoteItem note={note} key={index} />;
        })}
      </Container>
    </div>
  );
};

export default React.memo(NotePage);
