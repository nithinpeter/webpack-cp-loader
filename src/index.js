const loaderUtils = require('loader-utils');

module.exports = function(source) {
  const { pattern = '' } = loaderUtils.getOptions(this);
  const regex = new RegExp(
    `\/[*]{1}start:${pattern}:(.+?)[*]{1}\/` +
      `([\\s\\S]*?)` +
      `\/[*]{1}end:${pattern}:(.+?)[*]{1}\/`,
    'gm'
  );

  while ((result = regex.exec(source)) !== null) {
    const storyId = result[1];
    const matchStr = result[2];

    const replaceRegex = new RegExp(
      `\/[*]{1}story:` + storyId + `[*]{1}\/`,
      'g'
    );
    source = source.replace(replaceRegex, matchStr);
  }

  this.callback(null, source);
  return;
};

// type options = {
//   pattern: string,
// };

// matchStartPattern: /*start:[pattern]:[id]*/
// matchEndPattern: /*end:[pattern]:[id]*/

// replacePattern: /*[pattern]:[id]*/
