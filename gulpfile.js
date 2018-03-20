const gulp              = require('gulp');
const $gp               = require('gulp-load-plugins')();

const browserSync       = require('browser-sync').create(),
    reload              = browserSync.reload,
    webpack             = require('webpack'),
    webpackConfig       = require('./webpack.config.js'),
    moduleImporter      = require('sass-module-importer'),
    del                 = require('del');

const SRC_DIR = 'src';
const DIST_DIR = 'docs';
const ROOT_PATH = `./${DIST_DIR}`;
    
// стили
gulp.task('styles', () => {
    return gulp
        .src(`${SRC_DIR}/styles/main.scss`)
        .pipe($gp.plumber())
        .pipe($gp.sassGlob())
        .pipe($gp.sourcemaps.init())
        .pipe(
            $gp.sass({
                outputStyle: 'compressed',
                importer: moduleImporter()
            })
        )
        .pipe(
            $gp.autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            })
        )
        .pipe($gp.sourcemaps.write())
        .pipe($gp.rename({ suffix: '.min' }))
        .pipe(gulp.dest(`${DIST_DIR}/styles/`))
        .pipe(reload({ stream: true }));
});

gulp.task('pug', () => {
    return gulp.src(`${SRC_DIR}/views/pages/*.pug`)
        .pipe($gp.pug({
            pretty: true
        }))
        .pipe(gulp.dest(`${DIST_DIR}`));
});

gulp.task('fonts', () => {
    return gulp.src(`${SRC_DIR}/fonts/**`)
        .pipe(gulp.dest(`${DIST_DIR}/fonts/`));
});

gulp.task('clean', () => {
    return del(ROOT_PATH);
});

gulp.task('scripts', () => {
    return gulp
        .src(`${SRC_DIR}/scripts/main.js`)
        .pipe($gp.plumber())
        .pipe($gp.webpack(webpackConfig, webpack))
        .pipe(gulp.dest(`${DIST_DIR}/scripts`))
        .pipe(reload({ stream: true }));
});

gulp.task('nodemon', done => {
    let started = false;
    $gp.nodemon({
        script: 'server.js',
        env: { NODE_ENV: 'development' },
        watch: 'server.js'
    })
        .on('start', () => {
            if (started) return;
            done();
            started = true;
        });
});

gulp.task('server',
    gulp.series('nodemon', done => {
        browserSync.init({
            proxy: 'http://localhost:3000',
            port: 8080,
            open: false
        });
    })
);

// спрайт иконок + инлайн svg
gulp.task('svg', done => {
    const prettySvgs = () => {
        return gulp
            .src(`${SRC_DIR}/images/icons/*.svg`)
            .pipe(
                $gp.svgmin({
                    js2svg: {
                        pretty: true
                    }
                })
            )
            .pipe(
                $gp.cheerio({
                    run($) {
                        $('[fill], [stroke], [style], [width], [height]')
                            .removeAttr('fill')
                            .removeAttr('stroke')
                            .removeAttr('style')
                            .removeAttr('width')
                            .removeAttr('height');
                    },
                    parserOptions: { xmlMode: true }
                })
            )
            .pipe($gp.replace('&gt;', '>'));
    };
    prettySvgs()
        .pipe(
            $gp.svgSprite({
                mode: {
                    symbol: {
                        sprite: '../sprite.svg',
                        example: {
                            dest: '../../../../tmp/spriteSvgDemo.html'
                        }
                    }
                }
            })
        )
        .pipe(gulp.dest(`${DIST_DIR}/images/icons`));
    prettySvgs().pipe(
        $gp.sassInlineSvg({
            destDir: `${SRC_DIR}/styles/icons/`
        })
    );
    done();
});

// просто переносим картинки
gulp.task('images', () => {
    return gulp
        .src([`${SRC_DIR}/images/**/*.*`, `!${SRC_DIR}/images/icons/*.*`])
        .pipe($gp.imagemin([
            $gp.imagemin.gifsicle({interlaced: true}),
            $gp.imagemin.jpegtran({progressive: true}),
            $gp.imagemin.optipng({optimizationLevel: 5}),
            $gp.imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ],
        {
            verbose: true
        }))
        .pipe(gulp.dest(`${DIST_DIR}/images/`));
});
  
// галповский вотчер
gulp.task('watch', () => {
    gulp.watch(`${SRC_DIR}/styles/**/*.scss`, gulp.series('styles'));
    gulp.watch(`${SRC_DIR}/views/**/*.pug`, gulp.series('pug'));
    gulp.watch(`${SRC_DIR}/images/**/*.*`, gulp.series('images'));
    gulp.watch(`${SRC_DIR}/scripts/**/*.js`, gulp.series('scripts'));
    gulp.watch(`${SRC_DIR}/fonts/*`, gulp.series('fonts'));
    gulp.watch('views/pages/*').on('change', reload);
});

gulp.task('default',
    gulp.series(
        'clean',
        gulp.parallel('styles', 'pug', 'images', 'fonts', 'scripts', 'svg'),
        gulp.parallel('watch', 'server')
    )
);