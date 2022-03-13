import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import { useLocation } from '@gatsbyjs/reach-router';

const background = {
  background: 'linear-gradient(45deg, #57003f 0%,#f57453 100%)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '100%',
  width: '100%',
  position: 'fixed',
  zIndex: -1,
  top: 0,
  left: 0,
};

const container = {
  fontFamily: 'Ubuntu',
  width: 'calc(10vw + 600px)',
  height: 'calc(20vh + 400px)',
};

const Terminal = {
  width: '600px',
  height: '400px',
  marginTop: '10vh',
  marginBottom: '10vh',
  marginLeft: '5vw',
  marginRight: '5vw',
  boxShadow: '2px 4px 10px rgba(0,0,0,.5)',
};

const terminalToolbar = {
  background: 'linear-gradient(#504b45 0%,#3c3b37 100%)',
  width: '100%',
  padding: '0 8px',
  boxSizing: 'border-box',
  height: '25px',
  display: 'flex',
  alignItems: 'center',
  borderTopLeftRadius: '6px',
  borderTopRightRadius: '6px',
};

const toolbarButtons = {
  display: 'flex',
  alignItems: 'center',
};

const ToolbarButton = styled.button`
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    padding: 0;
    font-size: 7px;
    background: linear-gradient(#7d7871 0%, #595953 100%);
    text-shadow: 0px 1px 0px rgba(255,255,255,0.2);
    box-shadow: 0px 0px 1px 0px #41403A,0px 1px 1px 0px #474642;
    border: none;
    margin-right: 4px;
    &:hover {
        cursor: pointer;
    },
    &:focus {
        outline: none;
    }
}`;

const ToolbarButtonExit = styled.button`
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    padding: 0;
    font-size: 7px;
    text-shadow: 0px 1px 0px rgba(255,255,255,0.2);
    box-shadow: 0px 0px 1px 0px #41403A,0px 1px 1px 0px #474642;
    border: none;
    margin-right: 4px;
    &:hover {
        cursor: pointer;
    },
    &:focus {
        outline: none;
    }
    background: #f25d2b;
    background: linear-gradient(#f37458 0%, #de4c12 100%);
    background-clip: padding-box;
`;

const toolbarUser = {
  color: '#d5d0ce',
  marginLeft: '4px',
  fontSize: '12px',
  lineHeight: '14px',
};

const terminalBody = {
  background: 'rgba(56, 4, 40, .9)',
  minHeight: '375px',
  marginTop: '-1px',
  paddingTop: '2px',
  fontFamily: 'Ubuntu mono',
};

export default function TerminalPage({ toolbarText, children }) {
  const pageQuery = useStaticQuery(graphql`
  query metadataQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
        image
      }
    }
  }
`);

  const { pathname } = useLocation();
  const seo = {
    image: `${pageQuery.site.siteMetadata.siteUrl}${pageQuery.site.siteMetadata.image}`,
    fullUrl: `${pageQuery.site.siteMetadata.siteUrl}${pathname}`,
    title: pageQuery.site.siteMetadata.title,
    description: pageQuery.site.siteMetadata.description,
  };
  return (
    <>
      <Helmet title={seo.title} htmlAttributes={{ lang: 'en' }}>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta property="og:url" content={seo.fullUrl} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </Helmet>
      <div style={background} />
      <div style={container}>
        <div style={Terminal}>
          <div style={terminalToolbar}>
            <div style={toolbarButtons}>
              <ToolbarButtonExit>&#10005;</ToolbarButtonExit>
              <ToolbarButton>&#9472;</ToolbarButton>
              <ToolbarButton>&#9723;</ToolbarButton>
            </div>
            <p style={toolbarUser}>{toolbarText}</p>
          </div>
          <div style={terminalBody}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

TerminalPage.propTypes = {
  toolbarText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
