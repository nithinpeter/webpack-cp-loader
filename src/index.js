const loaderUtils = require('loader-utils');

module.exports = function(source) {
  const options = loaderUtils.getOptions(this);
  const regex = /\/\*start:story:(.+?)\*\/\n([\s\S]*?)\/\*end:story:(.+?)\*\//gm;

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

// TODO

// type options = {
//   multiple: boolean,
//   pattern: string,
// };

// matchStartPattern: /*start:[pattern]:[id]*/
// matchEndPattern: /*end:[pattern]:[id]*/

// replacePattern: /*[pattern]:[id]*/
