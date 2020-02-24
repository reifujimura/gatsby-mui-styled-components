import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

type SEOProps = {
  site: {
    siteMetaData: {
      title: string;
      description: string;
    };
  };
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const SEO = () => (
  <StaticQuery
    query={query}
    render={(props: SEOProps) => (
      <Helmet title={props.site.siteMetaData.title}>
        <meta
          name="description"
          content={props.site.siteMetaData.description}
        />
      </Helmet>
    )}
  />
);

export default SEO;
