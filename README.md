metalsmith-svg-sprite
=====================
[npmjs.com/package/metalsmith-svg-sprite](https://www.npmjs.com/package/metalsmith-svg-sprite)

A metalsmith plugin wrapping around the awesome [svg-sprite](https://github.com/jkphl/svg-sprite) module.

Usage
-----

First install `metalsmith-svg-sprite` as a development dependancy.

```
npm install --save-dev gulp-svg-sprite
```

Then add it to your `metalsmith.json`:

```
{
  "plugins": {
    "metalsmith-svg-sprite": {
      "mode": {
        "symbol": true
      }
    }
  }
}
```

Options
-------

You can also pass options to `metalsmith-svg-sprite` with the [Javascript API](https://github.com/segmentio/metalsmith#api) or the [CLI](https://github.com/segmentio/metalsmith#cli).

- [pattern](#pattern): only files that match this pattern will be processed (default `**/*.svg`)
- [keepFiles](#keepFiles): include the original svg files the files collection (default `false`)

pattern
-------
Only files that match this pattern will be processed. So this `metalsmith.json`:

```
{
  "plugins": {
    "metalsmith-svg-sprite": {
      "pattern": "icons/*.svg",
      "mode": {
        "symbol": true
      }
    }
  }
}
```
Would only include SVG files in the icons directory.

keepFiles
-------
If `true`, the original files will not be removed from the metalsmith files collection So this `metalsmith.json`:

```
{
  "plugins": {
    "metalsmith-svg-sprite": {
      "keepFiles": true,
      "mode": {
        "symbol": true
      }
    }
  }
}
```

Would keep the original SVG files - useful if the files are needed for other purposes.

svg-sprite
----------

Any unrecognized options will be passed to `svg-sprite`. See the [svg-sprite manual](https://github.com/jkphl/svg-sprite) for more information.

License
-------
CC0-1.0