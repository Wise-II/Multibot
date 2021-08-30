### [node-sleep](https://github.com/warren-bank/node-sleep)

#### Description:

A configurable setTimeout().. nothing more. For use in npm scripts.

#### Installation:

```bash
npm install --save-dev @warren-bank/node-sleep
```

#### Usage:

```bash
node-sleep <integer>  # milliseconds
```

#### Example:

_package.json_

```javascript
{
  "scripts": {
    "bundle:main":  "webpack --config webpack.config.main.js",

    "dev:server": "webpack-dev-server --config webpack.config.renderer.js",
    "dev:client": "electron .",

    "dev:spawn:server": "npm run bundle:main && npm run dev:server",
    "dev:spawn:client": "node-sleep 5000 && npm run dev:client",

    "start": "concurrently --kill-others npm:dev:spawn:*"
  }
}
```

#### Legal:

* copyright: [Warren Bank](https://github.com/warren-bank)
* license: [GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt)
