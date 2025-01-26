var ue=Object.defineProperty;
var u=(t,s)=>()=>(t&&(s=t(t=0)),s);var y=(t,s)=>{for(var e in s)ue(t,e,{get:s[e],enumerable:!0})};var M={};y(M,{default:()=>$e});import{html as Ee}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";import{fromMarkdown as Le}from"https://cdn.jsdelivr.net/npm/mdast-util-from-markdown@2/+esm";import{gfmTable as Oe}from"https://cdn.jsdelivr.net/npm/micromark-extension-gfm-table@2/+esm";import{gfmTableFromMarkdown as _e}from"https://cdn.jsdelivr.net/npm/mdast-util-gfm-table@2/+esm";async function $e({weight:t=.5}){let s="q-markdown",e="Write documentation in Markdown",o=async i=>{let a=Le(i,{extensions:[Oe()],mdastExtensions:[_e()]}),r=(c,m,p={})=>c.type===m&&Object.entries(p).every(([d,f])=>c[d]===f)?!0:c.children?.some(d=>r(d,m,p))??!1,l=[{type:"heading",conditions:{depth:1},message:"Missing level 1 heading (# Title)"},{type:"heading",conditions:{depth:2},message:"Missing level 2 heading (## Subtitle)"},{type:"strong",message:"Missing bold text (**text**)"},{type:"emphasis",message:"Missing italic text (*text*)"},{type:"inlineCode",message:"Missing inline code (`code`)"},{type:"code",message:"Missing code block (```code```)"},{type:"list",conditions:{ordered:!1},message:"Missing unordered list (- item)"},{type:"list",conditions:{ordered:!0},message:"Missing ordered list (1. item)"},{type:"table",message:"Missing table (| Column | Column |)"},{type:"link",message:"Missing hyperlink ([text](url))"},{type:"image",message:"Missing image (![alt](url))"},{type:"blockquote",message:"Missing blockquote (> quote)"}];for(let{type:c,conditions:m,message:p}of l)if(!r(a,c,m))throw new Error(p);return!0},n=Ee`
    <div class="mb-3">
      <p>
        Write documentation in Markdown for an **imaginary** analysis of the number of steps you walked each day for a
        week, comparing over time and with friends. The Markdown must include:
      </p>
      <ul>
        <li><strong>Top-Level Heading</strong>: At least 1 heading at level 1, e.g., <code># Introduction</code></li>
        <li><strong>Subheadings</strong>: At least 1 heading at level 2, e.g., <code>## Methodology</code></li>
        <li><strong>Bold Text</strong>: At least 1 instance of bold text, e.g., <code>**important**</code></li>
        <li><strong>Italic Text</strong>: At least 1 instance of italic text, e.g., <code>*note*</code></li>
        <li><strong>Inline Code</strong>: At least 1 instance of inline code, e.g., <code>sample_code</code></li>
        <li>
          <strong>Code Block</strong>: At least 1 instance of a
          <a
            href="https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks"
            >fenced code block</a
          >, e.g.
          <pre><code class="language-python">
