import React from "react";
import { Container } from "react-bootstrap";

import SEO from "./SEO";
import DvdItem from "./DvdItem";
import { getBasePageStyle } from "../utils";

// Resources
import { getArtistDetailById } from "../resources/films";

// Hooks
import useWindowDimensions from "../hooks/useWindowDimensions";

const ArtistDetailPage = ({ match }) => {
  const artist = getArtistDetailById(match.params.id);

  const { height, width } = useWindowDimensions();

  const pageStyle = {
    ...getBasePageStyle(width, height, 1),
    backgroundColor: "black",
    overflowY: "auto",
  };

  const itemTitles = artist.subItems.map(item => item.title);
  const description = `${artist.title}, ${itemTitles.join(", ")}`;

  return (
    <div className="PagePaddingTop" style={pageStyle}>
      <SEO title={`OH EUN HO - ${artist.title}`} description={description}/>
      <h1 style={{ textAlign: "center" }}>{artist && artist.title}</h1>

      <Container>
        {artist.subItems.map((item) => {
          return <DvdItem item={item} key={item.title} />;
        })}
      </Container>
    </div>
  );
};

export default ArtistDetailPage;
