import React from 'react';
import PropTypes from 'prop-types';

export const terminalPrompt = {
  marginTop: '2px',
  display: 'inline-block',
};

export const promptUser = {
  color: '#87d441',
  display: 'inline-block',
  wordWrap: 'break-word',
  whiteSpace: 'normal',
  wordBreak: 'break-all',
};

export const promptLocation = {
  color: '#6d85a9',
  display: 'inline-block',
  wordWrap: 'break-word',
  whiteSpace: 'normal',
  wordBreak: 'break-all',
};

export const promptDollar = {
  color: '#dddddd',
  display: 'inline-block',
  wordWrap: 'break-word',
  whiteSpace: 'normal',
  wordBreak: 'break-all',
};

export const promptText = {
  color: '#dddddd',
  display: 'inline-block',
  wordWrap: 'break-word',
  whiteSpace: 'normal',
  wordBreak: 'break-all',
};

export default function TerminalPrompt({ user, location, text }) {
  return (
    <span style={terminalPrompt}>
      <div style={promptUser}>{user}</div>
      <div style={promptLocation}>{location}</div>
      <div style={promptDollar}>$</div>
              &nbsp;
      <div style={promptText}>{text}</div>
    </span>
  );
}

TerminalPrompt.propTypes = {
  user: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
