module.exports = function(){
    for (let i = 0; i < array.length; i++) {
        const arg = array[i];

        let launch = {}
        let flags = []

        let arg2Prefix = arg.substring(0,1)
        if( arg2Prefix == '--')
        {
            launch[arg.substring(2,arg.length - 3)] = i + 1            
            i++;
        }
        else if(arg2Prefix[0] == '-')
        {
            flags.push(arg.substring(1, arg.length - 2))
        }
        
    }
}