const nearley = require('nearley');
const grammar = require("./generated/grammar.js");

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

// Parse something!
parser.feed("foo\n");

// parser.results is an array of possible parsings.
parser.results.map(console.log.bind(console));