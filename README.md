# cf-gg
> Quick, easy hjson based configuration loading with some small extensions for things you might want to use those configs with.


**CF-GG is still heavily under development.** The core features are working well enough for me to use them, the way I use this tool is what you'll find documented here.

cf-gg is a quick, easy, simple, all of the good things- configurations loader for your systems.

It is designed for you to bring in and load configuration out the ./config directory of your project and to work with no setup.


## Usage

### Basic Usage
Call the module to load all hjson configuration files from a directory and populate process with them.

 ```js
 const cfgg = require('cf-gg')

 let configObject = cfgg()
 
 ```

### First Call of cfgg()
The first time you call cfgg it loads your configuration files from the defined directory, by default it looks into your base applications `/config/` directory. It then parses any hjson it finds under that directory and any child directories into a configuration object.

Subsequent calls of cfgg() will return the configuration object itself. You cannot force the files to reload using cfgg() multiple times.

### Providing Options
The module can take arguments in the form of an options object. The following options are available:

| option | type | default | behaviour |
| ------- | :----------: | :---: |:----- |
| loadToRoot | bool | false | If true, all configs are loaded into the root object instead of being distributed into sub-objects by directory name. |
| path | string | `/config/` directory relative to require.main file. | Changes the path that cf-gg looks for configurations in. This is an absolute path so use __dirname to get a different sub-directory of your project. |
| bindToProcess | bool | false | If set true your configuration object can be access globally at `process.cfgg`.


 ### Folder based namespaces
Originally a feature and now the default behavior. This creates parent objects for the configurations it finds based on what directory it finds them in. This way if you have many configurations or categories of them, you can create folders to organize them instead of creating more tab-levels in your documents.

If you want all of your configurations to simply go to the root level of the configuration object, provide the option `loadToRoot:true` to your initial `cfgg()` call


 ```js
 const cfgg = require('cf-gg')

var path = 

 cfgg(__dirname + '/config/', options)
 
 ```

 ## Environment Configurations

It will also handle different environment configurations if you want. Write your different environment configurations in your `config/.env/` directory and provide your application with the `--env [envname]` argument and your configuration object will have a `.env` property will be set to the matching sub-configuration.

