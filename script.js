// This project will be an Art Piece Random Idea Generator!

// It will have 3 string pieces that make up the final idea


const ideas = {
    medium: ['movie', 'painting', 'song', 'statue', 'poem', 'novel', 'mixed media piece', 'play', 'video game'],
    topic: ['the future of cities', 'the human nature', 'senses interpolation', 'the year 2077', 'your loveliest memory', 'a difficulty you\'re going through'],
    method: ['in only 30 days', 'with a technique you\'ve never tried before', 'in only 24 hours starting NOW', 'with the help of another artist friend', 'as an open collaborative project'],

};


// Then the message will be created!

const messageFactory = () => {
    let pickedMedium = ideas.medium[Math.floor(Math.random() * ideas.medium.length)];
    let pickedTopic = ideas.topic[Math.floor(Math.random() * ideas.topic.length)];
    let pickedMethod = ideas.method[Math.floor(Math.random() * ideas.method.length)];

    console.log(`Here's an Art Piece Idea: Why don't you create a ${pickedMedium} about ${pickedTopic} ${pickedMethod}? `);

};

messageFactory();