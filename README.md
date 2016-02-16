# scratch-pad
A blank node app for learning JavaScript!

## JavaScript Only

The scratch-pad project is a Node.js project, which means we write and execute JavaScript independent of a browser in the stand-alone Node.js runtime.  In otherwords, it's _just_ JavaScript - there's no HTML or CSS, and there's no visual aspect to the program except output to the console, which pipes its output to the command-line.

## Installation

### Fork on GitHub

First things first, you MUST fork this repository to your personal GitHub account. You MUST also set up your fork to have the original Operation Spark scratch-pad as an upstream repository so you can pull changes in the feature - BUT, you will do the upstream-pairing step **AFTER** you have installed the project into a new Cloud9 workspace.

1. https://help.github.com/articles/fork-a-repo/
2. https://help.github.com/articles/fork-a-repo/#keep-your-fork-synced (see steps 5 - 7)

This all sounds more confusing than it is, but ask for help if your lost.

### Setup your Cloud9 Workspace

On the **Create New Workspace** page of Cloud9, SSH clone this repository into a new Cloud9 workspace by pasting the SSH git clone URL into the **Clone from Git or Mercurial URL** form field, then click the green **Create workspace** button.  The SSH git clone URL is:

    git@github.com:OperationSpark/scratch-pad.git

You do not need select any Cloud9 workspace template, ie, HTML5, Node.js - the workspace will be automatically setup for you.

Once you are setup in your workspace, go to the command-line and run the following command:

    git remote add upstream https://github.com/OperationSpark/scratch-pad.git

Finally, from the command-line, run the following command (NOTE: you will be asked to provide your GitHub username and password in this step):

    ./.config/install.js && npm install

### Share your Workspace with your Instructors

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

Your homework assignments are located in JavaScript (.js) files in the directory `homework/module-x`, where `x` is whatever module you are currently undertaking.

The assignments are ordered, so on day one of the module, start with the JavaScript file that begins with one, ie, `one-contact-list.js`. On day two, you will complete the assignment in the file, `two-x.js`, where `x` is the name of the assignment.

As you code your solutions and save your work, you have three options for running your code:

1. The coolest way is to run your work against the unit-tests. Go to the bash terminal and run the following command:
    
        npm test
    
    This will run all the unit tests for the homework.
    
    You can use `console.log()` to inspect and debug your work as you go. You will not be able to use the debugger with this option, so that is why `console.log()` is your way to see inspect your work.

2. To use the debugger and breakpoints and _step thru_ your code, you can run your code by **having the file selected in the text-editor** and clicking the green **Run** button. This will open up a new process in the console view that will output your log statements. Breakpoints will be caught by the debugger and you can step through and insptect your code at runtime.
3. You can also run the file straight from the command-line, for example, by running:
    
        ./homework/module-one/one-contact-list.js
    

You MUST submit your homework by 5:30pm the day it is due by doing a pull request.  See detailed instructions in our Bootcamp on how to submit your homework by doing a pull request, or, ask for help.