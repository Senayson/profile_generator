const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let string = '';
rl.question('What\'s your name? Nicknames are also acceptable? ', (answer1) => {
  string += answer1;
  console.log(`You answered: ${answer1}`);
  rl.question('What\'s an activity you like doing?', (answer2) => {
    string += answer2;
    console.log(`You answered: ${answer2}`);
    rl.question('What do you listen to while doing that?', (answer3) => {
      string += answer3;
      console.log(`You answered: ${answer3}`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer4) => {
        string += answer4;
        console.log(`You answered: ${answer4}`);
        rl.question('What\'s your favourite thing to eat for that meal?', (answer5) => {
          string += answer5;
          console.log(`You answered: ${answer5}`);
          rl.question('Which sport is your absolute favourite?', (answer6) => {
            string += answer6;
            console.log(`You answered: ${answer6}`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer7) => {
              string += answer7;
              console.log(`You answered: ${answer7}`);
              rl.close();
              console.log(`I am ${answer1} and I enjoy ${answer2}. I love listening to ${answer3} while ${answer2}. ${answer4} is my favourite meal of the day and I love having ${answer5} for it. ${answer6} is my absolute favourite sport. What is your superpower? Well, I guess I have to say ${answer7}.`);
            });
          });
        });
      });
    });
  });
});