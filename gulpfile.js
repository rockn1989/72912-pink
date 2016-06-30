"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync");

var rename = require("gulp-rename");
var minify = require("gulp-csso");
var svgstore =  require("gulp-svgstore");
var svgmin = require("gulp-svgmin");
var imagemin = require("gulp-imagemin");
var copy = require("gulp-copy");
var del = require("del");
var run = require("run-sequence");

var browsers = [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions",
        "ie 11",
        'ie 10'
      ];

gulp.task("del", function() {
  return del("build");
});

gulp.task("copy", function() {
  return gulp.src([
    "fonts/**/*.{woff,woff2}",
    "img/**",
    "js/**",
    "*.html"
  ], {
    base: "."
  })
  .pipe(gulp.dest("build"));
});

gulp.task("svgstore",["svgmin"], function () {
  return gulp
    .src("build/img/*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("symbols.svg"))
    .pipe(gulp.dest("build/img/"));
});

gulp.task("svgstore:dev", function () {
  return gulp
    .src("img/*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("symbols.svg"))
    .pipe(gulp.dest("img/"));
});

gulp.task("svgmin", function () {
  return gulp.src("img/*.svg")
        .pipe(svgmin())
        .pipe(gulp.dest("build/img/"));
});

gulp.task("style:dev", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: browsers})
    ]))
    .pipe(gulp.dest("css"))
    .pipe(server.reload({stream: true}));
});

gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: browsers})
    ]))
  .pipe(gulp.dest("build/css"))
  .pipe(minify())
  .pipe(rename("style.min.css"))
  .pipe(gulp.dest("build/css"));
});

gulp.task("images", function() {
  return gulp.src("build/img/**/*.{png,jpg,gif}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
  ]))
  .pipe(gulp.dest("build/img"));
});

gulp.task("production",["style","images","copy","svgstore"]);

gulp.task("build", function() {
  run(
    "del",
    "production"
  );
});

gulp.task("serve", ["style:dev","svgstore:dev"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch("less/**/*.less", ["style:dev"]);
  gulp.watch("*.html").on("change", server.reload);
});
