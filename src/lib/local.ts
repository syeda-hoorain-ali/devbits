export const getBlog = (slug: string) => {
 const blog = blogs.find(blogs => blogs.slug === slug)
  return blog
}



export const blogs = [
  {
    "title": "Introduction to HTML",
    "date": new Date("2024-09-23"),
    "description": "Learn the basics of HTML, the standard language for creating webpages.",
    "image": "/images/poster/html.jpg",
    "slug": "html",
    "content": `
        <p>HTML is the standard markup language for creating Web pages.</p>
        <hr />
        <h2>What is HTML?</h2>
<ul>
<li>HTML stands for Hyper Text Markup Language</li>
  <li>HTML is the standard markup language for creating Web pages</li>
  <li>HTML describes the structure of a Web page</li>
  <li>HTML consists of a series of elements</li>
  <li>HTML elements tell the browser how to display the content</li>
  <li>HTML elements label pieces of content such as "this is a heading", "this 
  is a paragraph", "this is a link", etc.</li>
</ul>

<hr />
<h2>A Simple HTML Document</h2>
<div class="example">
<h3>Example Document</h3>
<pre><button class="copy" data-code="html-1">&#128203;</button><code id="html-1">&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;head&gt;\n  &lt;title&gt;Page Title&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;\n  &lt;h1&gt;This is a Heading&lt;/h1&gt;\n  &lt;p&gt;This is a paragraph.&lt;/p&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre>
</div>

<h3>Example Explained</h3>
<ul>
<li>The <code>&lt;!DOCTYPE html&gt;</code> declaration defines 
that this document is an HTML5 document</li>
<li>The <code>&lt;html&gt;</code> element is the root element of an HTML 
page</li>
 <li>The <code>&lt;head&gt;</code> element contains meta information about the 
 HTML page</li>
 <li>The <code>&lt;title&gt;</code> element specifies a title for the 
 HTML page (which is shown in the browser's title bar or in the page's tab)</li>
 <li>The <code>&lt;body&gt;</code> element defines the 
 document's body, and is a container for all the visible contents, such as 
 headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
 <li>The <code>&lt;h1&gt;</code> element defines a large heading</li>
 <li>The <code>&lt;p&gt;</code> element defines a paragraph</li>
</ul>

<hr />
<h2>What is an HTML Element?</h2>
<p>An HTML element is defined by a start tag, some content, and an end tag:</p>
<div style="font-size:20px;padding:10px;margin-bottom:10px;">
<span class="text-brown">
<span class="text-blue">&lt;</span>tagname<span class="text-blue">&gt;</span></span>
Content goes here...
<span class="text-brown">
<span class="text-blue">&lt;</span>/tagname<span class="text-blue">&gt;</span></span>
</div>

<p>The HTML <strong>element</strong> is everything from the start tag to the end tag:</p>

<div style="font-size:20px;padding:10px;margin-bottom:10px;">
<span class="text-brown"><span class="text-blue">&lt;<span class="text-brown">h1</span>&gt;</span></span>My 
  First Heading<span class="text-brown"><span class="text-blue">&lt;</span>/h1<span class="text-blue">&gt;</span></span>
</div>

<div style="font-size:20px;padding:10px;margin-bottom:10px;">
<span class="text-brown"><span class="text-blue">&lt;</span>p<span class="text-blue">&gt;</span></span>My first paragraph.<span class="text-brown"><span class="text-blue">&lt;</span>/p<span class="text-blue">&gt;</span></span>
</div>

<table class="border notranslate">
<thead><tr>
<th>Start tag</th>
<th>Element content</th>
<th>End tag</th>
</tr></thead>
<tbody><tr>
<td>&lt;h1&gt;</td>
<td>My First Heading</td>
<td>&lt;/h1&gt;</td>
</tr>
<tr>
<td>&lt;p&gt;</td>
<td>My first paragraph.</td>
<td>&lt;/p&gt;</td>
</tr>
<tr>
<td>&lt;br&gt;</td>
<td><em>none</em></td>
<td><em>none</em></td>
</tr>
</tbody></table>

<div class="note">
<p><strong style="font-weight:600;color:#000;">Note:</strong> Some HTML elements have no content (like the &lt;br&gt; 
element). These elements are called empty elements. Empty elements do not have an end tag!</p>
</div>

<hr />

<h2>Web Browsers</h2>
<p>The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them 
correctly.</p>
<p>A browser does not display the HTML tags, but uses them to determine how to display the document:</p>
<img src="https://www.w3schools.com/html/img_chrome.png" alt="View in Browser" />

<hr />
<h2>HTML Page Structure</h2>
<p>Below is a visualization of an HTML page structure:</p>
<div style="width:99%;border:1px solid grey;padding:3px;margin:0;background-color:#e7e9eb;color:#000;">&lt;html&gt;
<div style="width:90%;border:1px solid grey;padding:3px;margin:20px">&lt;head&gt;
<div style="width:90%;border:1px solid grey;padding:5px;margin:20px">&lt;title&gt;Page title&lt;/title&gt;
</div>
&lt;/head&gt;
</div>
<div style="width:90%;border:1px solid grey;padding:3px;margin:20px;">&lt;body&gt;
<div style="width:90%;border:1px solid grey;padding:3px;margin:20px;" class="bg-white">
<div style="width:90%;border:1px solid grey;padding:5px;margin:20px">&lt;h1&gt;This is a heading&lt;/h1&gt;</div>
<div style="width:90%;border:1px solid grey;padding:5px;margin:20px">&lt;p&gt;This is a paragraph.&lt;/p&gt;</div>
<div style="width:90%;border:1px solid grey;padding:5px;margin:20px">&lt;p&gt;This is another paragraph.&lt;/p&gt;</div>
</div>
&lt;/body&gt;
</div>
&lt;/html&gt;
</div>

<div class="note">
<p><strong style="font-weight:600;color:#000;">Note:</strong> The content inside the &lt;body&gt; section 
will be displayed in a browser. The content inside the &lt;title&gt; element will be 
shown in the browser's title bar or in the page's tab.</p>
</div>

<hr />
<h2>HTML History</h2>
<p>Since the early days of the World Wide Web, there have been many versions of HTML:</p>

<table class="border notranslate">
  <thead><tr>
    <th>Year</th>
    <th>Version</th>
  </tr></thead>
  <tbody><tr>
    <td>1989</td>
    <td>Tim Berners-Lee invented www</td>
  </tr>
  <tr>
    <td>1991</td>
    <td>Tim Berners-Lee invented HTML</td>
  </tr>
  <tr>
    <td>1993</td>
    <td>Dave Raggett drafted HTML+</td>
  </tr>
  <tr>
    <td>1995</td>
    <td>HTML Working Group defined HTML 2.0</td>
  </tr>
  <tr>
    <td>1997</td>
    <td>W3C Recommendation: HTML 3.2</td>
  </tr>
  <tr>
    <td>1999</td>
    <td>W3C Recommendation: HTML 4.01</td>
  </tr>
  <tr>
    <td>2000</td>
    <td>W3C Recommendation: XHTML 1.0</td>
  </tr>
  <tr>
    <td>2008</td>
    <td>WHATWG HTML5 First Public Draft</td>
  </tr>
  <tr>
    <td>2012</td>
    <td><a href="http://whatwg.org/html/" target="_blank">WHATWG HTML5 Living Standard</a></td>
  </tr>
  <tr>
    <td>2014</td>
    <td><a href="http://www.w3.org/TR/html5/" target="_blank">W3C Recommendation: HTML5</a></td>
  </tr>
  <tr>
    <td>2016</td>
    <td>W3C Candidate Recommendation: HTML 5.1</td>
  </tr>
  <tr>
    <td>2017</td>
    <td><a href="http://www.w3.org/TR/html51/" target="_blank">W3C Recommendation: HTML5.1 2nd Edition</a></td>
  </tr>
  <tr>
    <td>2017</td>
    <td><a href="http://www.w3.org/TR/html52/" target="_blank">W3C Recommendation: HTML5.2</a></td>
  </tr>
</tbody></table>

<div class="note">
<p>This tutorial follows the latest HTML5 standard.</p>
</div>
`,
    "link": "https://www.w3schools.com/html/html_intro.asp",
    "comments": [
      {
        "name": "John Doe",
        "message": "Great introduction to HTML! Very helpful.",
        "createdAt": new Date("2024-09-22")
      },
      {
        "name": "Jane Smith",
        "message": "I loved the code examples, very easy to follow!",
        "createdAt": new Date("2024-09-23")
      }
    ]
  },
  {
    "title": "CSS: Styling the Web",
    "date": new Date("2024-09-22"),
    "description": "A deep dive into CSS and how to style your web pages effectively.",
    "image": "/images/poster/css.jpg",
    "slug": "css",
    "content": `
        <p>CSS is the language we use to style a Web page.</p>
        <hr />

        <h2>What is css?</h2>
        <ul>
          <li>CSS stands for Cascading Style Sheets</li>
          <li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</li>
          <li>CSS saves a lot of work. It can control the layout of multiple web pages all at once</li>
          <li>External stylesheets are stored in CSS files</li>
        </ul>
        <hr />

        <h2>CSS Demo - One HTML Page - Multiple Styles!</h2>
        <p>Here we will show one HTML page displayed with four different stylesheets. Click on the "Stylesheet 1", "Stylesheet 2", "Stylesheet 3", "Stylesheet 4" links below to see the different styles:</p>
        <div class="example" style="width:120%;text-align:center;padding:30px;margin:0 -40px;">
          <iframe style="width:100%;height:800px;background:#ffffff;border:none;" src="/css-demo.html"></iframe>
        </div>
        <hr/>

        <h2>Why Use CSS?</h2>
        <p>CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.</p>
        
        <div class="example">
          <h3>CSS Example</h3>
        
<pre><button class="copy" data-code="css-1">&#128203;</button><code id="css-1" class="language-css">body {
  background-color: light-blue;    
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
} </code></pre>
        </div>
        <hr />

        <h2>CSS Solved a Big Problem</h2>
        <p>HTML was NEVER intended to contain tags for formatting a web page!</p>
        <p>HTML was created to describe the content of a web page, like:</p>
        <p>&lt;h1&gt;This is a heading&lt;/h1&gt;</p>
        <p>&lt;p&gt;This is a paragraph.&lt;/p&gt;</p>
        <p>When tags like &lt;font&gt;, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process.</p>
        <p>To solve this problem, the World Wide Web Consortium (W3C) created CSS.</p>
        <p>CSS removed the style formatting from the HTML page!</p>
        
        <div class="note">
          <p>If you don't know what HTML is, we suggest that you read our <a href="/blog/html">HTML Tutorial</a>.</p>
        </div>


        <hr />
        <h2>CSS Saves a Lot of Work!</h2>
        <p>With an external stylesheet file, you can change the look of an entire website by changing just one file!</p>
        <p>With an external stylesheet file, you can change the look of an entire website by changing just one file!</p>
        

        <hr />
        <h2 style="max-width:720px;position:relative;margin:auto;text-decoration: none;text-align:center">Video: CSS Introduction</h2>

        <a href="https://youtu.be/AGDDdsiZ0Ko&amp;list=PLP9IO4UYNF0UCaUSF3XNZ1U9f01E5h5PM" target="blank_">
          <div style="max-width:720px;position:relative;margin:auto;">
            
            <div style="width:30%; position:absolute;top:50%;left:50%;transform:translate(-50%,-50%); text-align:center;margin:auto;">
              <img src="/images/yt_logo.png" style="width:100%;" alt="Tutorial on YouTube" loading="lazy">
            </div>

            <img src="/images/css_introduction.png" style="max-width:100%;height:auto;border-radius:6px" alt="Tutorial on YouTube" loading="lazy">
          </div>
        </a>

        `,
    "link": "https://www.w3schools.com/css/css_intro.asp",
    "comments": [
      {
        "name": "Alice Johnson",
        "message": "CSS makes everything look better!",
        "createdAt": new Date("2024-09-22")
      },
      {
        "name": "Bob Martin",
        "message": "Really good introduction to CSS basics.",
        "createdAt": new Date("2024-09-23")
      }
    ]
  },
  {
    "title": "JavaScript: Adding Interactivity",
    "date": new Date("2024-09-21"),
    "description": "Explore the power of JavaScript and how to make your web pages interactive.",
    "image": "/images/poster/js.jpg",
    "slug": "javascript",
    "content": `
            <p>This page contains some examples of what JavaScript can do.</p>
            <h2>JavaScript Can Change HTML Content</h2>
            <p>One of many JavaScript HTML methods is <code>getElementById()</code>.</p>
            <p>The example below "finds" an HTML element (with id="demo"),
              and changes the element content (innerHTML) to "Hello JavaScript":</p>

            <div class="example">
              <h3>Example</h3>
              <pre><button class="copy" data-code="javascript-1">&#128203;</button><code id="javascript-1" class="language-javascript">document.getElementById("demo").innerHTML = "Hello JavaScript";</code></pre>
            </div>

            <div class="note">
              <p>JavaScript accepts both double and single quotes:</p>
            </div>

            <div class="example">
              <h3>Example</h3>
              <pre><button class="copy" data-code="javascript-2">&#128203;</button><code id="javascript-2" class="language-javascript">document.getElementById('demo').innerHTML = 'Hello JavaScript';</code></pre>
            </div>

            <hr />

            <h2>JavaScript Can Change HTML Attribute Values</h2>
            <p>In this example JavaScript changes the value of the <code>src</code> (source) attribute of an <code>&lt;img&gt;</code> tag:</p>

            <div class="example">
              <h3>The Light Bulb</h3>
              <div class="notranslate" style="margin-bottom:15px;background-color:white;display:flex;gap:8px;align-items:center;justify-content:center">
                <button style="background-color:#f97316;color:white;border-radius:4px;padding:5px 20px;" onclick="document.getElementById('myImage').src='/images/pic_bulb_on.gif'">Turn on the light</button>
                <img id="myImage" border="0" src="/images/pic_bulb_off.gif" style="width:100px" />
                <button style="background-color:#f97316;color:white;border-radius:4px;padding:5px 20px;" onclick="document.getElementById('myImage').src='/images/pic_bulb_off.gif'">Turn off the light</button>
              </div>
            </div>

            <hr />

            <h2>JavaScript Can Change HTML Styles (CSS)</h2>
            <p>Changing the style of an HTML element, is a variant of changing an HTML attribute:</p>

            <div class="example">
              <h3>Example</h3>
              <pre><button class="copy" data-code="javascript-3">&#128203;</button><code id="javascript-3" class="language-javascript">document.getElementById("demo").style.fontSize = "35px";</code></pre>
            </div>
            <hr />

            <h2>JavaScript Can Hide HTML Elements</h2>
            <p>Hiding HTML elements can be done by changing the <code>display</code> style:</p>

            <div class="example">
              <h3>Example</h3>
              <pre><button class="copy" data-code="javascript-4">&#128203;</button><code id="javascript-4" class="language-javascript">document.getElementById("demo").style.display = "none";</code></pre>
            </div>
            <hr />

            <h2>JavaScript Can Show HTML Elements</h2>
            <p>Showing hidden HTML elements can also be done by changing the <code>display</code> style:</p>

            <div class="example">
              <h3>Example</h3>
              <pre><button class="copy" data-code="javascript-5">&#128203;</button><code id="javascript-5" class="language-javascript">document.getElementById("demo").style.display = "block";</code></pre>
            </div>

            <div class="note">
              <h3 style="color:black;">Did You Know?</h3>
              <p>JavaScript and Java are completely different languages, both in concept and design.</p>
              <p>JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.</p>
              <p>ECMA-262 is the official name of the standard. ECMAScript is the official name of the language.</p>
            </div>
        `,
    "link": "https://www.w3schools.com/js/js_intro.asp",
    "comments": [
      {
        "name": "Charlie Brown",
        "message": "JavaScript is awesome! This guide was very helpful.",
        "createdAt": new Date("2024-09-20")
      },
      {
        "name": "Dana White",
        "message": "Good introduction but I would love more examples.",
        "createdAt": new Date("2024-09-21")
      }
    ]
  },
  {
    "title": "Getting Started with TypeScript",
    "date": new Date("2024-09-20"),
    "description": "An introduction to TypeScript and its advantages over JavaScript.",
    "image": "/images/poster/ts.jpg",
    "slug": "typescript",
    "content": `
        
        <p>TypeScript is JavaScript with added syntax for types.</p>
        <h2>What is TypeScript?</h2>
        <p>TypeScript is a syntactic superset of JavaScript which adds <strong>static typing</strong>.</p>
        <p>This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add <strong>types</strong>.</p>
        <div class="note">
          <p>TypeScript being a "Syntactic Superset" means that it shares the same base syntax as JavaScript, but adds something to it.</p>
        </div>
        <hr />

        <h2>Why should I use TypeScript?</h2>
        <p>JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.</p>
        <p>In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.</p>
        <p>TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.</p>
        <p>For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.</p>
        <div class="note" style="background-color:#ffc0c7;">
          <p>TypeScript uses compile time type checking. Which means it checks if the specified types match <strong style="color:black;">before</strong> running the code, not <strong style="color:black;">while</strong> running the code.</p>
        </div>
        <hr />

        <h2>How do I use TypeScript?</h2>
        <p>A common way to use TypeScript is to use the official TypeScript compiler, which transpiles TypeScript code into JavaScript.</p>
        <p>The next section shows how to get the compiler setup for a local project.</p>
        <p>Some popular code editors, such as Visual Studio Code, have built-in TypeScript support and can show errors as you write code!</p>
        `,
    "link": "https://www.w3schools.com/typescript/typescript_intro.asp",
    "comments": [
      {
        "name": "Eva Green",
        "message": "TypeScript has saved me from so many errors!",
        "createdAt": new Date("2024-09-19")
      },
      {
        "name": "Frank Blue",
        "message": "The typing system makes coding so much easier.",
        "createdAt": new Date("2024-09-20")
      }
    ]
  },
  {
    "title": "React: Building User Interfaces",
    "date": new Date("2024-09-19"),
    "description": "Learn how React helps you build complex user interfaces with ease.",
    "image": "/images/poster/react.jpg",
    "slug": "react",
    "content": `
                  <h2>What is React?</h2>

          <p>React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.</p>
          <p>React is a tool for building UI components.</p>

          <hr />

          <h2>How does React Work?</h2>

          <div class="note">
            <p>React creates a VIRTUAL DOM in memory.</p>
          </div>

          <p>Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</p>
          <div class="note">
            <p>React only changes what needs to be changed!</p>
          </div>
          <p>React finds out what changes have been made, and changes <strong>only</strong> what needs to be changed. </p>
          <p>You will learn the various aspects of how React does this in the rest of this tutorial.</p>
          <hr />

          <div class="note">
            <p>To use React in production, you need npm which is included with <a href="https://nodejs.org" target="_blank">Node.js</a>.</p>
          </div>

          <p class="intro">To get an overview of what React is, you can write React code directly in HTML.</p>
          <p class="intro">But in order to use React in production, you need npm and <a href="https://nodejs.org" target="_blank">Node.js</a> installed.</p>
          <hr />



          <h2>React Directly in HTML</h2>
          <p>The quickest way start learning React is to write React directly in your HTML files.</p>
          <p>Start by including three scripts, the first two let us write React code in our JavaScripts, and the third, Babel, allows us to write JSX syntax and ES6 in older browsers.</p>

          <div class="example">
            <h3>Example</h3>
            <p>Include three CDN's in your HTML file:</p>
            <pre tabindex="0"><button class="copy" data-code="react-1">&#128203;</button><code id="react-1" class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;script src="<a href="https://unpkg.com/react@18/umd/react.development.js">https://unpkg.com/react@18/umd/react.development.js</a>" crossorigin&gt;&lt;/script&gt;
    &lt;script src="<a href="https://unpkg.com/react-dom@18/umd/react-dom.development.js">https://unpkg.com/react-dom@18/umd/react-dom.development.js</a>" crossorigin&gt;&lt;/script&gt;
    &lt;script src="<a href="https://unpkg.com/@babel/standalone/babel.min.js">https://unpkg.com/@babel/standalone/babel.min.js</a>" crossorigin&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;

    &lt;div id="mydiv"&gt;&lt;/div&gt;

    &lt;script type="text/babel"&gt;
      function Hello () {
        return &lt;h1&gt;Hello World!&lt;/h1&gt;;
      }

      const container = document.getElementById('mydiv');
      const root = ReactDom.createRoot(container);
      root.render(&lt;Hello /&gt;);
    &lt;/script&gt;

  &lt;/body&gt;
&lt;/html&gt;</code></pre>
          </div>

          <p>This way of using React can be OK for testing purposes, but for production you will need to set up a <strong>React environment</strong>.</p>
          <hr />

          <h2>Setting up a React Environment</h2>
          <p>If you have npx and Node.js installed, you can create a React application by using <code class="codespan">create-react-app</code>.</p>

          <div class="note">
            <p>If you've previously installed <code class="codespan">create-react-app</code> globally,
              it is recommended that you uninstall the package to ensure npx always uses the latest version of <code class="codespan">create-react-app</code>.</p>
            <p>To uninstall, run this command: <code class="codespan">npm uninstall -g create-react-app</code>.</p>
          </div>

          <p>Run this command to create a React application named <code class="codespan">my-react-app</code>:</p>

          <div class="example" style="padding:5px">
            <pre style="background-color:black;color:white;margin:0"><button class="copy" data-code="react-2">&#128203;</button><code id="react-2" style="font-size:1rem;font-weight:500;">npx create-react-app my-react-app</code></pre>
          </div>

          <p>The <code class="codespan">create-react-app</code> will set up everything you need to run a React application.</p>
          <hr />

          <h2>Run the React Application</h2>
          <p>Now you are ready to run your first <em>real</em> React application!</p>
          <p>Run this command to move to the <code class="codespan">my-react-app</code> directory:</p>
          <div class="example" style="padding:5px">
            <pre style="background-color:black;color:white;margin:0"><button class="copy" data-code="react-3">&#128203;</button><code id="react-3" style="font-size:1rem;font-weight:500;">cd my-react-app</code></pre>
          </div>

          <p>Run this command to run the React application <code class="codespan">my-react-app</code>:</p>

          <div class="example" style="padding:5px">
            <pre style="background-color:black;color:white;margin:0"><button class="copy" data-code="react-4">&#128203;</button><code id="react-4" style="font-size:1rem;font-weight:500;">npm start</code></pre>
          </div>

          <p>A new browser window will pop up with your newly created React App! If not, open your browser and type <code class="codespan">localhost:3000</code> in the address bar.</p>
          <p>The result:</p>

          <div style="margin-top:16px;padding:0.01em 16px">
            <img src="/images/my_first_react.png" style="max-width:100%">
          </div>
          <br />
          <hr />

          <h2>Modify the React Application</h2>

          <p>So far so good, but how do I change the content?</p>

          <p>Look in the <code class="codespan">my-react-app</code> directory, and you will find a
            <code class="codespan">src</code> folder. Inside the
            <code class="codespan">src</code> folder there is a file called
            <code class="codespan">App.js</code>, open it and it will look like this:</p>

          <div class="example">
            <p>/myReactApp/src/App.js:</p>

            <pre><button class="copy" data-code="react-5">&#128203;</button><code id="react-5" class="language-jsx">import logo from './logo.svg';
import './App.css';

function App() {
  return (
    &lt;div className="App"&gt;
      &lt;header className="App-header"&gt;
        &lt;img src={logo} className="App-logo" alt="logo" /&gt;
        &lt;p&gt;
          Edit &lt;code&gt;src/App.js&lt;/code&gt; and save to reload.
        &lt;/p&gt;
        &lt;a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        &gt;
          Learn React
        &lt;/a&gt;
      &lt;/header&gt;
    &lt;/div&gt;
  );
}

export default App;</code></pre>

            <br />
          </div>

          <p>Try changing the HTML content and save the file.</p>

          <div class="note">
            <p>Notice that the changes are visible immediately after you save the file, you do not have to reload the browser!</p>
          </div>

          <div class="example">
            <h3>Example</h3>
            <p>Replace all the content inside the <code class="codespan">&lt;div  className="App"&gt;</code> with a
              <code class="codespan">&lt;h1&gt;</code> element.</p>
            <p>See the changes in the browser when you click Save.</p>
            
            <pre tabindex="0"><button class="copy" data-code="react-6">&#128203;</button><code id="react-6" class="language-jsx">function App() {
  return (
    &lt;div className="App"&gt;
      &lt;h1&gt;Hello World!&lt;/h1&gt;
    &lt;/div&gt;
  );
}

export default App;</code></pre>
            <br />
          </div>

          <div class="note">
            <p>Notice that we have removed the imports we do not need (logo.svg and App.css).</p>
          </div>

          <p>The result:</p>
          <div style="margin-top:16px;padding:0.01em 16px">
            <img src="/images/react_hello_world.png" style="max-width:100%">
          </div>
          <hr />

          <h2>React.JS History</h2>
          <p>Current version of React.JS is V18.0.0 (April 2022).</p>
          <p>Initial Release to the Public (V0.3.0) was in July 2013.</p>
          <p>React.JS was first used in 2011 for Facebook's Newsfeed feature. </p>
          <p>Facebook Software Engineer, Jordan Walke, created it.</p>
          <p>Current version of <code class="codespan">create-react-app</code> is v5.0.1 (April 2022).</p>
          <p><code class="codespan">create-react-app</code> includes built tools such as webpack, Babel, and ESLint.</p>
        `,
    "link": "https://www.w3schools.com/react/react_intro.asp",
    "comments": [
      {
        "name": "Grace Hopper",
        "message": "React's component-based architecture is amazing!",
        "createdAt": new Date("2024-09-18")
      },
      {
        "name": "Harry Potter",
        "message": "I love React! This introduction was a great start.",
        "createdAt": new Date("2024-09-19")
      }
    ]
  },
  {
    "title": "MongoDB: A NoSQL Database",
    "date": new Date("2024-09-17"),
    "description": "Learn about MongoDB, a flexible NoSQL database that's perfect for modern applications.",
    "image": "/images/poster/mongodb.jpg",
    "slug": "mongodb",
    "content": `
      <p>MongoDB is a document database. It stores data in a type of JSON format called BSON.</p>

      <h2>A MongoDB Document</h2>

      <p>Records in a MongoDB database are called documents, and the field values may include numbers, strings, booleans, arrays, or even nested documents.</p>
      <div class="example">
        <h3>Example Document</h3>
        <pre tabindex="0"><button class="copy" data-code="mongo-1">&#128203;</button><code id="mongo-1" class="language-json">{
  "title": "Post Title 1",
  "body": "Body of post.",
  "category": "News",
  "likes": 1,
  "tags": ["news", "events"],
  "date": Date()
  }</code></pre>
      </div>

      <hr />

      <h2>Learning by Examples</h2>
      <p>Our "Show MongoDB" tool makes it easy to demonstrate MongoDB. It shows both the code and the result.</p>

      <div class="example">
        <h3>Example</h3>
        <p>Find all documents that have a category of "news".</p>
        <pre tabindex="0"><button class="copy" data-code="mongo-2">&#128203;</button><code id="mongo-2" class="language-js">db.posts.find( {category: "News"} )</code></pre>
      </div>
      <hr>

      <h2>SQL vs Document Databases</h2>
      <p>SQL databases are considered relational databases. They store related data in separate tables.
      When data is needed, it is queried from multiple tables to join the data back together.</p>
      <p>MongoDB is a document database which is often referred to as a non-relational database.
      This does not mean that relational data cannot be stored in document databases.
      It means that relational data is stored differently. A better way to refer to it is as a non-tabular database.</p>
      <p>MongoDB stores data in flexible documents.
      Instead of having multiple tables you can simply keep all of your related data together.
      This makes reading your data very fast.</p>
      <p>You can still have multiple groups of data too. In MongoDB, instead of tables these are called collections.</p>
      <hr>

      <h2>Local vs Cloud Database</h2>
      <p>MongoDB can be installed locally, which will allow you to host your own MongoDB server on your hardware.
      This requires you to manage your server, upgrades, and any other maintenance.</p>
      <p>You can download and use the MongoDB open source
      <a target="_blank" href="https://www.mongodb.com/try/download/community?utm_campaign=w3schools_mdb&amp;utm_source=w3schools&amp;utm_medium=referral">Community Server</a>
      on your hardware for free.</p>
      <p>To be able to experiment with the code examples, you will need access to a MongoDB database.</p>

      <p>Sign up for a free <a href="https://www.mongodb.com/cloud/atlas/register?utm_campaign=w3schools_mdb&amp;utm_source=w3schools&amp;utm_medium=referral">MongoDB Atlas</a>
      account to get started.</p>
      <hr>

      <h2>Creating a Cluster</h2>
      <p>After you have created your account, set up a free "Shared Cluster" then choose your preferred cloud provider and region.</p>
      <p>By default, MongoDB Atlas is completely locked down and has no external access.</p>
      <p>You will need to set up a user and add your IP address to the list of allowed IP addresses.</p>
      <p>Under "Database Access", create a new user and keep track of the username and password.</p>
      <p>Next, under "Network Access", add your current IP address to allow access from your computer.</p>
      <hr>

      <h2>Install MongoDB Shell (mongosh)</h2>
      <p>There are many ways to connect to your MongoDB database.</p>
      <p>We will start by using the MongoDB Shell, <code class="codespan">mongosh</code>.</p>

      <p>Use the
      <a target="_blank" href="https://docs.mongodb.com/mongodb-shell/install/?utm_campaign=w3schools_mdb&amp;utm_source=w3schools&amp;utm_medium=referral">official instructions</a>
      to install <code class="codespan">mongosh</code> on your operating system.</p>
      <p>To verify that it has been installed properly, open your terminal and type:</p>

      <div class="example" style="padding:5px">
        <pre style="background-color:black !important;color:white;margin:0"><button class="copy" data-code="mongo-3">&#128203;</button><code id="mongo-3" style="font-size:1rem;font-weight:500;">mongosh --version</code></pre>
      </div>

      <p>You should see that the latest verion is installed.</p>
      <p>The version used in this tutorial is v1.3.1.</p>
      <hr />

      <h2>Connect to the database</h2>
      <p>To connect to your database, you will need your database specific connection string.</p>
      <p>In the MongoDB Atlas dashboard, under "Databases", click the "Connect" button for your Cluster.</p>
      <p>Next, choose "Connect with the MongoDB Shell".</p>
      <p>Copy your connection string.</p>

      <div class="example">
        <h3>Example</h3>
        <p>Your connection string should look similar to this:</p>
        <pre style="background-color:black !important;color:white;margin:0"><button class="copy" data-code="monogo-4">&#128203;</button>
<code id="monogo-4" style="font-size:1rem;font-weight:500;">mongosh "mongodb+srv://cluster0.ex4ht.mongodb.net/myFirstDatabase" --apiVersion 1 --username YOUR_USER_NAME</code></pre>
      </div>

      <p>Paste your connection string into your terminal and press enter.</p>
      <p>You will be prompted to enter your database user password that you created earlier.</p>
      <p>You are now connected to the database!</p>
      <hr />

      <h2>What Next?</h2>
      <p>In the following sections we will use 'mongosh' to create, read, update, and delete (CRUD) items in your database.</p>
      <p>After getting the basics down, we will move on to using MongoDB with other backend technologies like Node.js.</p>
      `,
    "link": "https://www.w3schools.com/mongodb/mongodb_intro.asp",
    "comments": [
      {
        "name": "Alice Wonderland",
        "message": "NoSQL is the future, and MongoDB is the best choice!",
        "createdAt": new Date("2024-09-16")
      }
    ]
  },
  {
    "title": "Node.js: Server-Side JavaScript",
    "date": new Date("2024-09-16"),
    "description": "Node.js allows you to run JavaScript on the server, enabling full-stack JavaScript development.",
    "image": "/images/poster/nodejs.jpg",
    "slug": "nodejs",
    "content": `
      <h2>What is Node.js?</h2>
      <ul>
      <li>Node.js is an open source server environment</li>
        <li>Node.js is free</li>
        <li>Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)</li>
        <li>Node.js uses JavaScript on the server</li>
      </ul>
      <hr />

      <h2>Why Node.js?</h2>

      <div class="note">
        <p><strong style="color:black;">Node.js uses asynchronous programming!</strong></p>
      </div>

      <p>A common task for a web server can be to open a file on the server and return the content to the client.</p>
      <p>Here is how PHP or ASP handles a file request:</p>
      <ol>
        <li>Sends the task to the computer's file system.</li>
        <li>Waits while the file system opens and reads the file.</li>
        <li>Returns the content to the client.</li>
        <li>Ready to handle the next request.<br></li>
      </ol>

      <p>Here is how Node.js handles a file request:</p>
      <ol>
        <li>Sends the task to the computer's file system.</li>
        <li>Ready to handle the next request.</li>
        <li>When the file system has opened and read the file, the server returns the content to the client.</li>
      </ol>

      <p>Node.js eliminates the waiting, and simply continues with the next request.</p>
      <p>Node.js runs single-threaded, non-blocking, asynchronous programming, which 
      is very memory efficient.</p>

      <hr />

      <h2>What Can Node.js Do?</h2>
      <ul>
        <li>Node.js can generate dynamic page content</li>
        <li>Node.js can create, open, read, write, delete, and close files on the server</li>
        <li>Node.js can collect form data</li>
        <li>Node.js can add, delete, modify data in your database</li>
      </ul>
      <hr />

      <h2>What is a Node.js File?</h2>
      <ul>
        <li>Node.js files contain tasks that will be executed on certain events</li>
        <li>A typical event is someone trying to access a port on the server</li>
        <li>Node.js files must be initiated on the server before having any effect</li>
        <li>Node.js files have extension ".js"</li>
      </ul>

      <hr />

      <h2>Download Node.js</h2>
      <p>The official Node.js website has installation instructions for Node.js:
      <a target="_blank" href="https://nodejs.org">https://nodejs.org</a></p>
      <hr>
      <h2>Getting Started</h2>
      <p>Once you have downloaded and installed Node.js on your computer, let's try to 
      display "Hello World" in a web browser.</p>
      <p>Create a Node.js file named "myfirst.js", and add the following code:</p>

      <div class="example">
        <p>myfirst.js</p>
        <pre><button class="copy" data-code="node-1">&#128203;</button><code id="node-1" class="language-javascript">var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
</code></pre>

      </div>

      <p>Save the file on your computer: C:\Users\<em>Your Name</em>\myfirst.js</p>
      <p>The code tells the computer to write "Hello World!" if anyone (e.g. a web browser) tries to access your computer on port 8080.</p>

      <p>For now, you do not have to understand the code. It will be explained later.</p>
      <hr />

      <h2>Command Line Interface</h2>
      <p>Node.js files must be initiated in the "Command Line Interface" program 
      of your computer.</p>
      <p>How to open the command line interface on your computer depends on the operating system. For Windows users, press the start button and look for "Command Prompt", or simply write "cmd" in the search field.</p>
      <p>Navigate to the folder that contains the file "myfirst.js", the command line interface window should look something like this:</p>

      <div class="example" style="padding:5px">
      <p>Initiate "myfirst.js":</p>
        <pre style="background-color:black;color:white;margin:0"><button class="copy" data-code="node-2">&#128203;</button><code id="node-2" style="font-size:1rem;font-weight:500;">C:\Users\<em>Your Name</em>&gt;_</code></pre> 
      </div>

      <hr />

      <h2>Initiate the Node.js File</h2>
      <p>The file you have just created must be initiated by Node.js before any action can take place.</p>
      <p>Start your command line interface, write <code class="w3-codespan">node myfirst.js</code> and hit enter:</p>

      <div class="example" style="padding:5px">
        <p>Initiate "myfirst.js":</p>
        <pre style="background-color:black;color:white;margin:0"><button class="copy" data-code="node-3">&#128203;</button><code id="node-3" style="font-size:1rem;font-weight:500;">C:\Users\<em>Your Name</em>&gt;node myfirst.js</code></pre> 
      </div>

      <p>Now, your computer works as a server!</p>
      <p>If anyone tries to access your computer on port 8080, they will get a "Hello World!" message in return!</p>
      <p>Start your internet browser, and type in the address: <a href="http://localhost:8080" target="_blank">http://localhost:8080</a></p>
    `,
    "link": "https://www.w3schools.com/nodejs/nodejs_intro.asp",
    "comments": [
      {
        "name": "Bob Marley",
        "message": "Node.js is a game changer for backend development.",
        "createdAt": new Date("2024-09-15")
      }
    ]
  },
  // {
  //   "title": "Introduction to Express.js",
  //   "date": new Date("2024-09-15"),
  //   "description": "Learn Express.js, the fast, unopinionated web framework for Node.js.",
  //   "image": "/images/poster/expressjs.jpg",
  //   "slug": "expressjs-introduction",
  //   "content": "<h1>Express.js Introduction</h1><p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.</p><pre><code>const express = require('express');\nconst app = express();\napp.get('/', function (req, res) {\n  res.send('Hello World!');\n});\napp.listen(3000);</code></pre>",
  //   "link": "https://www.w3schools.com/expressjs/express_intro.asp",
  //   "comments": [
  //     {
  //       "name": "Charlie Sheen",
  //       "message": "Express makes working with Node.js so much easier.",
  //       "createdAt": new Date("2024-09-14")
  //     }
  //   ]
  // },
  {
    "title": "Next.js: The React Framework",
    "date": new Date("2024-09-14"),
    "description": "Next.js adds server-side rendering and static site generation to React applications.",
    "image": "/images/poster/nextjs.jpg",
    "slug": "nextjs",
    "content": "<h1>Next.js Introduction</h1><p>Next.js is a minimalistic framework for server-rendered React applications.</p><pre><code>import { useState } from 'react';\nfunction Home() {\n  const [message, setMessage] = useState('Welcome to Next.js!');\n  return &lt;h1&gt;{message}&lt;/h1&gt;;\n}</code></pre>",
    "link": "https://www.w3schools.com/nextjs/nextjs_intro.asp",
    "comments": [
      {
        "name": "Elon Musk",
        "message": "Next.js is perfect for building scalable apps.",
        "createdAt": new Date("2024-09-13")
      }
    ]
  },
  // {
  //   "title": "Python for Web Development",
  //   "date": new Date("2024-09-13"),
  //   "description": "Python is a versatile language often used for web development alongside frameworks like Django and Flask.",
  //   "image": "/images/poster/python.jpg",
  //   "slug": "python-introduction",
  //   "content": "<h1>Python Introduction</h1><p>Python is a high-level, interpreted, general-purpose programming language that emphasizes code readability.</p><pre><code>print('Hello, Python!')</code></pre>",
  //   "link": "https://www.w3schools.com/python/python_intro.asp",
  //   "comments": [
  //     {
  //       "name": "Guido van Rossum",
  //       "message": "Python is easy to learn and powerful!",
  //       "createdAt": new Date("2024-09-12")
  //     }
  //   ]
  // },
  // {
  //   "title": "PHP: Powering Dynamic Web Development",
  //   "date": new Date("2024-09-12"),
  //   "description": "Discover the power of PHP, a versatile server-side scripting language that powers millions of websites and applications worldwide.",
  //   "image": "/images/poster/php.jpg",
  //   "slug": "php",
  //   "content": "<h1>PHP Introduction</h1><p>PHP is a popular general-purpose scripting language that is especially suited to web development.</p><pre><code>&lt;?php\necho 'Hello World!';\n?&gt;</code></pre>",
  //   "link": "https://www.w3schools.com/php/php_intro.asp",
  //   "comments": [
  //     {
  //       "name": "Rasmus Lerdorf",
  //       "message": "PHP is still relevant for backend web development.",
  //       "createdAt": new Date("2024-09-11")
  //     }
  //   ]
  // },
  // {
  //   "title": "MySQL: The Heart of Web Databases",
  //   "date": new Date("2024-09-11"),
  //   "description": "Dive into MySQL, the world's most popular open-source database system",
  //   "image": "/images/poster/mysql.jpg",
  //   "slug": "mysql",
  //   "content": "<h1>MySQL Introduction</h1><p>MySQL is an open-source relational database management system.</p><pre><code>CREATE DATABASE mydatabase;</code></pre>",
  //   "link": "https://www.w3schools.com/mysql/mysql_intro.asp",
  //   "comments": [
  //     {
  //       "name": "Larry Page",
  //       "message": "MySQL is fast, secure, and easy to use.",
  //       "createdAt": new Date("2024-09-10")
  //     }
  //   ]
  // }
]
