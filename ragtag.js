module.exports = (literals, ...expressions) => {
  let compiledTemplate = '';

  expressions.forEach((expression, i) => {
    let literal = literals[i];

    if (Array.isArray(expression)) {
      expression = expression.join('');
    }

    compiledTemplate += literal;
    compiledTemplate += expression;
  });

  compiledTemplate += literals[literals.length-1];

  return compiledTemplate;
}
