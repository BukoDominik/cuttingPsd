var gulp = require("gulp"),
	sass = require("gulp-sass"),
	browserSync = require("browser-sync");

	gulp.task("css", function(){
		gulp.src("sass/style.scss")
		.pipe(sass())
		.pipe(gulp.dest("css"))
		.pipe(browserSync.stream());
	});

	gulp.task("server", function(){
		browserSync.init({
			server: "../cutpsd/"
		});
	});

	gulp.task("watch", function(){
		gulp.watch("sass/*scss", ["css"]);
		gulp.watch("*.html").on('change', browserSync.reload);
	});

	gulp.task("default", ["css", "server", "watch"]);