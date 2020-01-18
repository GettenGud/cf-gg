module.exports = function( ) {
    try{
        if(require.main.require('logg') != null)
            console.log("found logger")
        

        let logConfig = {
            paths:{
                report: "",
                warn: "",
                error: "",
            },
            handlers:{
                log:[console.log],
                warn:[console.log],
                report:[console.log]

            }
        }
        try{
            let logConfig = process.cfgg['.env'].services.logger
        }
        catch(error){
            console.log('no log configuration found...')
        }

    }
    catch(error){
        console.log("logg wasn't found, no biggie...")
    }
}