let btn = document.querySelector(".btn");
let cont = document.querySelector(".container p");

const jokes = {
  joke1: "Why don't scientists trust atoms? Because they make up everything!",
  joke2: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  joke3: "How does a penguin build its house? Igloos it together!",
  joke4: "Why did the scarecrow win an award? Because he was outstanding in his field!",
  joke5: "I used to play piano by ear, but now I use my hands and fingers.",
  joke6: "What's orange and sounds like a parrot? A carrot!",
  joke7: "I only know 25 letters of the alphabet. I don't know y.",
  joke8: "Why couldn't the bicycle stand up by itself? Because it was two-tired!",
  joke9: "Parallel lines have so much in common. It's a shame they'll never meet.",
  joke10: "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you.",
  joke11: "Why don't skeletons fight each other? They don't have the guts.",
  joke12: "How do you organize a space party? You planet.",
  joke13: "I'm reading a book on anti-gravity. It's impossible to put down.",
  joke14: "Why did the bicycle fall over? Because it was two-tired.",
  joke15: "Why did the scarecrow become a successful motivational speaker? Because he was outstanding in his field!",
  joke16: "What do you call fake spaghetti? An impasta.",
  joke17: "Why did the physics teacher break up with the biology teacher? There was no chemistry.",
  joke18: "What's a vampire's favorite fruit? A blood orange.",
  joke19: "Why did the coffee file a police report? It got mugged.",
  joke20: "I told my computer I needed a break. Now it won't stop sending me vacation ads.",
  joke21: "Why did the math book look sad? Because it had too many problems.",
  joke22: "What's a programmer's favorite place in the house? The mouse pad.",
  joke23: "Why don't scientists trust atoms anymore? Because they make up everything, even excuses.",
  joke24: "How does a snowman get around? By riding an icicle.",
  joke25: "Why did the scarecrow become a successful politician? Because he was outstanding in his field of promises.",
  joke26: "What's a skeleton's least favorite room in the house? The living room.",
  joke27: "Why was the belt arrested? Because it was holding up a pair of pants!",
  joke28: "What do you call a factory that makes good products? A satisfactory.",
  joke29: "Why did the tomato turn red? Because it saw the salad dressing!",
  joke30: "What's a pirate's favorite programming language? Arrr-duino."
};


  btn.addEventListener("click", makeJoke);
  
  function makeJoke() {
    const jokeKeys = Object.keys(jokes);
    const ranKeys =  jokeKeys[Math.floor(Math.random()*jokeKeys.length)];
    let ranJokes = jokes[ranKeys];
    cont.innerHTML = `"${ranJokes}"`;
  } 