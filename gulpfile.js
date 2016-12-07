const browserify = require('browserify');
const del = require("del");
const gulp = require("gulp");
const nodemon = require("gulp-nodemon");
const ts = require("gulp-typescript");
const path = require("path");
const source = require('vinyl-source-stream');

const tsProject = ts.createProject("tsconfig.json");

gulp.task("clean", (cb) => {
        return del("./bin", cb);
})

gulp.task("copyAssests", ["clean"], () => {
  gulp.src(["./src/styling/**", "./src/index.html"])
    .pipe(gulp.dest('./bin/public/'));
});

gulp.task("compile-ts" , ["clean"],  () => {
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

gulp.task("build", ["bundle"]);

gulp.task("nodemon", ["clean", "copyAssests", "bundle"], () => {

        return nodemon({
                script: "./bin/server/index.js",
                ext: "ts tsx",
                watch : [
                        "src/**/*.ts",
                        "src/**/*.tsx",
                ],
                tasks : (changedFiles) => {
                        console.log(changedFiles)
                        const tasks = [];
                        if (changedFiles) {
                                changedFiles.forEach((file) => {
                                        const extName = path.extname(file);
                                        if ((extName === ".ts" || extName === ".tsx") && !~tasks.indexOf("bundle")) {
                                                tasks.push("bundle", "copyAssests");
                                        }
                                });

                        }
                        return tasks;
                }
        });
})

gulp.task("default", ["nodemon"]);
