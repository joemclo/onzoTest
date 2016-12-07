const browserify = require('browserify');
const del = require("del");
const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const ts = require("gulp-typescript");
const path = require("path");
const sass = require("gulp-sass");
const source = require('vinyl-source-stream');

const tsProject = ts.createProject("tsconfig.json");

gulp.task("clean-ts", (cb) => {
        return del(["./bin/**/*.js"], cb);
})

gulp.task("clean-assets", (cb) => {
        return del(["./bin/**/*.css"], cb);
})

gulp.task("copyAssests", ["clean-assets"], () => {
  gulp.src(["./src/index.html"])
    .pipe(gulp.dest('./bin/public/'));
});

gulp.task("styling", ["clean-assets"], () => {
        gulp.src(["./src/styling/*.{scss,sass}"])
        .pipe(sass())
        .pipe(gulp.dest("./bin/public/css"))
})

gulp.task("compile-ts" , ["clean-ts"],  () => {
    const source = "./src/**/*.{tsx,ts}";

    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest("./bin"));

});

gulp.task("bundle", ["compile-ts"], () => {
        browserify({
                entries: "./bin/app/index.js"
        })
        .bundle()
        .pipe(source("app.js"))
        .pipe(gulp.dest("./bin/public"));
})

gulp.task("build", ["bundle", "styling"]);

gulp.task("nodemon", ["copyAssests", "bundle", "styling"], () => {

        return nodemon({
                script: "./bin/server/index.js",
                ext: "ts tsx scss",
                watch : [
                        "src/app/**/*.ts",
                        "src/app/**/*.tsx",
                        "src/styling/**/*.scss",
                ],
                tasks : (changedFiles) => {
                        console.log(changedFiles)
                        const tasks = [];
                        if (changedFiles) {
                                changedFiles.forEach((file) => {
                                        const extName = path.extname(file);
                                        if ((extName === ".ts" || extName === ".tsx") && !~tasks.indexOf("bundle")) {
                                                tasks.push("bundle");
                                        }
                                        if ((path.extname(file) === '.scss') && !~tasks.indexOf('styling')){
                                                tasks.push('styling');
                                        } 
                                });

                        }
                        return tasks;
                }
        });
})

gulp.task("default", ["nodemon"]);
