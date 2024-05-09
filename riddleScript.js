let riddles = [
  {question: 'What word contains all of the twenty-six letters?', answer: 'alphabet' }, {question: 'Which word in the dictionary is spelled incorrectly?', answer: 'incorrectly' }, {question: 'What color can you eat?', answer: 'orange' }, {question: 'What has a head, a tail, is brown, and has no legs?', answer: 'penny' }, {question: 'I’m tall when I’m young, and I’m short when I’m old. What am I?', answer: 'candle' }, {question: 'What can travel around the world while staying in a corner?', answer: 'stamp' }, {question: 'What has keys but can’t open locks?', answer: 'piano' }, {question: 'What has one eye but can’t see?', answer: 'needle' } ];

$('.startBtn').on('click', function() {
    // Select and display a random riddle
    let selectedRiddle = riddles[Math.floor(Math.random() * riddles.length)];
    $('.theRiddle').text(selectedRiddle.question);
    $('.result').empty(); 
});

$('.submitBtn').on('click', function() {
    let playerGuess = $('.answer-section').val();
    
    if (playerGuess === '') {
      $('.result').text('Please guess or enter "quit" to exit.');
    } else {
      let selectedRiddle = riddles.find(r => r.question === $('.theRiddle').text());
      if (playerGuess.toLowerCase() === 'quit') {
        $('.result').text('Thanks for playing! Goodbye.');
        $('.theRiddle').empty();
      } else if (playerGuess.toLowerCase() === selectedRiddle.answer) {
        $('.result').text('CORRECT! You win!\nThe answer is: ' + playerGuess);
        $('.theRiddle').empty();
      } else {
        $('.result').text('Incorrect answer. Try again.');
      }
    } 
});