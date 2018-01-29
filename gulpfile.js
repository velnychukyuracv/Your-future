var gulp         = require('gulp'), // Подключаем Gulp
    less         = require('gulp-less'), //Подключаем Less пакет,
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления префиксов
    concatCss    = require('gulp-concat-css'),// Подключаем gulp-concat-css (для конкатенации файлов css)
    uglify       = require('gulp-uglifyjs'), // Подключаем пакет для минификации JS
    htmlmin      = require('gulp-html-minifier'),// Подключаем пакет для минификации HTML
    imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    del          = require('del'); // Подключаем библиотеку для удаления файлов и папок


//  таск Less+префиксы
gulp.task('less', function(){ // Создаем таск Less
    return gulp.src('app/less/*.less') // Берем источник
        .pipe(less()) // Преобразуем Less в CSS посредством gulp-less
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});


//  таск browser-sync
gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});


//  таск для минификации CSS
gulp.task('css-libs', ['less'], function() {
    return gulp.src('app/css/*.css') // Выбираем файл для минификации
        .pipe(concatCss ('style.css'))//Объединить все css
        .pipe(cssnano()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
    });

// таск для минификации HTML
gulp.task('minify', function() {
    gulp.src('app/*.html')// Выбираем файл для минификации
        .pipe(htmlmin({collapseWhitespace: true}))// Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app'))// Выгружаем в папку app
});

//таск для минификации Scripts
gulp.task('scripts', function() {
    return gulp.src(['app/js/*.js'])// Берем js
        .pipe(concat ('js.js'))//Объединить все css
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
});

// Наблюдение
gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('app/less/*.less', ['less']); // Наблюдение за less файлами в папке less
    gulp.watch('app/js/*.js', browserSync.reload); // Наблюдение за js файлами в папке js
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
});

// таск сжимаем изображения
gulp.task('img', function() {
    return gulp.src('app/img/*') // Берем все изображения из app
        .pipe(imagemin({ // Сжимаем их с наилучшими настройками
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});


// Удаляем папку dist перед сборкой
gulp.task('clean', function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});



// продакшен
gulp.task('build', ['clean', 'img', 'css-libs','scripts','minify'], function() {

    var buildCss = gulp.src(['app/css/*.min.css']) // Переносим библиотеки css в продакшен
        .pipe(gulp.dest('dist/css'))

    var buildJs = gulp.src(['app/js/*.min.js']) // Переносим скрипты в продакшен
        .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src(['app/*.min.html'])// Переносим библиотеки html в продакшен
        .pipe(rename('*.html'))
        .pipe(gulp.dest('dist'));

});
gulp.task('default', ['watch']);