const util = require('util')
const nearley = require('nearley');
const grammar = require("./generated/grammar.ts");

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar), { keepHistory: true });

try {
    parser.feed(
`use lodash as underscore\nuse react as React\n`);
    console.log(`${parser.results.length} results`);
    console.log(util.inspect(parser.results[0], false, null, true));
} catch(e) {
    console.log('parsing failed');
    console.log(e);
    console.log(parser.table);
}