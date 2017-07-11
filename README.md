# CP-Loader - (Copy-Pase Loader)
This webpack loader will let you search for patterns in your files and copy it to a different place in the same file.

### Usage
##### The file on which you want to the apply changes
```js
/*start:story:1*/
const Button = () => {
  console.log('this is button code');
};
/*end:story:1*/

/*start:story:2*/
const Button2 = () => {
  console.log('this is button code');
};
/*end:story:2*/
const stories = storiesOf('Button')
                    .add('Simple', Button, `/*story:1*/ `)
                    .add('Simple', Button, `/*story:2*/ `);
```
##### Your webpack config.
```js
module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'cp-loader',
          options: {
            pattern: 'story',
          },
        },
      },
    ],
  },
```