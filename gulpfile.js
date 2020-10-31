var gulp = require("gulp"),
    pug = require("gulp-pug"),
    livereload = require("gulp-livereload"),
    concat = require("gulp-concat"),
    autoprefixe = require("gulp-autoprefixer"),
    minify = require("gulp-minify"),
    notif  = require("gulp-notify"),
    sass    = require("gulp-sass"),
    maps    = require("gulp-sourcemaps");

gulp.task("html" , function(){
    return gulp.src("stage/html/dashboard.pug")
                .pipe(pug({pretty : true}))
                .pipe(gulp.dest("dist"))
                .pipe(livereload())
});
gulp.task("css" , function(){
    return gulp.src("stage/css/**/*.scss" , "stage/css/**/*.css")
            .pipe(maps.init())
            .pipe(sass({outputStyle : "compact"}).on("error" , sass.logError))
            .pipe(autoprefixe())
            .pipe(concat("main.css"))
            .pipe(maps.write("."))
            .pipe(gulp.dest("dist/css"))
            .pipe(livereload())
});
gulp.task("js" , function(){
    return gulp.src("stage/js/*.js")
            .pipe(concat("script.js"))
            .pipe(minify())
            .pipe(gulp.dest("dist/js"))
            .pipe(livereload())
});
gulp.task("watch" , function(){
    require("./server");
    livereload.listen();
    gulp.watch("stage/html/**/*.pug" , gulp.series("html"));
    gulp.watch(["stage/css/**/*.scss" , "stage/css/**/*.css"], gulp.series("css"));
    gulp.watch("stage/js/*.js" , gulp.series("js"));
});