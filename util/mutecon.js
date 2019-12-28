exports.ConsumeConfiguration(path, callback)
{
    let consumedProperty = _.get(Config, path, null)
    
    callback(consumedProperty)

    if(consumedProperty != null)
        del(consumedProperty)
    
}