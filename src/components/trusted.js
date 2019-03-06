import React from "react";
import styled from "styled-components";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.5em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #eaeaea;
  @media (max-width: 720px) {
    text-align: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 25px;
  width: 65%;
  margin: 1em auto 2em auto;
  grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
  grid-auto-rows: auto;
  @media (max-width: 720px) {
    width: 95%;
    margin: margin auto;
    grid-template-columns: repeat(2, 1fr);
  }
`;

function TrustedBy({ fluid }) {
  return (
    <Grid>
      <Img
        alt="Hipstr Awards Won Logos"
        fluid={fluid.image6.childImageSharp.fluid}
      />
      <Img
        alt="Hipstr Awards Won Logos"
        fluid={fluid.image2.childImageSharp.fluid}
      />
      <Img
        alt="Hipstr Awards Won Logos"
        fluid={fluid.image3.childImageSharp.fluid}
      />
      <Img
        alt="Hipstr Awards Won Logos"
        fluid={fluid.image5.childImageSharp.fluid}
      />
      <Img
        alt="Hipstr Awards Won Logos"
        fluid={fluid.image4.childImageSharp.fluid}
      />
      <Img
        alt="Hipstr Awards Won Logos"
        fluid={fluid.image1.childImageSharp.fluid}
      />
    </Grid>
  );
}

const Trusted = () => (
  <Wrapper>
    <StaticQuery
      query={graphql`
        query {
          image1: file(relativePath: { eq: "trusted1.png" }) {
            ...logoImage
          }

          image2: file(relativePath: { eq: "trusted2.png" }) {
            ...logoImage
          }

          image3: file(relativePath: { eq: "trusted3.png" }) {
            ...logoImage
          }
          image4: file(relativePath: { eq: "trusted4.png" }) {
            ...logoImage
          }
          image5: file(relativePath: { eq: "trusted5.png" }) {
            ...logoImage
          }
          image6: file(relativePath: { eq: "trusted6.png" }) {
            ...logoImage
          }
        }
      `}
      render={data => <TrustedBy fluid={data} />}
    />
  </Wrapper>
);

export default Trusted;

export const logoImage = graphql`
  fragment logoImage on File {
    childImageSharp {
      fluid(maxWidth: 75, maxHeight: 75) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
