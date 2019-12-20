"use strict";

let gulp = require("gulp")
let browserSync = require("browser-sync").create()

gulp.task("copy", function() {
  return gulp.src([
      "_resource/**/*"
    ])
    .pipe(gulp.dest("html/"))
    .pipe(browserSync.stream())
})

gulp.task("default", ["copy"], function() {
  browserSync.init({
    server: {
      baseDir: "html"
    },
    browser: "chrome"
  })
  gulp.watch(["_resource/**/*"],["copy"])
})