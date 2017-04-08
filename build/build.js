require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')
const Fs = require("fs");
const fileExists = require('file-exists');

var spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
    if (err) throw err
    webpack(webpackConfig, function(err, stats) {
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')

        console.log(chalk.cyan('  Build complete.\n'))
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ));
        // 手动的将html的文件变成gzip
        if (config.build.productionGzip) {
            // 需要gzip
            Fs.readFile(path.join(__dirname, "../dist/index.html"), function(err, content) {
                content = content.toString();
                let reg = /(src|href)\=([^\s\<\>]+)/gi;
                content = content.replace(reg, function(all, type, src) {
                    if (fileExists.sync(path.join(path.join(__dirname, "../dist"), src + ".gz"))) {
                        src = `${src}.gz`;
                    }
                    return `${type}=${src}`;
                });
                Fs.writeFile(path.join(__dirname, "../dist/index.html"), content);
            });
        }
    })
})