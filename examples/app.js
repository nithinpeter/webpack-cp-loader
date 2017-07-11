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
const stories = createStories('Button').add('Simple', Button, `/*story:1*/ `);
