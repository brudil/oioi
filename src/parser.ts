import { inspect } from 'util';
import { readFileSync } from 'fs';
import * as nearley from 'nearley';
import * as grammar from './generated/grammar';


export function parserFromPath(path: string) {
    const nParser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar), { keepHistory: true });

    try {
        const source = readFileSync(path, 'utf-8');
        console.log(source);
        nParser.feed(source);
        console.log(`${nParser.results.length} results`);
        console.log(inspect(nParser.results[0], false, null, true));
        return nParser.results[0];
    } catch(e) {
        console.log('parsing failed');
        console.log(e);
        throw new Error('source failed to parse');
    }
}
