import { readFileSync } from 'fs';
import * as nearley from 'nearley';
import * as grammar from './generated/grammar';


class AmbiguousGrammarError extends Error {}

export function parserFromPath(path: string) {
    const nParser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar), { keepHistory: true });

    try {
        const source = readFileSync(path, 'utf-8');
        nParser.feed(source);
        if (nParser.results.length !== 1) {
            throw new AmbiguousGrammarError();
        }
        return nParser.results[0];
    } catch(e) {
        console.log('parsing failed');
        console.log(e);
        throw new Error('source failed to parse');
    }
}
