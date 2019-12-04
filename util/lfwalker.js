const fs = require('fs')
const path = require('path')


exports.GetConfigs = function(dir, callback) {
    let configFiles = []
    fs.readdirSync(dir, {withFileTypes:true}).forEach(element => {
        if(element.isDirectory && element != "dynamic")
        {
            walk(element.name, (result) =>{
                configFiles.join(result)
            })
        }
        else if(path.extname(element).toLowerCase() == '.hjson')
        {
            configFiles.push(element)
        }
    });
    callback(configFiles);
  };

exports.LoadConfig = function(dir)
{
    return fs.readFileSync(path.normalize(dir), {encoding: 'utf8'});
}

