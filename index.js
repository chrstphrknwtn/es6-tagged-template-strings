const fs = require('fs');
const layout = require('./layout')

fs.writeFile('index.html', layout, (err) => {
  if (err) throw err;
});