print("Hello World")
</code></pre>
        </li>
        <li><strong>Bulleted List</strong>: At least 1 instance of a bulleted list, e.g., <code>- Item</code></li>
        <li><strong>Numbered List</strong>: At least 1 instance of a numbered list, e.g., <code>1. Step One</code></li>
        <li><strong>Table</strong>: At least 1 instance of a table, e.g., <code>| Column A | Column B |</code></li>
        <li>
          <strong>Hyperlink</strong>: At least 1 instance of a hyperlink, e.g., <code>[Text](https://example.com)</code>
        </li>
        <li>
          <strong>Image</strong>: At least 1 instance of an image, e.g.,
          <code>![Alt Text](https://example.com/image.jpg)</code>
        </li>
        <li>
          <strong>Blockquote</strong>: At least 1 instance of a blockquote, e.g., <code>&gt; This is a quote</code>
        </li>
      </ul>
      <label for="${s}" class="form-label">Enter your Markdown here:</label>
      <textarea class="form-control" id="${s}" name="${s}" rows="10"></textarea>
    </div>
  `;return{id:s,title:e,weight:t,question:n,answer:o}}var U=u(()=>{});var D={};y(D,{default:()=>He});import{html as qe}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function He({weight:t=1}){let s="q-image-compression",e="Compress an image",o=await j("shapes.png"),n=B(o),i=async()=>{let r=document.getElementById(s);if(!r.files.length)throw new Error("No image uploaded");let l=r.files[0];if(l.size>1500)throw new Error("Image should be less than 1,500 bytes");let c=await j(URL.createObjectURL(l));if(o.width!==c.width||o.height!==c.height)throw new Error("Image dimensions do not match the original");try{let m=B(c);if(!n.every((p,d)=>p===m[d]))throw new Error("Image pixels do not match the original")}catch(m){throw new Error(`Could not process image. Is it a browser-supported image? ${m.message}`)}return!0},a=qe`
    <div class="mb-3">
      <p>Download the image below and compress it <em>losslessly</em> to an image that is less than 1,500 bytes.</p>
      <p><img src="shapes.png" /></p>
      <p>By losslessly, we mean that every pixel in the new image should be identical to the original image.</p>
      <label for="${s}" class="form-label">Upload your losslessly compressed image (less than 1,500 bytes)</label>
      <input class="form-control" id="${s}" name="${s}" type="file" accept="image/*" />
    </div>
  `;return{id:s,title:e,weight:t,question:a,answer:i}}var j,B,N=u(()=>{j=t=>new Promise((s,e)=>{let o=new Image;o.onload=()=>s(o),o.onerror=e,o.src=t}),B=t=>{let s=document.createElement("canvas"),e=s.getContext("2d");return s.width=t.width,s.height=t.height,e.drawImage(t,0,0),e.getImageData(0,0,s.width,s.height).data}});var F={};y(F,{default:()=>Me});import{html as Ge}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Me({user:t,weight:s=1}){let e="q-github-pages",o="Host your portfolio on GitHub Pages",n=async a=>{if(!new URL(a).hostname.includes("github.io"))throw new Error("URL should be hosted on github.io");let l=await fetch(`/proxy/${a}`).then(c=>c.text());if(!l.match(t.email))throw new Error(`${t.email} is not in the response: ${l.slice(0,1e3)}...`);return!0},i=Ge`
    <div class="mb-3">
      <p>
        Publish a page using <a href="https://pages.github.com/">GitHub Pages</a> that showcases your work. Ensure that
        your email address <strong><code>${t.email}</code></strong> is in the page's HTML.
      </p>
      <p>
        GitHub pages are served via CloudFlare which
        <a href="https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/">obfuscates emails</a>.
        So, wrap your email address inside a:
        <pre><code class="language-html">&lt;!--email_off--&gt;${t.email}&lt;!--/email_off--&gt;</code></pre>
      </p>
      <label for="${e}" class="form-label">
        What is the GitHub Pages URL? It might look like:
        <code>https://[USER].github.io/[REPO]/</code>
      </label>
      <input class="form-control" id="${e}" name="${e}" />
      <p class="text-muted">
        If a recent change that's not reflected, add <code>?v=1</code>, <code>?v=2</code> to the URL to bust the cache.
      </p>
    </div>
  `;return{id:e,title:o,weight:s,question:i,answer:n}}var W=u(()=>{});async function z(t){let e=new TextEncoder().encode(t),o=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(o)).map(a=>a.toString(16).padStart(2,"0")).join("")}var K=u(()=>{});var Y={};y(Y,{default:()=>je});import{html as Ue}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function je({user:t,weight:s=1}){let e="q-use-colab",o="Use Google Colab",n=new Date().getFullYear(),i=(await z(`${t.email} ${n}`)).slice(-5),a=Ue`
    <div class="mb-3">
      <p>
        Let's make sure you can access Google Colab. Run this program on Google Colab, allowing all required access to
        your email ID: <code>${t.email}</code>.
      </p>

      <pre><code class="language-python">import hashlib
import requests
from google.colab import auth
from oauth2client.client import GoogleCredentials

auth.authenticate_user()
creds = GoogleCredentials.get_application_default()
token = creds.get_access_token().access_token
response = requests.get(
  "https://www.googleapis.com/oauth2/v1/userinfo",
  params={"alt": "json"},
  headers={"Authorization": f"Bearer {token}"}
)
email = response.json()["email"]
hashlib.sha256(f"{email} {creds.token_expiry.year}".encode()).hexdigest()[-5:]
</code></pre>

      <label for="${e}" class="form-label">What is the result? (It should be a 5-character string)</label>
      <input class="form-control" id="${e}" name="${e}" />
    </div>
  `;return{id:e,title:o,weight:s,question:a,answer:i}}var V=u(()=>{K()});var J={};y(J,{default:()=>Ne});import{html as Be}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";import{default as De}from"https://cdn.jsdelivr.net/npm/seedrandom/+esm";async function Ne({user:t,weight:s=1}){let e="q-use-colab-image-library",o="Use an Image Library in Google Colab",n=De(`${t.email}#${e}`),i=Number((n()*.9+.05).toFixed(3)),a=await createImageBitmap(await fetch("./lenna.webp").then(d=>d.blob())),r=new OffscreenCanvas(a.width,a.height).getContext("2d");r.drawImage(a,0,0);let{data:l}=r.getImageData(0,0,a.width,a.height),c=0;for(let d=0;d<l.length;d+=4){let[f,h,b]=l.slice(d,d+3),w=Math.max(f,h,b)/255,A=Math.min(f,h,b)/255;(w+A)/2>+i&&c++}let m=c,p=Be`
    <div class="mb-3">
      <p>
        <a href="lenna.webp" download>Download this image</a>. Create a new
        <a href="https://colab.research.google.com/">Google Colab notebook</a> and run this code (after fixing a mistake
        in it) to calculate the number of pixels with a certain minimum brightness:
      </p>
      <pre><code class="language-python">import numpy as np
from PIL import Image
from google.colab import files
import colorsys

# There is a mistake in the line below. Fix it
image = Image.open(list(files.upload().keys)[0])

rgb = np.array(image) / 255.0
lightness = np.apply_along_axis(lambda x: colorsys.rgb_to_hls(*x)[1], 2, rgb)
light_pixels = np.sum(lightness > ${i})
print(f'Number of pixels with lightness > ${i}: {light_pixels}')</code></pre>

      <label for="${e}" class="form-label">What is the result? (It should be a number)</label>
      <input class="form-control" id="${e}" name="${e}" />
    </div>
  `;return{id:e,title:o,weight:s,question:p,answer:m}}var X=u(()=>{});function Z(t){return Array.from({length:Math.floor(t()*10)+1},()=>Q[Math.floor(t()*Q.length)]).join("")}var Q,ee=u(()=>{Q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"});function C(t,s){let e=URL.createObjectURL(t),o=document.createElement("a");o.href=e,o.download=s,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(e)}var P=u(()=>{});var te={};y(te,{default:()=>ze});import{html as Fe}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";import{default as We}from"https://cdn.jsdelivr.net/npm/seedrandom/+esm";async function ze({user:t,weight:s=1}){let e="q-vercel-python",o="Deploy a Python API to Vercel",n=We(`${t.email}#${e}`),i=Array.from({length:100},()=>({name:Z(n),marks:Math.floor(n()*100)})),a=new Blob([JSON.stringify(i)],{type:"application/json"}),r=async c=>{if(!new URL(c).hostname.includes("vercel.app"))throw new Error("URL should be hosted on Vercel");let p=i.sort(()=>.5-n()).slice(0,5),d=new URLSearchParams(p.map(({name:w})=>["name",w])),{marks:f}=await fetch(c+"?"+d).then(w=>w.json()),h=JSON.stringify(f),b=JSON.stringify(p.map(({marks:w})=>w));if(h!==b)throw new Error(`Expected ${b} but got ${h}`);return!0},l=Fe`
    <div class="mb-3">
      <p>
        Download this
        <button class="btn btn-sm btn-outline-primary" type="button" @click=${()=>C(a,`${e}.json`)}>
          ${e}.json
        </button>
        which has the marks of ${i.length} imaginary students.
      </p>
      <p>
        Create and deploy a Python app to <a href="https://vercel.com/">Vercel</a>. Expose an API so that when a request
        like <code>https://your-app.vercel.app/api?name=X&name=Y</code> is made, it returns a JSON response with the
        marks of the names X and Y like this:
      </p>
      <pre><code class="language-json">{ "marks": [10, 20] }</code></pre>
      <p>Make sure you enable <strong>CORS</strong> to allow GET requests from any origin.</p>
      <label for="${e}" class="form-label">
        What is the Vercel URL? It should look like:
        <code>https://your-app.vercel.app/api</code>
      </label>
      <input class="form-control" id="${e}" name="${e}" />
    </div>
  `;return{id:e,title:o,weight:s,question:l,answer:r}}var oe=u(()=>{ee();P()});var se={};y(se,{default:()=>Ye});import{html as Ke}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Ye({user:t,weight:s=1}){let e="q-github-action",o="Create a GitHub Action",n=async a=>{let r=a.match(/https:\/\/github\.com\/([^/]+)\/([^/]+)/);if(!r)throw new Error("URL does not match https://github.com/<user>/<repo>");let[,l,c]=r,m=`https://api.github.com/repos/${l}/${c}/actions/runs`,{workflow_runs:p}=await fetch(m).then(h=>h.json());if(!p?.length)throw new Error("No runs found");let{jobs_url:d}=p[0],{jobs:f}=await fetch(d).then(h=>h.json());for(let{steps:h}of f)for(let{name:b}of h)if(b.includes(t.email))return!0;throw new Error(`No step matches ${t.email}`)},i=Ke`
    <div class="mb-3">
      <p>
        Create a <a href="https://github.com/features/actions">GitHub action</a> on one of your GitHub repositories.
        Make sure one of the steps in the action has a name that contains your email address <code>${t.email}</code>.
        For example:
      </p>
      <pre><code class="language-yaml">
jobs:
  test:
    steps:
      - name: ${t.email}
        run: echo "Hello, world!"
      </code></pre>
      <p>Trigger the action and make sure it is the <strong>most recent action</strong>.</p>
      <p>
        <label for="${e}" class="form-label">
          What is your repository URL? It will look like:
          <code>https://github.com/USER/REPO</code>
        </label>
        <input class="form-control" id="${e}" name="${e}" />
      </p>
    </div>
  `;return{id:e,title:o,weight:s,question:i,answer:n}}var ae=u(()=>{});var ne={};y(ne,{default:()=>Je});import{html as Ve}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Je({user:t,weight:s=1}){let e="q-docker-hub-image",o="Push an image to Docker Hub",n=async a=>{let r=a.match(/https:\/\/hub\.docker\.com\/repository\/docker\/([^/]+)\/([^/]+)\//);if(!r)throw new Error("URL does not match https://hub.docker.com/repository/docker/<user>/<repo>/...");let l=`https://hub.docker.com/v2/namespaces/${r[1]}/repositories/${r[2]}/tags`,{results:c}=await fetch(`/proxy/${l}`).then(d=>d.json()),m=c.map(d=>d.name),p=t.email.split("@")[0];if(!m.includes(p))throw new Error(`${p} is not one of the tags in ${l}`);return!0},i=Ve`
    <div class="mb-3">
      <p>
        Create and push an image to <a href="https://hub.docker.com/">Docker Hub</a>. Add a tag named
        <code>${t.email.split("@")[0]}</code> to the image.
      </p>
      <label for="${e}" class="form-label">
        What is the Docker image URL? It should look like:
        <code>https://hub.docker.com/repository/docker/$USER/$REPO/general</code>
      </label>
      <input class="form-control" id="${e}" name="${e}" />
    </div>
  `;return{id:e,title:o,weight:s,question:i,answer:n}}var ie=u(()=>{});
  var re,le=u(()=>{re=(t,s,e)=>{let o=Array.from({length:t},(i,a)=>({studentId:a+1,class:`${Math.floor(e()*12)+1}${String.fromCharCode(65+Math.floor(e()*26))}`})),n=o.flatMap(i=>Array.from({length:Math.floor(e()*s)+1},(a,r)=>({studentId:i.studentId,subject:`Subject #${r+1}`})));return{students:o,subjects:n}}});var ce={};y(ce,{default:()=>Ze});import{html as Xe}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";import{default as Qe}from"https://cdn.jsdelivr.net/npm/seedrandom/+esm";async function Ze({user:t,weight:s=1}){let e="q-fastapi",o="Write a FastAPI server to serve data",n=Qe(`${t.email}#${e}`),{students:i}=re(2e3,400,n),a=`studentId,class
`+i.map(p=>`${p.studentId},${p.class}`).join(`
`),r=new Blob([a],{type:"text/csv"}),l=[...new Set(i.map(p=>p.class))],c=async p=>{if(!p)throw new Error("URL is required");let d=new URLSearchParams,f=l.sort(()=>.5-Math.random()).slice(0,4);f.forEach(k=>d.append("class",k));let h=await fetch(`${p}?${d.toString()}`).then(k=>k.json()),b=JSON.stringify(h.students),w=i.filter(k=>f.includes(k.class)),A=JSON.stringify(w);if(b!==A)throw new Error(`Response ${b} does not match expected ${A}`);return!0},m=Xe`
    <div class="mb-3">
      <p>
        Download
        <button class="btn btn-sm btn-outline-primary" type="button" @click=${()=>C(r,`${e}.csv`)}>
          ${e}.csv</button
        >. This file has 2-columns:
        <ol>
          <li>studentId: A unique identifier for each student, e.g. 1, 2, 3, ...</li>
          <li>class: The class (including section) of the student, e.g. 1A, 1B, ... 12A, 12B, ... 12Z</li>
        </ol>
      </p>
      <p>
        Write a FastAPI server that serves this data. For example, <code>/api</code> should return all students data
        (in the same row and column order as the CSV file) as a JSON like this:
      </p>
      <pre><code class="language-json">{
  "students": [
    {
      "studentId": 1,
      "class": "1A"
    },
    {
      "studentId": 2,
      "class": "1B"
    }, ...
  ]
}</code></pre>
      <p>
        If the URL has a query parameter <code>class</code>, it should return only students in those classes. For example,
        <code>/api?class=1A</code> should return only students in class 1A.
        <code>/api?class=1A&class=1B</code> should return only students in class 1A and 1B.
        There may be any number of classes specified.
        Return students in the same order as they appear in the CSV file (not the order of the classes).
      </p>
      <p>Make sure you enable <strong>CORS</strong> to allow GET requests from any origin.</p>
      <label for="${e}" class="form-label">
        What is the API URL endpoint for FastAPI? It might look like:
        <code>http://127.0.0.1:8000/api</code>
      </label>
      <input class="form-control" id="${e}" name="${e}" type="url" required/>
      <p class="text-muted">
        We'll check by sending a request to this URL with <code>?class=...</code> added
        and check if the response matches the data.
      </p>
    </div>
  `;return{id:e,title:o,weight:s,question:m,answer:c}}var pe=u(()=>{le();P()});var de={};y(de,{default:()=>tt});import{html as et}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function tt({user:t,weight:s=1}){let e="q-llamafile",o="Run a local LLM with Llamafile",n=async a=>{if(!a)throw new Error("URL is required");a=a.replace(/\/+$/,"");let r=await fetch(`/proxy/${a}/v1/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":!0},body:JSON.stringify({messages:[{role:"user",content:`Split as JSON {user, domain}: ${t.email}`}]})}).then(d=>d.text()),l;try{l=JSON.parse(r)}catch{throw new Error("Response is not valid JSON: "+r)}let c=r.slice(0,1e3);if(l?.model!=="unknown")throw new Error(`Response does not have a valid Llamafile model: ${c}`);if(l?.object!=="chat.completion")throw new Error(`Response is not a valid OpenAI response object: ${c}`);if(+new Date/1e3-l.created>10)throw new Error(`Response is too old: ${c}`);if(!l?.choices?.[0]?.message?.content)throw new Error(`Response is not a valid OpenAI response: ${r}`);return!0},i=et`
    <div class="mb-3">
      <p>
        Download <a href="https://github.com/Mozilla-Ocho/llamafile">Llamafile</a>. Run the
        <a
          href="https://huggingface.co/Mozilla/Llama-3.2-1B-Instruct-llamafile/blob/main/Llama-3.2-1B-Instruct.Q6_K.llamafile?download=true"
          ><code>Llama-3.2-1B-Instruct.Q6_K.llamafile</code></a
        >
        model with it.
      </p>
      <p>Create a tunnel to the Llamafile server using <a href="https://ngrok.com/">ngrok</a>.</p>

      <label for="${e}" class="form-label">
        What is the ngrok URL? It might look like:
        <code>https://[random].ngrok-free.app/</code>
      </label>
      <input class="form-control" id="${e}" name="${e}" type="url" required />
    </div>
  `;return{id:e,title:o,weight:s,question:i,answer:n}}var me=u(()=>{});import{html as v,render as he}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";function I(t,s){he([v`<h1 class="display-6">Questions</h1>`,v`<ol class="mt-3">
        ${t.map(({id:e,title:o,weight:n})=>v`<li><a href="#h${e}">${o}</a> (${n} ${n==1?"mark":"marks"})</li>`)}
      </ol>`,...t.map(({id:e,title:o,weight:n,question:i,help:a},r)=>(a&&!Array.isArray(a)&&(a=[a]),v`
          <div class="card my-5" data-question="${e}" id="h${e}">
            <div class="card-header">
              <span class="badge text-bg-primary me-2">${r+1}</span>
              ${o} (${n} ${n==1?"mark":"marks"})
            </div>
            ${a?a.map(l=>v`<div class="card-body border-bottom">${l}</div>`):""}
            <div class="card-body">${i}</div>
          </div>
        `))],s)}import{unsafeHTML as ge}from"https://cdn.jsdelivr.net/npm/lit-html@3/directives/unsafe-html.js";import{Marked as fe}from"https://cdn.jsdelivr.net/npm/marked@13/+esm";var be=new fe({renderer:{image(t,s,e){return`<img src="${t}" alt="${e}" ${s?`title="${s}"`:""} class="img-fluid">`},link(t,s,e){return`<a href="${t}" ${s?`title="${s}"`:""} target="_blank" rel="noopener noreferrer">${e}</a>`}}}),g=t=>ge(be.parse(t));var x=`## Documentation: Markdown

Markdown is a lightweight markup language for creating formatted text using a plain-text editor. It's the standard for documentation in software projects and data science notebooks.

Watch this introduction to Markdown (19 min):

[![Markdown Crash Course (19 min)](https://i.ytimg.com/vi_webp/HUBNt18RFbo/sddefault.webp)](https://youtu.be/HUBNt18RFbo)

Common Markdown syntax:

\`\`\`\`
# Heading 1
## Heading 2

**bold** and *italic*

- Bullet point
- Another point
  - Nested point

1. Numbered list
2. Second item

[Link text](https://url.com)
![Image alt](image.jpg)

| Column 1 | Column 2 |
|----------|----------|
| Cell 1   | Cell 2   |

\`\`\`python
# Code block
def hello():
    print("Hello")
\`\`\`

> Blockquote
\`\`\`\`

Tools for working with Markdown:

- [markdown2](https://pypi.org/project/markdown2/): Python library to convert Markdown to HTML
- [markdownlint](https://github.com/DavidAnson/markdownlint): Linting
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one): VS Code extension
- [pandoc](https://pandoc.org/): Convert between formats
`;var S=`## Images: Compression

Image compression is essential when deploying apps. Often, pages have dozens of images. Image analysis runs over thousands of images. The cost of storage and bandwidth can grow over time.

Here are things you should know when you're compressing images:

- **Image dimensions** are the width and height of the image in pixels. This impacts image size a lot
- **Lossless** compression (PNG, WebP) preserves exact data
- **Lossy** compression (JPEG, WebP) removes some data for smaller files
- **Vector** formats (SVG) scale without quality loss
- **WebP** is the modern standard, supporting both lossy and lossless

Here's a rule of thumb you can use as of 2025.

- Use SVG if you can (i.e. if it's vector graphics or you can convert it to one)
- Else, reduce the image to as small as you can, and save as lossy WebP

Common operations with Python:

\`\`\`python
from pathlib import Path
from PIL import Image
import io

async def compress_image(input_path: Path, output_path: Path, quality: int = 85) -> None:
    """Compress an image while maintaining reasonable quality."""
    with Image.open(input_path) as img:
        # Convert RGBA to RGB if needed
        if img.mode == 'RGBA':
            img = img.convert('RGB')
        # Optimize for web
        img.save(output_path, 'WEBP', quality=quality, optimize=True)

# Batch process images
paths = Path('images').glob('*.jpg')
for p in paths:
    await compress_image(p, p.with_suffix('.webp'))
\`\`\`

Command line tools include [cwebp](https://developers.google.com/speed/webp/docs/cwebp), [pngquant](https://pngquant.org/), [jpegoptim](https://github.com/tjko/jpegoptim), and [ImageMagick](https://imagemagick.org/).

\`\`\`bash
# Convert to WebP
cwebp -q 85 input.png -o output.webp

# Optimize PNG
pngquant --quality=65-80 image.png

# Optimize JPEG
jpegoptim --strip-all --all-progressive --max=85 image.jpg

# Convert and resize
convert input.jpg -resize 800x600 output.jpg

# Batch convert
mogrify -format webp -quality 85 *.jpg
\`\`\`

Watch this video on modern image formats and optimization (15 min):

[![Modern Image Optimization (15 min)](https://i.ytimg.com/vi_webp/F1kYBnY6mwg/sddefault.webp)](https://youtu.be/F1kYBnY6mwg)

Tools for image optimization:

- [squoosh.app](https://squoosh.app/): Browser-based compression
- [ImageOptim](https://imageoptim.com/): GUI tool for Mac
- [sharp](https://sharp.pixelplumbing.com/): Node.js image processing
- [Pillow](https://python-pillow.org/): Python imaging library
`;var T=`## Notebooks: Google Colab

[Google Colab](https://colab.research.google.com/) is a free, cloud-based Jupyter notebook environment that's become indispensable for data scientists and ML practitioners. It's particularly valuable because it provides free access to GPUs and TPUs, and for easy sharing of code and execution results.

While Colab is excellent for prototyping and learning, its free tier has limitations - notebooks time out after 12 hours, and GPU access can be inconsistent.

Learn how to mount Google Drive for persistent storage, manage dependencies with \`!pip install\` commands, as these are common pain points when getting started.

[![Get started with Google Colaboratory (3 min)](https://i.ytimg.com/vi_webp/inN8seMm7UI/sddefault.webp)](https://youtu.be/inN8seMm7UI)

- [Google Colab features you may have missed](https://youtu.be/rNgswRZ2C1Y)
- [How to mount Google Drive to Google Colab](https://youtu.be/8HvugBq5NKg)
- [How to take advantage of GPUs and TPUs for your ML project](https://youtu.be/tCYSce6l8gA)
`;var R=`## Containers: Docker, Podman

[Docker](https://www.docker.com/) and [Podman](https://podman.io/) are containerization tools that package your application and its dependencies into a standardized unit for software development and deployment.

Docker is the industry standard. Podman is compatible with Docker and has better security (and a slightly more open license). In this course, we recommend Podman but Docker works in the same way.

Initialize the container engine:

\`\`\`bash
podman machine init
podman machine start
\`\`\`

Common Operations. (You can use \`docker\` instead of \`podman\` in the same way.)

\`\`\`bash
# Pull an image
podman pull python:3.11-slim

# Run a container
podman run -it python:3.11-slim

# List containers
podman ps -a

# Stop container
podman stop container_id

# Scan image for vulnerabilities
podman scan myapp:latest

# Remove container
podman rm container_id

# Remove all stopped containers
podman container prune
\`\`\`

You can create a \`Dockerfile\` to build a container image. Here's a sample \`Dockerfile\` that converts a Python script into a container image.

\`\`\`dockerfile
FROM python:3.11-slim
# Set working directory
WORKDIR /app
# Typically, you would use \`COPY . .\` to copy files from the host machine,
# but here we're just using a simple script.
RUN echo 'print("Hello, world!")' > app.py
# Run the script
CMD ["python", "app.py"]
\`\`\`

To build, run, and deploy the container, run these commands:

\`\`\`bash
# Create an account on https://hub.docker.com/ and then login
podman login docker.io

# Build and run the container
podman build -t py-hello .
podman run -it py-hello

# Push the container to Docker Hub. Replace $DOCKER_HUB_USERNAME with your Docker Hub username.
podman push py-hello:latest docker.io/$DOCKER_HUB_USERNAME/py-hello

# Push adding a specific tag, e.g. dev
TAG=dev podman push py-hello docker.io/$DOCKER_HUB_USERNAME/py-hello:$TAG
\`\`\`

Tools:

- [Dive](https://github.com/wagoodman/dive): Explore image layers
- [Skopeo](https://github.com/containers/skopeo): Work with container images
- [Trivy](https://github.com/aquasecurity/trivy): Security scanner

[![Podman Tutorial Zero to Hero | Full 1 Hour Course](https://i.ytimg.com/vi_webp/YXfA5O5Mr18/sddefault.webp)](https://youtu.be/YXfA5O5Mr18)

[![Learn Docker in 7 Easy Steps - Full Beginner's Tutorial](https://i.ytimg.com/vi_webp/gAkwW2tuIqE/sddefault.webp)](https://youtu.be/gAkwW2tuIqE)

- Optional: For Windows, see [WSL 2 with Docker getting started](https://youtu.be/5RQbdMn04Oc)
`;var E=`## Tunneling: ngrok

[Ngrok](https://ngrok.com/) is a tool that creates secure tunnels to your localhost, making your local development server accessible to the internet. It's essential for testing webhooks, sharing work in progress, or debugging applications in production-like environments.

Run the command \`uvx ngrok http 8000\` to create a tunnel to your local server on port 8000. This generates a public URL that you can share with others.

To get started, log into \`ngrok.com\` and [get an authtoken from the dashboard](https://dashboard.ngrok.com/get-started/your-authtoken). Copy it. Then run:

\`\`\`bash
ngrok config add-authtoken $YOUR_AUTHTOKEN
\`\`\`

Now you can forward any local port to the internet. For example:

\`\`\`bash
# Start a local server on port 8000
uv run -m http.server 8000

# Start HTTP tunnel
uvx ngrok http 8000
\`\`\`

[![ngrok in 60 seconds](https://i.ytimg.com/vi_webp/dfMdLGZLXSg/sddefault.webp)](https://youtu.be/dfMdLGZLXSg)
`;var L=`## REST APIs

REST (Representational State Transfer) APIs are the standard way to build web services that allow different systems to communicate over HTTP. They use standard HTTP methods and JSON for data exchange.

Watch this comprehensive introduction to REST APIs (52 min):

[![REST API Crash Course - Introduction + Full Python API Tutorial (52)](https://i.ytimg.com/vi_webp/qbLc5a9jdXo/sddefault.webp)](https://youtu.be/qbLc5a9jdXo)

Key Concepts:

1. **HTTP Methods**
   - \`GET\`: Retrieve data
   - \`POST\`: Create new data
   - \`PUT/PATCH\`: Update existing data
   - \`DELETE\`: Remove data
2. **Status Codes**
   - \`2xx\`: Success (200 OK, 201 Created)
   - \`4xx\`: Client errors (400 Bad Request, 404 Not Found)
   - \`5xx\`: Server errors (500 Internal Server Error)

Here's a minimal REST API using FastAPI. Run this \`server.py\` script via \`uv run server.py\`:

\`\`\`python
# /// script
# requires-python = ">=3.13"
# dependencies = [
#     "fastapi",
#     "uvicorn",
# ]
# ///
from fastapi import FastAPI, HTTPException
from typing import Dict, List

app = FastAPI()

# Create a list of items that will act like a database
items: List[Dict[str, float | int | str]] = []

# Create a GET endpoint that returns all items
@app.get("/items")
async def get_items() -> List[Dict[str, float | int | str]]:
    return items

# Create a GET endpoint that returns a specific item by ID
@app.get("/items/{item_id}")
async def get_item(item_id: int) -> Dict[str, float | int | str]:
    if item := next((i for i in items if i["id"] == item_id), None):
        return item
    raise HTTPException(status_code=404, detail="Item not found")

# Create a POST endpoint that creates a new item
@app.post("/items")
async def create_item(item: Dict[str, float | str]) -> Dict[str, float | int | str]:
    new_item = {"id": len(items) + 1, "name": item["name"], "price": float(item["price"])}
    items.append(new_item)
    return new_item

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
\`\`\`

Test the API with curl:

\`\`\`bash
# Get all items
curl http://localhost:8000/items

# Create an item
curl -X POST http://localhost:8000/items \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Book", "price": 29.99}'

# Get specific item
curl http://localhost:8000/items/1
\`\`\`

Best Practices:

1. **Use Nouns for Resources**
   - Good: \`/users\`, \`/posts\`
   - Bad: \`/getUsers\`, \`/createPost\`
2. **Version Your API**
   \`\`\`
   /api/v1/users
   /api/v2/users
   \`\`\`
3. **Handle Errors Consistently**
   \`\`\`python
   {
     "error": "Not Found",
     "message": "User 123 not found",
     "status_code": 404
   }
   \`\`\`
4. **Use Query Parameters for Filtering**
   \`\`\`
   /api/posts?status=published&category=tech
   \`\`\`
5. **Implement Pagination**
   \`\`\`
   /api/posts?page=2&limit=10
   \`\`\`

Tools:

- [Postman](https://www.postman.com/): API testing and documentation
- [Swagger/OpenAPI](https://swagger.io/): API documentation
- [HTTPie](https://httpie.io/): Modern command-line HTTP client
- [JSON Schema](https://json-schema.org/): API request/response validation

Learn more about REST APIs:

- [REST API Design Best Practices](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)
- [Microsoft REST API Guidelines](https://github.com/microsoft/api-guidelines)
- [Google API Design Guide](https://cloud.google.com/apis/design)
`;var O=`## CORS: Cross-Origin Resource Sharing

CORS (Cross-Origin Resource Sharing) is a security mechanism that controls how web browsers handle requests between different origins (domains, protocols, or ports). Data scientists need CORS for APIs serving data or analysis to a browser on a different domain.

Watch this practical explanation of CORS (3 min):

[![CORS in 100 Seconds](https://i.ytimg.com/vi_webp/4KHiSt0oLJ0/sddefault.webp)](https://youtu.be/4KHiSt0oLJ0)

Key CORS concepts:

- **Same-Origin Policy**: Browsers block requests between different origins by default
- **CORS Headers**: Server responses must include specific headers to allow cross-origin requests
- **Preflight Requests**: Browsers send OPTIONS requests to check if the actual request is allowed
- **Credentials**: Special handling required for requests with cookies or authentication

If you're exposing your API with a GET request publicly, the only thing you need to do is set the HTTP header \`Access-Control-Allow-Origin: *\`.

Here are other common CORS headers:

\`\`\`http
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
\`\`\`

To implement CORS in FastAPI, use the [\`CORSMiddleware\` middleware](https://fastapi.tiangolo.com/tutorial/cors/):

\`\`\`python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(CORSMiddleware, allow_origins=["*"]) # Allow GET requests from all origins
# Or, provide more granular control:
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://example.com"],  # Allow a specific domain
    allow_credentials=True,  # Allow cookies
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # Allow specific methods
    allow_headers=["*"],  # Allow all headers
)
\`\`\`

Testing CORS with JavaScript:

\`\`\`javascript
// Simple request
const response = await fetch("https://api.example.com/data", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
});

// Request with credentials
const response = await fetch("https://api.example.com/data", {
  credentials: "include",
  headers: { "Content-Type": "application/json" },
});
\`\`\`

Useful CORS debugging tools:

- [CORS Checker](https://cors-test.codehappy.dev/): Test CORS configurations
- Browser DevTools Network tab: Inspect CORS headers and preflight requests
- [cors-anywhere](https://github.com/Rob--W/cors-anywhere): CORS proxy for development

Common CORS errors and solutions:

- \`No 'Access-Control-Allow-Origin' header\`: Configure server to send proper CORS headers
- \`Request header field not allowed\`: Add required headers to \`Access-Control-Allow-Headers\`
- \`Credentials flag\`: Set both \`credentials: 'include'\` and \`Access-Control-Allow-Credentials: true\`
- \`Wild card error\`: Cannot use \`*\` with credentials; specify exact origins
`;var _=`## Web Framework: FastAPI

[FastAPI](https://fastapi.tiangolo.com/) is a modern Python web framework for building APIs with automatic interactive documentation. It's fast, easy to use, and designed for building production-ready REST APIs.

Here's a minimal FastAPI app, \`app.py\`:

\`\`\`python
# /// script
# requires-python = ">=3.11"
# dependencies = [
#   "fastapi",
#   "uvicorn",
# ]
# ///

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
\`\`\`

Run this with \`uv run app.py\`.

1. **Handle errors by raising HTTPException**

   \`\`\`python
   from fastapi import HTTPException

   async def get_item(item_id: int):
       if not valid_item(item_id):
           raise HTTPException(
               status_code=404,
               detail=f"Item {item_id} not found"
           )
   \`\`\`

2. **Use middleware for logging**

   \`\`\`python
   from fastapi import Request
   import time

   @app.middleware("http")
   async def add_timing(request: Request, call_next):
       start = time.time()
       response = await call_next(request)
       response.headers["X-Process-Time"] = str(time.time() - start)
       return response
   \`\`\`

Tools:

- [FastAPI CLI](https://fastapi.tiangolo.com/tutorial/fastapi-cli/): Project scaffolding
- [Pydantic](https://pydantic-docs.helpmanual.io/): Data validation
- [SQLModel](https://sqlmodel.tiangolo.com/): SQL databases
- [FastAPI Users](https://fastapi-users.github.io/): Authentication

Watch this FastAPI Course for Beginners (64 min):

[![FastAPI Course for Beginners (64 min)](https://i.ytimg.com/vi_webp/tLKKmouUams/sddefault.webp)](https://youtu.be/tLKKmouUams)
`;var $=`## CI/CD: GitHub Actions

[GitHub Actions](https://github.com/features/actions) is a powerful automation platform built into GitHub. It helps automate your development workflow - running tests, deploying applications, updating datasets, retraining models, etc.

- Understand the basics of [YAML configuration files](https://docs.github.com/en/actions/writing-workflows/quickstart)
- Explore the [pre-built actions from the marketplace](https://github.com/marketplace?type=actions)
- How to [handle secrets securely](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions)
- [Triggering a workflow](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/triggering-a-workflow)
- Staying within the [free tier limits](https://docs.github.com/en/billing/managing-billing-for-your-products/managing-billing-for-github-actions/about-billing-for-github-actions)
- [Caching dependencies to speed up workflows](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/caching-dependencies-to-speed-up-workflows)

Here is a sample \`.github/workflows/iss-location.yml\` that runs daily, appends the International Space Station location data into \`iss-location.json\`, and commits it to the repository.

\`\`\`yaml
name: Log ISS Location Data Daily

on:
  schedule:
    # Runs at 12:00 UTC (noon) every day
    - cron: "0 12 * * *"
  workflow_dispatch: # Allows manual triggering

jobs:
  collect-iss-data:
    runs-on: ubuntu-latest
    permissions:
      contents: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Install uv
        uses: astral-sh/setup-uv@v5

      - name: Fetch ISS location data
        run: | # python
          uv run --with requests python << 'EOF'
          import requests

          data = requests.get('http://api.open-notify.org/iss-now.json').text
          with open('iss-location.jsonl', 'a') as f:
              f.write(data + '\\n')
          'EOF'

      - name: Commit and push changes
        run: | # shell
          git config --local user.email "github-actions[bot]@users.noreply.github.com"
          git config --local user.name "github-actions[bot]"
          git add iss-location.jsonl
          git commit -m "Update ISS position data [skip ci]" || exit 0
          git push
\`\`\`

Tools:

- [GitHub CLI](https://cli.github.com/): Manage workflows from terminal
- [Super-Linter](https://github.com/github/super-linter): Validate code style
- [Release Drafter](https://github.com/release-drafter/release-drafter): Automate releases
- [act](https://github.com/nektos/act): Run actions locally

[![Github Actions CI/CD - Everything you need to know to get started](https://i.ytimg.com/vi_webp/mFFXuXjVgkU/sddefault.webp)](https://youtu.be/mFFXuXjVgkU)

- [How to handle secrets in GitHub Actions](https://youtu.be/1tD7km5jK70)
- [How to run Github Actions on a Schedule](https://youtu.be/eJG86J200nM)
`;var q=`## Serverless hosting: Vercel

<!--

Why Vercel? I evaluated from https://survey.stackoverflow.co/2024/technology#2-cloud-platforms

- AWS, Azure, Google Cloud are too complex for beginners
- Cloudflare (next most popular, widely admired) Python support is in beta
- Hetzner (most admired), Supabase (next most admired) do not have a serverless platform
- Fly.io (next most admired) does not have a free tier
- Heroku (used in previous terms) is the least admired
- Vercel is both popular, admired, growing, has a free plan, and a simple API

-->

Serverless platforms let you rent a single function instead of an entire machine. They're perfect for small web tools that _don't need to run all the time_. Here are some common real-life uses:

- A contact form that emails you when someone wants to hire you (runs for 2-3 seconds, a few times per day)
- A tool that converts uploaded photos to black and white (runs for 5-10 seconds when someone uploads a photo)
- A chatbot that answers basic questions about your business hours (runs for 1-2 seconds per question)
- A newsletter sign-up that adds emails to your mailing list (runs for 1 second per sign-up)
- A webhook that posts your Etsy sales to Discord (runs for 1 second whenever you make a sale)

You only pay when someone uses your tool, and the platform automatically handles busy periods. For example, if 100 people fill out your contact form at once, the platform creates 100 temporary copies of your code to handle them all. When they're done, these copies disappear. It's cheaper than running a full-time server because you're not paying for the time when no one is using your tool - most tools are idle 95% of the time!

Rather than writing a full program, serverless platforms let you write functions. These functions are called via HTTP requests. They run in a cloud environment and are scaled up and down automatically. But this means you write programs in a different style. For example:

- You can't \`pip install\` packages - you have to use \`requirements.txt\`
- You can't read or write files from the file system - you can only use APIs.
- You can't run commands (e.g. \`subprocess.run()\`)

[Vercel](https://vercel.com/) is a cloud platform optimized for frontend frameworks and serverless functions. Vercel is tightly integrated with GitHub. Pushing to your repository automatically triggers new deployments.

Here's a [quickstart](https://vercel.com/docs/functions/runtimes/python). [Sign-up with Vercel](https://vercel.com/signup). Create an empty \`git\` repo with this \`api/index.py\` file.

\`\`\`python
# api/index.py
import json
from http.server import BaseHTTPRequestHandler

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','application/json')
        self.end_headers()
        self.wfile.write(json.dumps({"message": "Hello!"}).encode('utf-8'))
        return
\`\`\`

On the command line, run:

- \`npx vercel\` to deploy a test version
- \`npx vercel --prod\` to deploy to production

Best Practices:

1. **Project Structure**

   \`\`\`text
   my-app/
   \u251C\u2500\u2500 api/index.py   # Serverless functions
   \u251C\u2500\u2500 .env           # OPTIONAL: Environment variables
   \u251C\u2500\u2500 public/        # OPTIONAL: Static assets
   \u2514\u2500\u2500 vercel.json    # OPTIONAL: Configuration
   \`\`\`

2. **Environment Variables**. Use \`npx vercel env add\` to add environment variables. In your code, use \`os.environ.get('SECRET_KEY')\` to access them.

[![Vercel Product Walkthrough](https://i.ytimg.com/vi_webp/sPmat30SE4k/sddefault.webp)](https://youtu.be/sPmat30SE4k)
`;var H=`## Static hosting: GitHub Pages

[GitHub Pages](https://pages.github.com/) is a free hosting service that turns your GitHub repository directly into a whenever you push it. This is useful for sharing analysis results, data science portfolios, project documentation, and more.

Common Operations:

\`\`\`bash
# Create a new GitHub repo
mkdir my-site
cd my-site
git init

# Add your static content
echo "<h1>My Site</h1>" > index.html

# Push to GitHub
git add .
git commit -m "feat(pages): initial commit"
git push origin main

# Enable GitHub Pages from the main branch on the repo settings page
\`\`\`

Best Practices:

1. **Keep it small**
   - [Optimize images](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Multimedia). Prefer SVG over WEBP over 8-bit PNG.
   - [Preload](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload) critical assets like stylesheets
   - Avoid committing large files like datasets, videos, etc. directly. Explore [Git LFS](https://git-lfs.github.com/) instead.

Tools:

- [GitHub Desktop](https://desktop.github.com/): GUI for Git operations
- [GitHub CLI](https://cli.github.com/): Command line interface
- [GitHub Actions](https://github.com/features/actions): Automation

[![Host a website using GitHub Pages](https://i.ytimg.com/vi_webp/WqOXxoGSpbs/sddefault.webp)](https://youtube.com/shorts/WqOXxoGSpbs)

[![Deploy your first GitHub Pages Website](https://i.ytimg.com/vi_webp/sT_zXIX3ZA0/sddefault.webp)](https://youtu.be/sT_zXIX3ZA0)
`;var G=`## Local LLMs: Llamafile

You would have heard of Large Language Models (LLMs) like GPT-4, Claude, and Llama. Some of these models are available for free, but most of them are not.

An easy way to run LLMs locally is Mozilla's [Llamafile](https://github.com/Mozilla-Ocho/llamafile). It's a single executable file that works on Windows, Mac, and Linux. No installation or configuration needed - just download and run.

Watch this Llamafile Tutorial (6 min):

[![Llamafile: Local LLMs Made Easy](https://img.youtube.com/vi/d1Fnfvat6nM/0.jpg)](https://youtu.be/d1Fnfvat6nM)

Here's how to get started

1. [Download \`Llama-3.2-1B-Instruct.Q6_K.llamafile\` (1.11 GB)](https://huggingface.co/Mozilla/Llama-3.2-1B-Instruct-llamafile/blob/main/Llama-3.2-1B-Instruct.Q6_K.llamafile?download=true).
2. From the command prompt or terminal, run \`Llama-3.2-1B-Instruct.Q6_K.llamafile\`.
3. Optional: For GPU acceleration, use \`Llama-3.2-1B-Instruct.Q6_K.llamafile --n-gpu-layers 35\`. (Increase or decrease the number of layers based on your GPU VRAM.)

You might see a message like this:

\`\`\`text
\u2588\u2588\u2557     \u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2557     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557
\u2588\u2588\u2551     \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2551\u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D
\u2588\u2588\u2551     \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551\u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2557
\u2588\u2588\u2551     \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551\u255A\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2551\u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u255D
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551 \u255A\u2550\u255D \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551     \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D     \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D     \u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D
software: llamafile 0.8.17
model:    Llama-3.2-1B-Instruct-Q8_0.gguf
compute:  13th Gen Intel Core i9-13900HX (alderlake)
server:   http://127.0.0.1:8080/

A chat between a curious human and an artificial intelligence assistant. The assistant gives helpful, detailed, and polite answers to the human's questions.
\`\`\`

You can now chat with the model. Type \`/exit\` or press \`Ctrl+C\` to stop.

You can also visit \`http://127.0.0.1:8080/\` in your browser to chat with the model.

LlamaFile exposes an OpenAI compatible API. Here's how to use it in Python:

\`\`\`python
import requests

response = requests.post(
    "http://localhost:8080/v1/chat/completions",
    headers={"Content-Type": "application/json"},
    json={"messages": [{"role": "user", "content": "Write a haiku about coding"}]}
)
print(response.json()["choices"][0]["message"]["content"])
\`\`\`

Tools:

- [OpenAI API compatibility](https://platform.openai.com/docs/api-reference/chat): Use existing OpenAI code
- [Creating your own llamafiles](https://github.com/Mozilla-Ocho/llamafile#creating-llamafiles): Control output format
`;async function no(t,s){let e=[{...await Promise.resolve().then(()=>(U(),M)).then(o=>o.default({user:t,weight:1})),help:g(x)},{...await Promise.resolve().then(()=>(N(),D)).then(o=>o.default({user:t,weight:1})),help:g(S)},{...await Promise.resolve().then(()=>(W(),F)).then(o=>o.default({user:t,weight:1})),help:g(H)},{...await Promise.resolve().then(()=>(V(),Y)).then(o=>o.default({user:t,weight:.5})),help:g(T)},{...await Promise.resolve().then(()=>(X(),J)).then(o=>o.default({user:t,weight:.5})),help:null},{...await Promise.resolve().then(()=>(oe(),te)).then(o=>o.default({user:t,weight:1})),help:g(q)},{...await Promise.resolve().then(()=>(ae(),se)).then(o=>o.default({user:t,weight:1.5})),help:g($)},{...await Promise.resolve().then(()=>(ie(),ne)).then(o=>o.default({user:t,weight:1})),help:g(R)},{...await Promise.resolve().then(()=>(pe(),ce)).then(o=>o.default({user:t,weight:1})),help:[g(_),g(L),g(O)]},{...await Promise.resolve().then(()=>(me(),de)).then(o=>o.default({user:t,weight:1.5})),help:[g(G),g(E)]}];return I(e,s),Object.fromEntries(e.map(({id:o,...n})=>[o,n]))}export{no as questions};

