const Walker     = require('./util/lfwalker')
const Path       = require('path')
const readConfig = require('./util/readcon')

const env        = require('./util/env')
const logg       = require('./util/logg')

var cfgg = null

module.exports = function(options){
    
    // If we find configs, we just send em out
    if(cfgg != null)
        return cfgg
    //Otherwise, time to compile the configuration...
    else
    {
        cfgg = {}
        let configfiles

        if(options == null)
            options = {}
    
    
        if(options.path)
            configfiles = Walker.scanConfigs(options.path)
        else
            configfiles = Walker.scanConfigs( Path.dirname(require.main.filename) + '/config/')
        
        //configfiles has a list of files to parse

        for(var file in configfiles)
        {
            let config = configfiles[file]
            let configObject = readConfig(config, options)
            for(var configEntry in configObject)
            {
                cfgg[configEntry] = configObject[configEntry]
            }
        }
    
        env()
        logg()
    
        if(options.bindToProcess)
            process.cfgg = cfgg
    
        return cfgg
    }

}


