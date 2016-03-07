var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var connect = require("gulp-connect");
var angularTemplate = require("gulp-angular-templatecache");
var sourcemaps = require("gulp-sourcemaps");
var minifyCSS = require("gulp-minify-css");
var autoprefixer = require("gulp-autoprefixer");
var watcher = require("gulp-watch");
var gulpOpen = require('gulp-open');
var historyApiFallback = require('connect-history-api-fallback');
var plumber = require("gulp-plumber");
var livereload = require("gulp-livereload");

var sources_files = {
	"styles": "public/scss/styles.scss",
	"scss": "public/scss/*.scss",
	"css": "public/css/**/*.css",
};

gulp.task('build-scss', function() {
	gulp.src(sources_files.styles)
		.pipe(plumber())//check error
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write('public/css/maps/'))
		.pipe(concat('styles.min.css'))
		.pipe(minifyCSS())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
		.on('error', function (err) {
            gutil.log(err);
            this.emit('end');
        })
		.pipe(gulp.dest('public/css/'))
		.pipe(livereload());
});

gulp.task('stream', function() {
	livereload.listen();
	gulp.watch(sources_files.scss, ['build-scss'])
	gulp.watch(sources_files.css, ['build-scss'])
});

gulp.task('build', function() {

});

gulp.task('default', ['stream']);

