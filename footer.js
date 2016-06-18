locals = require('./locals');
ragtag = require('./ragtag');

module.exports = ragtag`<footer>
  <h3>${locals.footerTitle}</h3>
  <ul>
    ${locals.footerLinks.map(link => ragtag`
      <li><a href="${link.href}">${link.title}</a></li>
    `)}
  </ul>
</footer>`
