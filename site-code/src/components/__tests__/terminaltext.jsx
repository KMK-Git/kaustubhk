import React from 'react';
import renderer from 'react-test-renderer';
import TerminalText from '../terminaltext';

const { act } = renderer;

describe('TerminalPage', () => {
  it('renders correctly', async () => {
    let tree;
    act(() => {
      tree = renderer
        .create(
          <TerminalText isFolder>
            &#39;Design Applications&#39;
            &#39;Secure Applications&#39;
            &#39;Develop Applications&#39;
            &#39;Save Money&#39;
            &#39;Develop Automation&#39;
            &#39;Cloud Native&#39;
          </TerminalText>,
        );
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
