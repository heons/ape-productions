import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
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

  return (
    <div className="PagePaddingTop" style={pageStyle}>
      <Helmet>
        <title>{`OH EUN HO - ${artist.title}`}</title>
      </Helmet>
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
