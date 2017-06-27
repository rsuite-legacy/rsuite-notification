const build = require('rsuite-theme');
const outPutDir = 'resources/css';
const themes = {
                   'default': '#522e9b',
                   'blue': '#29a7e1',
                   'purple': '#9c27b0'
               };

build.importResources({
    paths: [
        'fonts/**/*.*'
    ],
    dist: outPutDir
});


Object.keys(themes).forEach((key)=>{
    build.palette({
            baseColor: themes[key],
            src: 'css/rsuite.min.css',
            dist: `${outPutDir}/rsuite-${key}.css`
        });
});
