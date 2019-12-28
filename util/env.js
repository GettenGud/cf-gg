module.exports = function()
{
    if(process.argv.includes('--env'))
    {
        
        let envVal = process.argv[process.argv.indexOf('--env') + 1]
        if(process.cfgg['.env'][envVal] != null)
        {
            process.cfgg['.env'] = process.cfgg['.env'][envVal]
        }

    }
}