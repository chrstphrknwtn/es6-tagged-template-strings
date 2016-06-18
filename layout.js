locals = require('./locals');
ragtag = require('./ragtag');

header = require('./header');
footer = require('./footer');

module.exports = ragtag`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>${locals.title}</title>
  </head>
  <body>
    ${header}

    <blockquote>${locals.text}</blockquote>

    ${footer}
  </body>
</html>`
