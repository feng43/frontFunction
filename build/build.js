'use strict'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('./webpack.conf.js')
const rootPath = path.resolve(__dirname, '../')
const packageConfig = require('../package.json')
new Promise((resolve, reject) => {
    // 构建全量压缩包
    const building = ora('building for production...')
    building.start()
    rm(path.resolve(rootPath, 'min', `${packageConfig.name}.min.js`), err => {
        if (err) throw (err)
        webpack(config, function (err, stats) {
            if (err) throw (err)
            building.stop()
            process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n')
            console.log(chalk.cyan('  Build complete.\n'))
        })
    })
})