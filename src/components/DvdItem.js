// Ref: https://faq.dailymotion.com/hc/en-us/articles/360022841393-How-to-preserve-the-player-aspect-ratio-on-a-responsive-page

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { paddingBottomByRatio } from '../utils';

const DvdItem = ({ item }) => {
  const styleIframe = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    border: 'none',
    top: 0,
    left: 0,
    frameborder: '0',
    marginTop: '0.8em',
  };

  // Summary, Needs and Solution is not being used. - No Contents.
  return (
    <Row>
      <Col xs={12}>
        <h1 style={{ paddingBottom: '0.8em' }}>{item.title}</h1>
      </Col>
      <Col xs={12} key={item.url}>
        <div style={{ position: 'relative', paddingBottom: paddingBottomByRatio[item.ratio ? item.ratio : '16:9'] }}>
          <iframe
            style={styleIframe}
            title={item.title}
            src={item.url}
            allow="fullscreen; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </Col>
      <Col xs={12}>
        <hr style={{ color: 'white', borderTop: '3px solid', borderRadius: '3px' }} />
      </Col>
    </Row>
  );
};

export default React.memo(DvdItem);
