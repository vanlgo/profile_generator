const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              console.log(`Your name is ${answer1}, and you like ${answer2}, while you listen to ${answer3}.\nYou think the best time for a meal is ${answer4}, and your favourite thing to eat then is ${answer5}.\nYour absolute favourite sport is ${answer6}, and your superpower is ${answer7}!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});