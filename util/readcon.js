const HJ        = require('hjson')
const fs        = require('fs')
const Path      = require('path')
const assign    = require('./assign')
module.exports = function(path, options)
{
    let config = {}

    let foundConfigs = HJ.parse( fs.readFileSync(path).toString() )


    if(options.loadToRoot == null || options.loadToRoot == false || options.folderNamespaces){
        let properPath = Path.dirname(path)
                            .slice(Path.dirname(require.main.filename).length)
                            .slice(1)
                            .split('/')

            properPath
                .shift()
            properPath
                .join('/')
        for(fileKey in foundConfigs)
        {

            let propertyPath = properPath + "/" + fileKey
            assign(config, propertyPath, foundConfigs[fileKey])

        }
    }
    else{
        config = foundConfigs 
        
    }

    return config

}

