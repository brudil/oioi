const moo = require("moo");

const lexer = moo.compile({
  WS:     /[ \t]+/,
  number:  /0|[1-9][0-9]*/,
  string:  /"(?:\\["\\]|[^\n"\\])*"/,
  NL:      { match: /\n/, lineBreaks: true },
  times:  /\*|x/,
  OP: ['*', '+', '/', '-'],
  Ident: /[a-zA-Z_]+/,
  LBRACE: '{',
  RBRACE: '}',
});

module.exports = lexer;
