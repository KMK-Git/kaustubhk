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
    </TerminalPage>
  );
}

export default IndexPage;
