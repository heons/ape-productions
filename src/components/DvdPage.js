import React from 'react';
import { Container } from 'react-bootstrap';

import SEO from './SEO';
import DvdItem from './DvdItem';
import { getBasePageStyle } from '../utils';

// Resources
import { dvdList } from '../resources/dvds';

// Hooks
import useWindowDimensions from '../hooks/useWindowDimensions';

const DvdPage = ({ zIndex }) => {
  const { height, width } = useWindowDimensions();

  const pageStyle = {
    ...getBasePageStyle(width, height, zIndex),
    backgroundColor: 'black',
    overflowY: 'auto',
  };

  const itemTitles = dvdList.map((item) => item.title);
  const description = `${itemTitles.join(', ')}`;

  return (
    <div className="PagePaddingTop" style={pageStyle}>
      <SEO title={`OH EUN HO - DVD`} description={description} />
      <Container>
        {dvdList.map((dvd) => {
          return <DvdItem item={dvd} key={dvd.title} />;
        })}
      </Container>
    </div>
  );
};

export default React.memo(DvdPage);
