# Release Notes

## 0.0.1-aLPHA2
Small issue with argument binding solved.

## 0.0.1-aLPHA1
The first 'usable' build. Still has a ways to go before I'd call it quality software but it is coherent now.

### Changes
- FolderNamespaces is default functionality now you can use the `loadToRoot` option to load all found configurations in sub-folders to the root config object.
- Binding is no longer to the global variable `process.cfgg` by default. It's just as easy to require cf-gg and call it as a method to get at the value. If you still want the process binding use the option `bindToProcess`
### Features
- cf-gg now support argument flag and parameter parsing for its host application. The built configuration object will contain a child object with the flags and parameters stored separately.
  
  **Example:**

I start my application with `node ./index.js --insult poopiehead -b -asd --yep yepyep`
```js
{
  '.args': {
    launch: { insul: 'poopiehead', ye: 'yepyep' },
    flags: [ 'b', 'asd' ]
  }
}
```

### Known Issues
Argument parser was a little too fresh and didn't capture argument names properly.