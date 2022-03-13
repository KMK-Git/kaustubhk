import React from 'react';
import renderer from 'react-test-renderer';
import TerminalPrompt from '../terminalprompt';

const { act } = renderer;
const user = 'kaustubh@kaustubhk.com:';
const location = '~';

describe('TerminalPage', () => {
  it('renders correctly', async () => {
    let tree;
    act(() => {
      tree = renderer
        .create(<TerminalPrompt user={user} location={location} text="cat aboutme.txt" />);
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
