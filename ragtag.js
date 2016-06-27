module.exports = (literals, ...expressions) => {
  let compiledTemplate = '';
  let literal;

  expressions.forEach((expression, i) => {
    literal = literals[i];

    if (Array.isArray(expression)) {
      expression = expression.join('');
    }

    compiledTemplate += literal;
    compiledTemplate += expression;
  });

  compiledTemplate += literals[literals.length-1];

  return compiledTemplate.trim();
}
