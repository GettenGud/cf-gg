module.exports = function(){
    let launch = {}
    let flags = []
    for (let i = 0; i < process.argv.length; i++) {
        const arg = process.argv[i];


        let arg2Prefix = arg.substring(0,2)
        if( arg2Prefix == '--')
        {
            let argName = arg.substring(2,arg.length)
            launch[argName] = process.argv[i + 1]            
            i++;
        }
        else if(arg2Prefix[0] == '-')
        {
            flags.push(arg.substring(1))
        }
        
    }

    return {'.args':{ launch: launch, flags: flags}}
}