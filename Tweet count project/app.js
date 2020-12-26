let tweet = prompt("Compose your tweet");
let sliceTweet = tweet.slice(0, 140);


alert(sliceTweet + "\nYour Original Size was " + tweet.length);