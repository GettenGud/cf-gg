const Walker    = require('./util/lfwalker')
const HJ        = require('hjson')

var Config = {}

exports.global = () => {return Config}

//Search broadly for configuration files and populate the config cache
exports.ScanConfigs = (dir) =>
{

    LoadIntCfg((cfg) => {
        Walker.GetConfigs(dir, callback => {
            callback.forEach(element => {
                this.ReadConfig(dir + element)
            });
        })
    })
}

exports.ReadConfig = (path) =>
{
    let foundConfigs = HJ.parse( Walker.LoadConfig(path) )

    Object.assign(Config, foundConfigs )
}


/** Load the configuration for the configuration tool itself.
 * 
 * @param {*} callback 
 */
function LoadIntCfg(callback) {
    let config = Walker.LoadConfig(__dirname + '\\config.hjson')
    callback( HJ.parse(config) )
}


