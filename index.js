'use strict';

const questionBank = [
    'Given the choice of anyone in the world, whom would you want as a dinner guest?',
    'Would you like to be famous? In what way?',
    'Before making a phone call, do you ever rehearse what you’re going to say? Why?',
    'What would constitute a perfect day for you?',
    'When did you last sing to yourself? What was that song?',
    'Do you have a go to song that plays in your head most often? What song is that? Why do you like that song so much?',
    'If you were able to live to the age of 90 and retain either the mind or body of a 30-year old for the last 60 years of your life, which would you choose?',
    'Name three things you both appear to have in common.',
    'For what in your life do you feel most grateful?',
    'If you could change anything about the way you were raised, what would it be?',
    'If you could wake up tomorrow having gained one quality or ability, what would it be?',
    'If a crystal ball could tell you the truth about yourself, your life, the future, or anything else, what would you want to know?',
    'Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?',
    'What is the greatest accomplishment of your life?',
    'What do you value most in a friendship?',
    'If you found out that the world was ending in a year, and so you had effectively a year left, would you change anything about the way you are living now? Why?',
    'What are your warmest childhood memories?',
    'Complete this sentence: “I wish I had someone with whom I could share…”',
    'What for you is too serious to be joked about?',
    'Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be? Why?',
    'What makes a person a good travelling companion?',
    'In what respect are you still the same person you were as a child?',
    'What has been the most useful career advice you have ever had?',
    'When do you feel shy?',
    'If I asked the childhood version of you what job they wanted to do, what would they say?',
    'If you couldn’t fail, what would you try to do at work or in life?',
    'What work were you doing the last time you forgot time altogether?',
    'Who was your childhood hero?',
    'Do you prefer a view of the desert or the mountains or the sea? Why?',
    'Have you ever travelled (on a holiday) on your own?',
    'What\'s the best gift you\'ve ever gotten?',
    'If you have to live somewhere else, where would that be?',
    'Many people have at least one side project. Is that true for you? If yes, are you working on anything at the moment that you are okay to share?',
    'What do you regret not doing, due to fear?',
    'What are you currently reading/ watching/ listening to?',
    'What brings out your competitive streak?',
    'Other than your phone, to what are you a bit addicted and why?',
    'Do you have a secret talent?',
    'In what way might you be a difficult person to work with/ for?',
    'What\'s one thing you\'d love to be an expert at?',
    'What do you do to get rid of stress?',
    'What is the most useful thing you own?',
    'What is your favourite way to waste time?',
    'What would be the soundtrack of your life? If you had an intro music that followed your entrance to office/ family functions/ as you walked into a restaurant, what would that be?',
    'What is your favourite season? Paint me a picture of what makes it your favourite',
    'If you had the option to change your name, what would you change it to?',
    'What smell brings back great memories for you?',
    'What is your plan in case of a zombie apocalypse?',
    'What is a place most people won\'t want to visit, but you would want to?',
];

const randomlySelectQuestion = (questions) => {
    const index = Math.floor(Math.random() * questions.length);
    return questions[index];
};

const buttonRoll = document.getElementById('button-roll');
const rolledQuestion = document.getElementById('rolled-question');

const roll = () => {
    const selectedQuestion = randomlySelectQuestion(questionBank);

    rolledQuestion.innerText = selectedQuestion;
};

buttonRoll.addEventListener('click', roll);
buttonRoll.addEventListener('mouseup', () => { buttonRoll.blur(); });
