[![Build Status](https://travis-ci.org/nationalarchives/tna-css-toolkit.svg?branch=master)](https://travis-ci.org/nationalarchives/tna-css-toolkit)

# TNA Readers Screen

### The National Archive's readers screen portal 

#### 1.0 Prerequisite
* Knowledge of the command line.
* Node should be installed. Download setup [here](https://nodejs.org/en/)

#### 2.0 Development setup
##### In order to set up the project follow the steps defined below.
* Using your terminal, you can navigate to the folder you wish to run the project from.
* Type `git clone https://github.com/nationalarchives/tna-legacy-readers`.
* Type `npm install`
* Type `grunt`


#### 3.0 Making changes

This is using the pug templating engine, which works in conjunction with grunt. Please refer to the pug [documentation](https://pugjs.org/api/getting-started.html) in order to make any changes.

    1. pug (edit the files here to see HTML chnages)
      • index.pug
      • readers-registration.pug
      • /includes
      
    2. sass
        This is using the standard tna-base css
      • ie.scss (general ie support)
      • ie7.scss (specific to ie7 only)
      • ie8.scss (specific to ie8 only)
      • reading-rooms.scss (general look and feel for the page)
      
    3. js
      • /js-library
      • ie.js (loads the js for ie only)


** Do not try and edit the HTML/CSS files directly, as the template files will override the changes if you have grunt running at the same.


#### 2.3 Running Grunt

Assuming that the [Grunt CLI](https://gruntjs.com/getting-started#installing-the-cli) has been installed follow the instructions on the [Grunt website](http://gruntjs.com/getting-started#working-with-an-existing-grunt-project).

##### 2.3.1 Available Grunt Tasks 

There are several Grunt tasks available to developers. View the Gruntfile.js for a listing of included tasks

* ```grunt``` will run a predefined set of tasks and result in an ongoing 'watch' tasks which responds to any changes to JavaScript and SASS files by compiling, concatenating and minifying the output.

