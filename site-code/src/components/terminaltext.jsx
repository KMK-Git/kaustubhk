import React from 'react';
import PropTypes from 'prop-types';

export const terminalText = {
  color: '#dddddd',
  display: 'inline-block',
};

export const terminalTextFolder = {
  color: '#006fb8',
};

export default function TerminalText({ children, isFolder }) {
  if (isFolder) {
    return (
      <div style={terminalTextFolder}>{children}</div>
    );
  }
  return (
    <div style={terminalText}>{children}</div>
  );
}

TerminalText.propTypes = {
  children: PropTypes.node.isRequired,
  isFolder: PropTypes.bool.isRequired,
};
