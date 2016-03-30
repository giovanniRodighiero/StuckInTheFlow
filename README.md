# Stuck In The Flow
Main repository with the source code and the assets used while developing the website [StuckInTheFlow](http://stuckintheflow.altervista.org/).
## What's the site about
The website has the aim of publicizing the apps made by Stuck In The Flow (a group of three friends) during the years.
More information can be found in the wesite itsels.

## Tecnologies and languages involved
It's a static website and the distribution version is pure html, there is not dynamic page rendering indeed.
While developing though, I used some Node.js modules to improve the developing speed and the maintainability of the code, to be more specific:
* I used [Nunjucks.js](https://mozilla.github.io/nunjucks/) for html templating and gulp-nunjucks-render for compiling it on standard html;
* [Bootstrap](http://getbootstrap.com/) Sass as the css framework, compiled and minified by [gulp.js](http://gulpjs.com/);
* Own .scss files compiled as well with [gulp.js](http://gulpjs.com/).

All the content related to the apps is stored in a .json file, so it's easy to modify the informations displayed and, potentially, could be replaced by a MongoDB instance. 

## Todo
The SEO aspect and the indexing of the site is still missing due to lack of free time, I'll work on them asap.


