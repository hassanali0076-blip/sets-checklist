import {readFileSync,writeFileSync} from 'node:fs';
import {validateBoard,toMarkdown} from '../lib/board.mjs';
const board=validateBoard(JSON.parse(readFileSync(new URL('../checklist.json',import.meta.url))));
const path=new URL('../CHECKLIST.md',import.meta.url), expected=toMarkdown(board);
if(process.argv.includes('--write')) writeFileSync(path,expected);
else if(readFileSync(path,'utf8')!==expected) throw Error('Run node scripts/check.mjs --write');
console.log('Valid public checklist: '+board.tasks.length+' records.');
