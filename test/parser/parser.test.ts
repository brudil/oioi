import { resolve, normalize } from 'path';
import glob from 'fast-glob';
import { parserFromPath } from '../../src/parser';

const entries = glob.sync<string>('test/parser/*.oi')

entries.forEach(entry => {
    test(entry, () => {
        const absPath = normalize(resolve(process.cwd(), entry));
        const ast = parserFromPath(absPath);
        expect(ast).toMatchSnapshot();
    });
});