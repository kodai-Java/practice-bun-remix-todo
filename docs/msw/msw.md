# MAW

ESMがサポートされていないのエラーが発生する
bun,remixが新しすぎるから？
```
bun msw init ./public

$ msw init ./public --no-save init
/home/marius/repository/work/practice-bun-remix-todo/node_modules/cliui/build/index.cjs:291
const stringWidth = require('string-width');
                    ^

Error [ERR_REQUIRE_ESM]: require() of ES Module /home/marius/repository/work/practice-bun-remix-todo/node_modules/string-width/index.js from /home/marius/repository/work/practice-bun-remix-todo/node_modules/cliui/build/index.cjs not supported.
Instead change the require of index.js in /home/marius/repository/work/practice-bun-remix-todo/node_modules/cliui/build/index.cjs to a dynamic import() which is available in all CommonJS modules.
    at Object.<anonymous> (/home/marius/repository/work/practice-bun-remix-todo/node_modules/cliui/build/index.cjs:291:21) {
  code: 'ERR_REQUIRE_ESM'
}

Node.js v20.11.1
error: script "msw" exited with code 1
```
### issue
https://github.com/mswjs/msw/issues/1201
