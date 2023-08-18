// Reference: For the animations - https://css-tricks.com/using-multi-step-animations-transitions/

import React from 'react';

import SEO from './SEO';
import TextList from './TextList';
import { getBasePageStyle } from '../utils';

// Resources
import { clientCompanyList, clientArtistList } from '../resources/clients';

// Hooks
import useWindowDimensions from '../hooks/useWindowDimensions';

const ClientPage = ({ zIndex }) => {
  const { height, width } = useWindowDimensions();

  const pageStyle = {
    ...getBasePageStyle(width, height, zIndex),
    overflowY: 'auto',
    textAlign: 'center',
  };

  const centerScreenX = width / 2;
  const textListWidth = width > 500 ? 400 : 300;
  const widthBreakPoint = 850;
  const verticalCenterTop = Math.max(100, height / 2 - 200);
  const horizontalMarginBetween = 10;

  const companyPosTop = width > widthBreakPoint ? verticalCenterTop : 100;
  const companyPosLeft =
    width > widthBreakPoint ? centerScreenX - textListWidth - horizontalMarginBetween : (width - textListWidth) / 2;
  const companyStyle = {
    position: 'absolute',
    paddingTop: `4.0em`,
    top: `${companyPosTop}px`,
    left: `${companyPosLeft}px`,
    color: 'white',
  };

  const artistPosTop = width > widthBreakPoint ? verticalCenterTop : 450;
  const artistPosLeft = width > widthBreakPoint ? centerScreenX + horizontalMarginBetween : (width - textListWidth) / 2;
  const artistStyle = {
    position: 'absolute',
    paddingTop: `4.0em`,
    top: `${artistPosTop}px`,
    left: `${artistPosLeft}px`,
    color: 'white',
  };

  const description = `${clientCompanyList.join(', ')}, ${clientArtistList.join(', ')}`;

  return (
    <div style={pageStyle}>
      <SEO title={`OH EUN HO - NOTE`} description={description} />
      <div style={companyStyle}>
        <h1>Company</h1>
        <TextList textList={clientCompanyList} width={`${textListWidth}px`} height="300px" />
      </div>

      <div style={artistStyle}>
        <h1>Artist</h1>
        <TextList textList={clientArtistList} width={`${textListWidth}px`} height="300px" />
      </div>
    </div>
  );
};

export default React.memo(ClientPage);
