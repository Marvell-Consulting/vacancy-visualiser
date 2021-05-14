import React from 'react';

const Index = ({ config }) => {
  return <html>
    <head>
      <link rel="stylesheet" href="https://use.typekit.net/won4sip.css" />
      <link rel="stylesheet" href="/public/css/index.css" />
      <title>Vacancy Visualiser</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="/public/js/config.js" />
      <script src="/public/js/index.js"></script>
    </body>
  </html>;
}

export default Index;
