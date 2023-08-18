// Reference: For the animations - https://css-tricks.com/using-multi-step-animations-transitions/

import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { getBasePageStyle } from '../utils';

// Resource
import { getInitSampleArtistsInfo } from '../resources/films';

// Hooks
import useWindowDimensions from '../hooks/useWindowDimensions';

const FilmPageM = ({ zIndex }) => {
  const { height, width } = useWindowDimensions();

  const artistList = getInitSampleArtistsInfo();

  const pageStyle = {
    ...getBasePageStyle(width, height, zIndex),
    backgroundColor: 'black',
    overflowY: 'scroll',
    overflowX: 'hidden',
  };

  return (
    <div style={pageStyle} className="PagePaddingTop">
      <Row>
        {artistList.map((artist, idx) => {
          return (
            <Col xs="12" key={`film-page-m-${idx}`} style={{ padding: '5px', textAlign: 'center' }}>
              <Link to={`/${artist.id}`}>
                <video
                  poster={`${process.env.PUBLIC_URL}/APE_film_effect.gif`}
                  src={`${process.env.PUBLIC_URL}/${artist.sampleVideoSrc}`}
                  loop
                  muted
                  autoPlay
                  playsInline>
                  Your browser does not support the HTML5 Video element.
                </video>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default FilmPageM;
