# scratch-pad
A blank node app for learning JavaScript!

## JavaScript Only

The scratch-pad project is a Node.js project, which means we write and execute JavaScript independent of a browser in the stand-alone Node.js runtime.  In otherwords, it's _just_ JavaScript - there's no HTML or CSS, and there's no visual aspect to the program except output to the console, which pipes its output to the command-line.

## Installation

On the **Create New Workspace** page of Cloud9, SSH clone this repository into a new Cloud9 workspace by pasting the SSH git clone URL into the **Clone from Git or Mercurial URL** form field, then click the green **Create workspace** button.  You do not need select any Cloud9 workspace template, ie, HTML5, Node.js - the workspace will be automatically setup for you.

You can fork it first if you want to push your changes back to GitHub, but it's not necessary - your Cloud9 workspace will keep save your work.

## Share your Workspace with your Instructors

Once you've cloned and created your Cloud9 workspace for the scratch-pad, it's time to share your workspace with your instructors so they can evaluate and pair program with you.

In the TOP-RIGHT corner of Cloud9, find the **Share** button, and click on it to open the Share workspace dialogue box. On the dialogue box, find the form field titled, **Invite People** and enter the Cloud9 usernames of your teacher and your TA.In

**Make certain you give them read and write access** by ensuring the **RW** button is enabled - it will be blue when **RW** is enabled.

If you don't know them, ask your teacher and TA to post their Cloud9 usernames into our Slack channel for the Classroom.

Steve's Cloud9 username is: themooserooster
Max's Cloud9 username is: maxgaudin
John's Cloud9 username is: jfraboni


## app.js

The `app.js` file is an executable JavaScript file, a template for you to write and test JavaScript in the node.js environment.

You can execute the `app.js` file in Cloud9 by opening it and clicking the green "Run" button - this will allow you to use breakpoints on the file and debug and step-thru your code, which is very handy for understanding complex algorithms, especially higher order functions.

You can also execute the `app.js` file from the commandline: if you're in the same directory as the app.js file, simply run the command:

    ./app.js.

You can duplicate this file and rename it to represent whatever other studies you're undertaking to better organize your notes, ie, `strings.js`, or, `recursion.js`, or, `functions.js`, etc.

Note, at the top of the `app.js` file, there's the <a href="https://github.com/OperationSpark/javascript-wiki/wiki/Shebang" target="_blank">linux shebang for the node binary</a>. Always leave this at the top of the file.  This tells the operating system where to look for the program that should run your file, in this case, where to find node. 

Also, below the shebang, note the `'use strict';` directive - this tells node we want to run our JavaScript in strict mode, which, among other things, will prevent our program from silently failing on certain errors. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode" target="_blank">Read more about strict mode here...</a>


## Getting Started with Debugging

Beyond cloud storage, and ease of sharing, one of the main reasons we start students off using Cloud9, and writing and submitting homework in the scratch-pad project, is that Cloud9 has a good debugger.

It is extremely important for you to begin debugging as you work. It's important to make use of `console.log(someValue);` to print expected values to the console and inspect your work. It is also highly valuable to get use to using breakpoints and the debugging tools of Cloud9 (and any other IDE you choose to use in the future)

<a href="https://docs.c9.io/docs/debugging-your-code" target="_blank">Watch this video on getting started with Node.js debugging in Cloud9.</a>. This is how you should inspect your work in scratch-pad as you complete your homework assignments.


## Homework

