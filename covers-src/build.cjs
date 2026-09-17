const path=require('path');
const fs=require('fs');
const portfolio='/Users/mrbanks/Developer/brand-voice-site';
const esbuild=require(path.join(portfolio,'node_modules/esbuild'));
const postcss=require(path.join(portfolio,'node_modules/postcss'));
const out=path.resolve(__dirname,'../covers');
const tokens=[];
for(const file of ['src/app/globals.css','src/styles/layout-grid.css','src/styles/tokens-marketing.css','src/styles/tokens-app.css','src/styles/tokens-art.css','src/styles/tokens-system.css']){
 const tree=postcss.parse(fs.readFileSync(path.join(portfolio,file),'utf8'));
 tree.walkDecls(d=>{if(d.prop.startsWith('--') && (d.parent.selector?.includes(':root')||d.parent.name==='theme'))tokens.push(`${d.prop}:${d.value};`)});
}
fs.writeFileSync(path.join(out,'tokens.css'),`:root{${tokens.join('\n')}--font-source-sans-3:'Source Sans 3';--font-jetbrains-mono:'JetBrains Mono';--font-sans:'Source Sans 3',sans-serif;--font-mono:'JetBrains Mono',monospace;}`);
esbuild.buildSync({entryPoints:[path.resolve(__dirname,'entry.tsx')],bundle:true,outfile:path.join(out,'bundle.js'),minify:true,jsx:'automatic',platform:'browser',define:{'process.env.NODE_ENV':'"production"'},alias:{'@':path.join(portfolio,'src'),'react':path.join(portfolio,'node_modules/react'),'react-dom':path.join(portfolio,'node_modules/react-dom')},nodePaths:[path.join(portfolio,'node_modules')],loader:{'.module.css':'local-css','.woff2':'file','.ttf':'file'},logLevel:'warning'});
for(const name of ['credit-karma','peloton'])fs.writeFileSync(path.join(out,`${name}.html`),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${name} portfolio cover</title><link rel="stylesheet" href="tokens.css"><link rel="stylesheet" href="bundle.css"><style>@font-face{font-family:'Source Sans 3';src:url('../assets/fonts/source-sans-3.ttf')}@font-face{font-family:'JetBrains Mono';src:url('../assets/fonts/jetbrains-mono.ttf')}*{box-sizing:border-box}html,body,#root{width:100%;height:100%;margin:0;overflow:hidden}body{background:#0d0c0b;color:#f4efea;font-family:'Source Sans 3',sans-serif}button{font:inherit}video{max-width:100%}.absolute{position:absolute}.inset-0{inset:0}.h-full{height:100%}.w-full{width:100%}.object-cover{object-fit:cover}</style></head><body data-cover="${name}"><div id="root"></div><script src="bundle.js"></script></body></html>`);
