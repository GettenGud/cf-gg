const fs = require('fs')


//Search broadly for configuration files and populate the config cache
exports.scanConfigs = (dir) =>
{
    let configs = scanDirectory(dir)


    return configs
}

// Scan a folder, scan all subfolders recursively and retrieve
// a list of configuration files.
function scanDirectory(path){
    let items = fs.readdirSync(path,{withFileTypes:true})
        
        let foundfiles = []

        for(var item in items)
        {
            let file = items[item]

            console.log(items[item].name)
            if(file.isDirectory())
                foundfiles = foundfiles.concat(scanDirectory(path + file.name + "/"))
            else
                foundfiles.push(path + file.name)
        }

        return foundfiles


}