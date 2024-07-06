import * as React from 'react';
import '@fontsource/ubuntu';
import '@fontsource/ubuntu-mono';
import TerminalPage from '../components/terminalpage';
import TerminalPrompt from '../components/terminalprompt';
import TerminalText from '../components/terminaltext';
import StyledAnchor from '../components/styledanchor';

function IndexPage() {
  const user = 'kaustubh@kaustubhk.com:';
  const location = '~';
  return (
    <TerminalPage toolbarText="kaustubh@kaustubhk.com:~">
      <TerminalText isFolder={false}>Hi, Welcome to my website!</TerminalText>
      <br />
      <TerminalPrompt user={user} location={location} text="cat aboutme.txt" />
      <TerminalText isFolder={false}>
        Hi, I&#39;m Kaustubh Khavnekar. I work as an Associate Architect for Platform at&nbsp;
        <StyledAnchor href="https://quantiphi.com/" target="_blank" rel="noopener noreferrer">Quantiphi</StyledAnchor>
        , an AI and data engineering company.
        I design and implement cloud based architectures, focusing on operational excellence,
        security, reliability, performance efficiency, and cost optimization.
      </TerminalText>
      <TerminalText isFolder={false}>
        You can read my blogs at&nbsp;
        <StyledAnchor href="https://blogs.kaustubhk.com" target="_blank" rel="noopener noreferrer">https://blogs.kaustubhk.com</StyledAnchor>
      </TerminalText>
      <TerminalText isFolder={false}>
        Contact me or find out more about the website&nbsp;
        <StyledAnchor href="https://github.com/KMK-Git/KMK-Git/blob/main/README.md" target="_blank" rel="noopener noreferrer">here</StyledAnchor>
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
        <StyledAnchor href="https://www.credly.com/badges/fb5b4fc7-87cb-4732-a81c-4c52821ad3bb/public_url" target="_blank" rel="noopener noreferrer">
          AWS Certified Solutions Architect - Professional
        </StyledAnchor>
      </TerminalText>
      <TerminalText isFolder={false}>
        <StyledAnchor href="https://www.credly.com/badges/785576dd-bce0-4987-a631-3a2d2b74499c/public_url" target="_blank" rel="noopener noreferrer">
          AWS Certified DevOps Engineer - Professional
        </StyledAnchor>
      </TerminalText>
      <TerminalText isFolder={false}>
        <StyledAnchor href="https://www.credly.com/badges/359da3c9-5404-4aae-9fa4-192b41bb5b03/public_url" target="_blank" rel="noopener noreferrer">
          AWS Certified Data Analytics - Specialty
        </StyledAnchor>
      </TerminalText>
      <TerminalPrompt user={user} location={location} text="cat design-credits.txt" />
      <TerminalText isFolder={false}><StyledAnchor href="https://codepen.io/codypearce/pen/JmOQXB" target="_blank" rel="noopener noreferrer">https://codepen.io/codypearce/pen/JmOQXB</StyledAnchor></TerminalText>
    </TerminalPage>
  );
}

export default IndexPage;
