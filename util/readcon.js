const HJ        = require('hjson')
const fs        = require('fs')
const Path      = require('path')
const assign    = require('./assign')
module.exports = function(path, options)
{
    if( process.cfgg == null)
        process.cfgg = {}

    let foundConfigs = HJ.parse( fs.readFileSync(path).toString() )

    if(options.folderNamespaces){
        let properPath = Path.dirname(path)
                            .slice(Path.dirname(require.main.filename).length)
                            .slice(1)
                            .split('/')

            properPath
                .shift()
            properPath
                .join('/')
        //console.log(properPath)
        for(fileKey in foundConfigs)
        {

            let propertyPath = properPath + "/" + fileKey
            console.log(propertyPath)
            assign(process.cfgg, propertyPath, foundConfigs[fileKey])

        }
    }
    else{
        assign(process.cfgg, foundConfigs)
        
    }

}

