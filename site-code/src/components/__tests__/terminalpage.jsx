import React from 'react';
import renderer from 'react-test-renderer';
import TerminalPage from '../terminalpage';
import TerminalPrompt from '../terminalprompt';
import TerminalText from '../terminaltext';
import StyledAnchor from '../styledanchor';

const { act } = renderer;
const user = 'kaustubh@kaustubhk.com:';
const location = '~';

jest.mock('@gatsbyjs/reach-router', () => ({
  ...jest.requireActual('@gatsbyjs/reach-router'),
  useLocation: () => ({
    pathname: '/sampleroute',
  }),
}));

jest.mock('gatsby', () => ({
  __esModule: true,
  useStaticQuery: () => ({
    site: {
      siteMetadata: {
        title: 'Site Title',
        description: 'Site Description',
        siteUrl: 'Site Url',
        image: 'Site Image',
      },
    },
  }),
  graphql: () => ({
    mdx: {
      frontmatter: {
        title: 'Title',
        summary: 'Summary',
        slug: '/slug',
        previewImage: {
          childImageSharp: {
            original: { src: 'image.png', width: 200, height: 200 },
          },
        },
      },
      body: 'var _excluded = ["components"];\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "slug": "/slug",\n  "date": "2022-02-20",\n  "title": "Testing",\n  "summary": "Summary",\n  "priority": 1,\n  "previewImage": "../images/medium/preview4.png",\n  "cardColors": "#fff740,#7afcff,#ff7eb9",\n  "darkCardColors": "#b3aa00,#00b0b3,#b30050"\n};\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, _excluded);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("p", null, "Testing"));\n}\n;\nMDXContent.isMDXComponent = true;',
    },
    site: { siteMetadata: { siteUrl: 'http://localhost' } },
  }),
}));

describe('TerminalPage', () => {
  it('renders correctly', async () => {
    let tree;
    act(() => {
      tree = renderer
        .create(
          <TerminalPage toolbarText="kaustubh@kaustubhk.com:~">
            <TerminalText isFolder={false}>Hi, Welcome to my website!</TerminalText>
            <br />
            <TerminalPrompt user={user} location={location} text="cat aboutme.txt" />
            <TerminalText isFolder={false}>
              Hi, I&#39;m Kaustubh Khavnekar, a Senior Platform Engineer working for Quantiphi.
              I work primarily on developing architectures capable of solving a given use case.
            </TerminalText>
            <TerminalText isFolder={false}>
              You can read my blogs at&nbsp;
              <StyledAnchor href="https://blogs.kaustubhk.com" target="_blank" rel="noopener noreferrer">https://blogs.kaustubhk.com</StyledAnchor>
            </TerminalText>
            <TerminalPrompt user={user} location={location} text="ls skills/" />
            <TerminalText isFolder>
              &#39;Design Applications&#39;
              &#39;Secure Applications&#39;
              &#39;Develop Applications&#39;
              &#39;Save Money&#39;
              &#39;Develop Automation&#39;
              &#39;Cloud Native&#39;
            </TerminalText>
            <TerminalPrompt user={user} location={location} text="ls -1 certifications/" />
            <TerminalText isFolder={false}>
              <StyledAnchor href="https://www.credly.com/badges/785576dd-bce0-4987-a631-3a2d2b74499c/public_url" target="_blank" rel="noopener noreferrer">
                AWS Certified DevOps Engineer - Professional
              </StyledAnchor>
            </TerminalText>
            <TerminalText isFolder={false}>
              <StyledAnchor href="https://www.credly.com/badges/03b7e0d8-3638-4294-9216-74442fc511cb/public_url" target="_blank" rel="noopener noreferrer">
                CKAD: Certified Kubernetes Application Developer
              </StyledAnchor>
            </TerminalText>
            <TerminalText isFolder={false}>
              <StyledAnchor href="https://www.credly.com/badges/d5c02aa2-a3ef-47d3-93cf-fa6f3753a992/public_url" target="_blank" rel="noopener noreferrer">
                HashiCorp Certified: Terrafom Associate
              </StyledAnchor>
            </TerminalText>
            <TerminalText isFolder={false}>
              <StyledAnchor href="https://www.credly.com/badges/210938c4-48c2-47f0-817c-8d784f07c099/public_url" target="_blank" rel="noopener noreferrer">
                AWS Certified Solutions Architect - Associate
              </StyledAnchor>
            </TerminalText>
            <TerminalText isFolder={false}>
              <StyledAnchor href="https://www.credly.com/badges/5ab7b3ff-3e67-489a-b04e-b864f898ac0e/public_url" target="_blank" rel="noopener noreferrer">
                AWS Certified Developer - Associate
              </StyledAnchor>
            </TerminalText>
            <TerminalPrompt user={user} location={location} text="cat design-credits.txt" />
            <TerminalText isFolder={false}><StyledAnchor href="https://codepen.io/codypearce/pen/JmOQXB" target="_blank" rel="noopener noreferrer">https://codepen.io/codypearce/pen/JmOQXB</StyledAnchor></TerminalText>
          </TerminalPage>,
        );
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
