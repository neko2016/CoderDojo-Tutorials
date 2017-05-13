A Beginner's Guide on HTML & CSS

## Tools
* Install Browser: Chrome, Firefox, Safari, Internet Explorer, Opera, Vivaldi
* Install Text Editor: Sublime Text 2, Atom
* Open the Developer Tool in a browser

## Setup in Sublime Text
Install [Package Control](https://www.granneman.com/webdev/editors/sublime-text/packages/how-to-install-and-use-package-control/)

* Go to http://wbond.net/sublime_packages/package_control/installation and copy the long command there.
* Open the Sublime Text 2 console by pressing Ctrl+`.
* Paste the command you copied into the Sublime Text console.
* Press Enter.
* After Package Control installs, restart Sublime Text. 

Install [Auto-Completion](https://www.granneman.com/webdev/editors/sublime-text/top-features-of-sublime-text/auto-completion-in-sublime-text/)

* Command-Shift-P (Mac) or Ctrl-Shift-P (Windows) to open the Command Palette.
* Type Install until you see Package Control: Install Package.
* When the list of packages appears, type Tag until you find it.
* Press Enter to install the Tag package.
* Restart Sublime Text.


## Setup in Atom
* Go to 'Packages -> Setting View -> Install Packages'. Search for the package listed below and click on install.
* autcomplete 
* autocomplete-plus
* autocomplete-html
* JavaScript Snippet (optional) 

# HTML Basics

### structure and code snippets
![html structure](https://github.com/neko2016/CoderDojo-Tutorials/blob/master/html-boxe.jpg "HTML structure")
![html codes snippets](https://github.com/neko2016/CoderDojo-Tutorials/blob/master/html-code.png "HTML codes")

### Paired tags and Self-closing tags 
Most HTML tags come in pairs,an opening and closing set. The text to be formatted by the tags is written between the pair.  Closing tags are preceded by a backslash (/). 
For example, html, head, body, h1, h2, h3, h4, h5, h6, p, ol, ul, li, a

However, some HTML tags are unpaired and self-closing. 
For example, meta, br, img

### HTML Elements Nesting

``` html
<html>
    <head>
        <title>My home page</title>
    </head>
    <body>
        <h1>My homepage</h1>
        <p>Hello, I am Marijn and this is ...</p>
        <p>I also wrote a book! Read it <a href="http://eloquentjavascript.net/">here</a>.</p>
        
        <h1>HEADING 1</h1>
        <h2>HEADING 2</h2>
        <h3>HEADING 3</h3>
        <h4>HEADING 4</h4>
        <h5>HEADING 5</h5>
        <h6>HEADING 6</h6>
        <p>I am a paragraph.</p>
  
        <ul>
            <li>unordered list 1</li>
            <li>unordered list 2</li>
            <li>unordered list 3</li>
        </ul>
        
        <ol>
            <li>ordered list 1</li>
            <li>ordered list 2</li>
            <li>ordered list 3</li>
        </ol>

        <a href="www.google.com">I am a link to Google.</a> 
        <br />
        <img src="http://www.gruntwork.io/assets/img/technologies/small/go.png" />
        <br />
        <a href="https://encrypted.google.com/" target="_blank"><img src="http://www.tvsnext.io/technologies/images/__golang.jpg" style="width:100px; height: 100px"></a>
    </body>
</html>
```

See it live [here](https://neko2016.github.io/CoderDojo-Tutorials/) 


# CSS Basics

### What is Cascading Style Sheets and where to put them?
* external CSS
* internal CSS
* inline CSS

### Hierarchy and the overriding order in CSS

### Inspect element in DevTool

### How CSS & HTML works together?
* select a html tag
* select by a 'class' attribute
* select by an 'id' attribute

### layout, block or inline? 

## Resources
http://htmlreference.io/
http://cssreference.io/



