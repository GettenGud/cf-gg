const Walker     = require('./util/lfwalker')
const Path       = require('path')
const readConfig = require('./util/readcon')
const env        = require('./util/env')

module.exports = function(options){
    if(process.cfgg)
        return process.cfgg

    let configfiles

    if(options && options.path)
        configfiles = Walker.scanConfigs(options.path)
    else
        configfiles = Walker.scanConfigs( Path.dirname(require.main.filename) + '/config/')
    
        for(var file in configfiles)
        {
            let config = configfiles[file]
            readConfig(config, options)
    
        }
    env()
}


