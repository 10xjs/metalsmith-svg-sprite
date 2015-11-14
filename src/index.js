import SVGSprite from 'svg-sprite';
import isUtf8 from 'is-utf8';
import match from 'multimatch';
import omit from 'lodash.omit';
import path from 'path';

function check(file, files, pattern) {
  const data = files[file];
  if (isUtf8(data.contents) && pattern && match(file, pattern)[0]) {
    return true;
  }

  return false;
}

export default function(options = {}) {
  const { pattern = '**/*.svg', keepFiles = false, dest = '.' } = options;
  const config = omit(options, 'pattern');

  return (files, metalsmith, done) => {
    const spriter = new SVGSprite(config);

    const matches = Object.keys(files)
      .filter(file => check(file, files, pattern));

    if (matches.length) {
      matches.forEach(file => {
        spriter.add(
          path.resolve(file),
          path.basename(file),
          files[file].contents.toString()
        );

        if (!keepFiles) {
          delete files[file];
        }
      });

      spriter.compile((err, result) => {
        if (err) {
          done(err);
        } else {
          Object.keys(result).forEach(mode => {
            const resources = result[mode];
            Object.keys(resources).forEach(resource => {
              const data = resources[resource];
              const fileName = path.join(dest, data.relative);
              files[fileName] = data;
            });
          });
          done();
        }
      });
    } else {
      done();
    }
  };
}
