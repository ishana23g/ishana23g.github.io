#!/usr/bin/env node
// Simple utility to generate content/index.json by scanning content/ for .md and .txt files.
// Usage: node scripts/generate_index.js

const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '..', 'content');
const outFile = path.join(contentDir, 'index.json');

function readFirstParagraph(text) {
  const lines = text.split(/\r?\n/).map(l => l.trim());
  let para = [];
  for (const line of lines) {
    if (line === '') {
      if (para.length) break;
      continue;
    }
    // skip headings and code fences for excerpt
    if (line.startsWith('#') || line.startsWith('```')) continue;
    para.push(line);
    if (para.join(' ').length > 140) break;
  }
  return para.join(' ').substring(0, 200);
}

function titleFromContent(text, filename) {
  const match = text.match(/^#\s+(.+)$/m);
  if (match) return match[1].trim();
  return path.basename(filename, path.extname(filename));
}

function parseFrontMatter(text){
  const m = text.match(/^---\s*([\s\S]*?)---/);
  if(!m) return {};
  const body = m[1];
  const out = {};
  body.split(/\r?\n/).forEach(line => {
    const idx = line.indexOf(':');
    if(idx>0){
      const key = line.slice(0,idx).trim();
      let val = line.slice(idx+1).trim();
      // strip quotes
      val = val.replace(/^\"|\"$/g,'');
      val = val.replace(/^\'|\'$/g,'');
      out[key] = val;
    }
  });
  return out;
}

function slugify(text){
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^a-z0-9\-]/g, '')    // Remove all non-alphanumeric chars except -
    .replace(/\-+/g,'-')            // Replace multiple - with single -
    .replace(/^\-|\-$/g,'');       // Trim - from start/end
}

function main(){
  if (!fs.existsSync(contentDir)){
    console.error('content/ directory not found.');
    process.exit(1);
  }

  const files = fs.readdirSync(contentDir).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return (ext === '.md' || ext === '.txt') && f.toLowerCase() !== 'index.json';
  });

  const items = files.map(f => {
    const full = path.join(contentDir, f);
    const text = fs.readFileSync(full, 'utf8');
    const fm = parseFrontMatter(text);
    const title = fm.title || titleFromContent(text, f);
    const date = fm.date || fs.statSync(full).mtime.toISOString().slice(0,10);
    const category = fm.category || fm.tags || 'uncategorized';
    const slug = fm.slug || slugify(title || path.basename(f, path.extname(f)));
    return {
      file: path.posix.join('content', f),
      title,
      date,
      category,
      slug,
      excerpt: readFirstParagraph(text)
    };
  });

  // sort by date desc
  items.sort((a,b)=> (b.date || '') .localeCompare(a.date || ''));

  fs.writeFileSync(outFile, JSON.stringify(items, null, 2) + '\n', 'utf8');
  console.log('Wrote', outFile);
}

main();
