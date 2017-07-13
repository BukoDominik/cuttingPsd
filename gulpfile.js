var gulp = require("gulp"),
	sass = require("gulp-sass"),
	autoPrefixer = require("gulp-autoprefixer"),
	cleanCss = require("gulp-clean-css"),
	useref = require("gulp-useref"),
	uglify = require("gulp-uglify"),
	browserSync = require("browser-sync");

	gulp.task("css", function(){
		gulp.src("sass/style.scss")
		.pipe(sass())
		.pipe(autoPrefixer({
            browsers: ["last 5 version", 'last 5 ff versions', 'IE 9',  'last 2 Chrome versions', 'last 5 Opera versions']
        }))
		.pipe(cleanCss())
		.pipe(gulp.dest("css"))
		.pipe(browserSync.stream());
	});

	gulp.task("server", function(){
		browserSync.init({
			server: "../cuttingPsd/"
		});
	});

	gulp.task("watch", function(){
		gulp.watch("sass/*scss", ["css"]);
		gulp.watch("*.html").on('change', browserSync.reload);
	});

	gulp.task("uglyJS", function(){
		gulp.src("js/script.js")
			.pipe(uglify())
			.pipe(gulp.dest("js/js"));
	});



	gulp.task("default", ["css", "uglyJS", "server", "watch"]);