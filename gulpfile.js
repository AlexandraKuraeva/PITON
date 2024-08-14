import browserSync from "browser-sync";
import gulp from "gulp";
import autoprefixer from "gulp-autoprefixer";
import combineMedia from "gulp-combine-media";
import fileinclude from "gulp-file-include";
import gulpSass from "gulp-sass";
import { dirname, resolve } from "path";
import dartSass from "sass";
import { fileURLToPath } from "url";
import webpack from "webpack-stream";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const sass = gulpSass(dartSass);

try {
   gulp.task("server", function () {
      browserSync({
         server: {
            baseDir: "dist",
         },
         online: true,
      });

      gulp.watch(["src/html/*.html", "src/html/**/*.html"]).on("change", browserSync.reload);
   });

   gulp.task("styles", function () {
      // .src("src/scss/**/*.+(scss|sass)")
      return gulp
         .src("src/scss/app.scss")
         .pipe(sass().on("error", sass.logError))
         .pipe(autoprefixer())
         .pipe(combineMedia())
         .pipe(gulp.dest("dist/css"))
         .pipe(browserSync.stream());
   });

   gulp.task("watch", function () {
      gulp.watch("src/scss/**/*.+(scss|sass|css)", gulp.parallel("styles"));
      gulp.watch(["src/html/*.html", "src/html/**/*.html"]).on("change", gulp.parallel("html"));
      gulp.watch("src/js/**/*.js").on("change", gulp.parallel("scripts"));
      gulp.watch("src/fonts/**/*").on("all", gulp.parallel("fonts"));
      gulp.watch("src/icons/**/*").on("all", gulp.parallel("icons"));
      gulp.watch("src/images/**/*").on("all", gulp.parallel("images"));
   });

   gulp.task("html", function () {
      return gulp
         .src(["src/html/*.html", "src/html/pages/*.html", "!src/html/_*.html"])
         .pipe(fileinclude())
         .pipe(gulp.dest("dist/"));
   });

   gulp.task("scripts", function () {
      return gulp
         .src(["src/js/index.js"])
         .pipe(
            webpack({
               output: {
                  filename: "index.js",
                  path: resolve(__dirname, "dist"),
               },
               optimization: {
                  minimize: false,
               },
            })
         )
         .pipe(gulp.dest("dist/js"))
         .pipe(browserSync.stream());
   });

   gulp.task("libs", function () {
      return gulp.src(["src/js/libs/*.js"]).pipe(gulp.dest("dist/js/libs")).pipe(browserSync.stream());
   });

   gulp.task("fonts", function () {
      return gulp.src("src/fonts/**/*").pipe(gulp.dest("dist/fonts")).pipe(browserSync.stream());
   });

   gulp.task("icons", function () {
      return gulp.src("src/icons/**/*").pipe(gulp.dest("dist/icons")).pipe(browserSync.stream());
   });

   gulp.task("images", function () {
      return gulp.src("src/images/**/*").pipe(gulp.dest("dist/images")).pipe(browserSync.stream());
   });

   gulp.task(
      "default",
      gulp.parallel("watch", "server", "styles", "scripts", "libs", "fonts", "icons", "html", "images")
   );
} catch (error) {
   console.log(error);
}
