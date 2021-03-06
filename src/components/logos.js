import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Grid = styled.div`
  display: grid;
  margin: 2em auto;
  margin-top: 1em;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  height: 100%;
  width: 70%;
  grid-gap: 5px;
  @media (max-width: 780px) {
    width: 100%;
    margin: 0;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Image = styled(Img)`
  width: 60%;
  align-self: center;
  justify-self: center;
`;

function LogoImages({ fluid }) {
  return (
    <Grid>
      <Image
        alt="Hipstr Who Have We Worked With Logo"
        fluid={fluid.image6.childImageSharp.fluid}
      />
      <Image
        alt="Hipstr Who Have We Worked With Logo"
        fluid={fluid.image2.childImageSharp.fluid}
      />
      <Image
        alt="Hipstr Who Have We Worked With Logo"
        fluid={fluid.image3.childImageSharp.fluid}
      />
      <Image
        alt="Hipstr Who Have We Worked With Logo"
        fluid={fluid.image5.childImageSharp.fluid}
      />
      <Image
        alt="Hipstr Who Have We Worked With Logo"
        fluid={fluid.image4.childImageSharp.fluid}
      />
      <Image
        alt="Hipstr Who Have We Worked With Logo"
        fluid={fluid.image1.childImageSharp.fluid}
      />
      <Image
        alt="Hipstr Who Have We Worked With Logo"
        fluid={fluid.image7.childImageSharp.fluid}
      />
      <Image
        alt="Hipstr Who Have We Worked With Logo"
        fluid={fluid.image8.childImageSharp.fluid}
      />
      <Image
        alt="Hipstr Who Have We Worked With Logo"
        fluid={fluid.image9.childImageSharp.fluid}
      />
      <Image
        alt="Hipstr Who Have We Worked With Logo"
        fluid={fluid.image10.childImageSharp.fluid}
      />
      <Image
        alt="Hipstr Who Have We Worked With Logo"
        fluid={fluid.image11.childImageSharp.fluid}
      />
      <Image
        alt="Hipstr Who Have We Worked With Logo"
        fluid={fluid.image12.childImageSharp.fluid}
      />
      <Image
        alt="Hipstr Who Have We Worked With Logo"
        fluid={fluid.image13.childImageSharp.fluid}
      />
      <Image
        alt="Hipstr Who Have We Worked With Logo"
        fluid={fluid.image14.childImageSharp.fluid}
      />
      <Image
        alt="Hipstr Who Have We Worked With Logo"
        fluid={fluid.image15.childImageSharp.fluid}
      />
      <Image
        alt="Hipstr Who Have We Worked With Logo"
        fluid={fluid.image16.childImageSharp.fluid}
      />
      <Image
        alt="Hipstr Who Have We Worked With Logo"
        fluid={fluid.image17.childImageSharp.fluid}
      />
      <Image
        alt="Hipstr Who Have We Worked With Logo"
        fluid={fluid.image18.childImageSharp.fluid}
      />
    </Grid>
  );
}

function Logos() {
  return (
    <Wrapper>
      <StaticQuery
        query={graphql`
          query {
            image1: file(relativePath: { eq: "logo1.jpg" }) {
              ...imageLogo
            }

            image2: file(relativePath: { eq: "logo2.jpg" }) {
              ...imageLogo
            }

            image3: file(relativePath: { eq: "logo3.jpg" }) {
              ...imageLogo
            }
            image4: file(relativePath: { eq: "logo4.jpg" }) {
              ...imageLogo
            }
            image5: file(relativePath: { eq: "logo5.jpg" }) {
              ...imageLogo
            }
            image6: file(relativePath: { eq: "logo6.jpg" }) {
              ...imageLogo
            }
            image7: file(relativePath: { eq: "logo7.jpg" }) {
              ...imageLogo
            }
            image8: file(relativePath: { eq: "logo8.jpg" }) {
              ...imageLogo
            }
            image9: file(relativePath: { eq: "logo9.jpg" }) {
              ...imageLogo
            }
            image10: file(relativePath: { eq: "logo10.jpg" }) {
              ...imageLogo
            }
            image11: file(relativePath: { eq: "logo11.jpg" }) {
              ...imageLogo
            }
            image12: file(relativePath: { eq: "logo12.jpg" }) {
              ...imageLogo
            }
            image13: file(relativePath: { eq: "logo13.jpg" }) {
              ...imageLogo
            }
            image14: file(relativePath: { eq: "logo14.jpg" }) {
              ...imageLogo
            }
            image15: file(relativePath: { eq: "logo15.jpg" }) {
              ...imageLogo
            }
            image16: file(relativePath: { eq: "logo16.jpg" }) {
              ...imageLogo
            }
            image17: file(relativePath: { eq: "logo17.jpg" }) {
              ...imageLogo
            }
            image18: file(relativePath: { eq: "logo18.jpg" }) {
              ...imageLogo
            }
          }
        `}
        render={data => <LogoImages fluid={data} />}
      />
    </Wrapper>
  );
}

export default Logos;

export const imageLogo = graphql`
  fragment imageLogo on File {
    childImageSharp {
      fluid(maxWidth: 175) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
