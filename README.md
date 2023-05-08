# Without HPL - works

```bash
yarn install
./node_modules/.bin/webpack --mode production
```

Output

```bash
$ ./node_modules/.bin/webpack --mode production
asset main.js 88.2 KiB [compared for emit] [minimized] (name: main) 1 related asset
runtime modules 221 bytes 1 module
./src/index.js 271 bytes [built] [code generated]
./node_modules/jquery/dist/jquery.js 286 KiB [built] [code generated]
webpack 5.82.0 compiled successfully in 2657 ms
```

# With HPL - breaks

```bash
sed -i 's@^//@@g' src/index.js
./node_modules/.bin/webpack --mode production
```

No output shown here — there are many errors.

