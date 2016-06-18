locals = require('./locals');
ragtag = require('./ragtag');

module.exports = ragtag`<header>
  <h1>${locals.title}</h1>
  <p>${locals.description}</p>
  <ul>
    ${locals.headerLinks.map(link => ragtag`
      <li><a href="${link.href}">${link.title}</a></li>
    `)}
  </ul>
</header>`
