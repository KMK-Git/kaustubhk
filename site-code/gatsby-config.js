const path = require('path');
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules',
);

const siteGlobalMetadata = {
  siteUrl: 'https://kaustubhk.com',
  title: 'Kaustubh Khavnekar',
  description: 'A personal website for Kaustubh Khavnekar. The website is hosted using various AWS Services with a frontend made using React and Gatsby.',
  image: '/static/icon.png',
};

module.exports = {
  siteMetadata: siteGlobalMetadata,
  plugins: [{
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      policy: [{ userAgent: '*', allow: '/' }],
    },
  }, {
    resolve: 'gatsby-plugin-sitemap',
    options: {
      serialize: (page, { resolvePagePath }) => ({
        url: `${resolvePagePath(page)}`,
      }),
    },
  }, 'gatsby-plugin-emotion', 'gatsby-plugin-react-helmet', {
    resolve: 'gatsby-plugin-eslint',
    options: {
      // Gatsby required rules directory
      rulePaths: [gatsbyRequiredRules],
      // Default settings that may be ommitted or customized
      stages: ['develop'],
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      exclude: ['node_modules', 'bower_components', '.cache', 'public'],
      // Any additional eslint-webpack-plugin options below
      // ...
    },
  }],
};
