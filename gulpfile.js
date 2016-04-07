var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var sass = require('gulp-ruby-sass');
var livereload = require('livereload');
var content = require('./assets/content.json');
var fs = require('fs');
function errorLog(error){
  console.error.bind(error);
  this.emit('end');
}
function getData(file) {
  return JSON.parse(fs.readFileSync('./assets/'+file+'.json', 'utf8'));
}
gulp.task('styles', function(){
  sass('./assets/styles/main.scss',{
   style:'compressed',
   loadPath:['node_modules/bootstrap-sass/assets/stylesheets']
 })
 .on('error', errorLog)
 .pipe(gulp.dest('dist/stylesheets/'))
});
gulp.task('watch', function(){
  gulp.watch('./assets/styles/*.scss', ['styles']);
});

gulp.task('index', function () {
  return gulp.src('assets/index.html')
    .pipe(nunjucksRender({
      data: content.index,
      path: ['assets/','assets/layout'] // String or Array
    }))
    .pipe(gulp.dest('dist'));
  //  .pipe(livereload());
});

gulp.task('applications', function () {
  content.applications.studyApps= content.study;
  content.applications.freeTimeApps= content.freeTime;
  return gulp.src('assets/applications.html')
    .pipe(nunjucksRender({
      data: content.applications,
      path: ['assets/','assets/layout'] // String or Array
    }))
    .pipe(gulp.dest('dist'));
    //.pipe(livereload());
});
gulp.task('about', function () {
  return gulp.src('assets/about.html')
    .pipe(nunjucksRender({
      data: content.about,
      path: ['assets/','assets/layout'] // String or Array
    }))
    .pipe(gulp.dest('dist'));

    //.pipe(livereload());
});
gulp.task('QuickAlgebra', function () {
  return gulp.src('assets/QuickAlgebra.html')
    .pipe(nunjucksRender({
      data: content.study[0],
      path: ['assets/','assets/layout'] // String or Array
    }))
    .pipe(gulp.dest('dist/applications/'));
    //.pipe(livereload());
});
gulp.task('QuickAlgebraFree', function () {
  return gulp.src('assets/QuickAlgebraFree.html')
    .pipe(nunjucksRender({
      data: content.study[1],
      path: ['assets/','assets/layout'] // String or Array
    }))
    .pipe(gulp.dest('dist/applications/'));
    //.pipe(livereload());
});
gulp.task('QuickFit', function () {
  return gulp.src('assets/QuickFit.html')
    .pipe(nunjucksRender({
      data: content.study[2],
      path: ['assets/','assets/layout'] // String or Array
    }))
    .pipe(gulp.dest('dist/applications/'));
    //.pipe(livereload());
});
gulp.task('SimpleBubbleShooter', function () {
  return gulp.src('assets/SimpleBubbleShooter.html')
    .pipe(nunjucksRender({
      data: content.freeTime[0],
      path: ['assets/','assets/layout'] // String or Array
    }))
    .pipe(gulp.dest('dist/applications/'));
    //.pipe(livereload());
});
gulp.task('default', ['styles','about','QuickAlgebra','QuickAlgebraFree','QuickFit','SimpleBubbleShooter']); //'applications','about','QuickAlgebra','QuickAlgebraFree','QuickFit','SimpleBubbleShooter']);
