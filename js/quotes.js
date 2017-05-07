
var quotes = [
    {
      quote: "I am one with the Force. The Force is with me.",
      character: "Chirrut Imwe",
      film: "Rogue One"
    },
    {
      quote: "The Dark Side of the Force is the pathway to many abilities some consider to be… Unnatural.",
      character: "Senator Palpatine",
      film: "Revenge of the Sith"
    },
    {
      quote: "Who's more foolish? The fool or the fool who follows him?",
      character: "Obi-Wan Kenobi",
      film: "A New Hope"
    },
    {
      quote: "In my experience, there is no such thing as luck",
      character: "Han Solo",
      film: "A New Hope"
    },
    {
      quote: "I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.",
      character: "Count Dooku",
      film: "Attack of the Clones"
    },
    {
      quote: "Great, kid! Don't get cocky!",
      character: "Han Solo",
      film: "A New Hope"
    },
    {
      quote: "Be careful not to choke on your aspirations.",
      character: "Darth Vader",
      film: "Rogue One"
    },
    {
      quote: "Strike me down and I will become more powerful than you could possibly imagine.",
      character: "Obi-Wan Kenobi",
      film: "A New Hope"
    },
    {
      quote: "It's a trap!",
      character: "Admiral Ackbar",
      film: "Return of the Jedi"
    },
    {
      quote: "Aren't you a little short for a storm trooper?",
      character: "Leia Organa",
      film: "A New Hope"
    },
    {
      quote: "Why you stuck-up, half-witted, scruffy-looking nerf-herder!",
      character: "Leia Organa",
      film: "The Empire Strikes Back"
    },
    {
      quote: "You must unlearn what you have learned.",
      character: "Yoda",
      film: "The Empire Strikes Back"
    },
    {
      quote: "Lando’s not a system he’s a man!",
      character: "Han Solo",
      film: "The Empire Strikes Back"
    },
    {
      quote: "These aren’t the droids you’re looking for...",
      character: "Obi-Wan Kenobi",
      film: "A New Hope"
    },
    {
      quote: "Traveling through hyperspace ain't like dusting crops, farm boy.",
      character: "Han Solo",
      film: "A New Hope"
    },
    {
      quote: "If there's a bright center to the universe, you're on the planet that it's farthest from.",
      character: "Luke Skywalker",
      film: "A New Hope"
    },
    {
      quote: "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
      character: "Yoda",
      film: "The Phantom Menace"
    },
    {
      quote: "Do or do not. There is no try.",
      character: "Yoda",
      film: "The Empire Strikes Back"
    },
    {
      quote: "You must unlearn what you have learned.",
      character: "Yoda",
      film: "The Empire Strikes Back"
    },
    {
      quote: "Difficult to see. Always in motion is the future.",
      character: "Yoda",
      film: "The Empire Strikes Back"
    },
    {
      quote: "Always pass on what you have learned.",
      character: "Yoda",
      film: "Return of the Jedi"
    },
    {
      quote: "If once you start down the dark side, forever will it dominate your destiny, consume you it will, as it did Obi-Wan's apprentice.",
      character: "Yoda",
      film: "Return of the Jedi"
    },
    {
      quote: "I’ve been waiting for you, Obi-Wan. We meet again, at last. The circle is now complete. When I left you, I was but the learner; now I am the master.",
      character: "Darth Vader",
      film: "A New Hope"
    },
    {
      quote: "Many of the truths that we cling to depend on our point of view.",
      character: "Obi-Wan Kenobi",
      film: "Return of the Jedi"
    },
    {
      quote: "I find your lack of faith disturbing.",
      character: "Darth Vader",
      film: "A New Hope"
    },
    {
      quote: "The ability to speak does not make you intelligent.",
      character: "Qui-Gon Jinn",
      film: "The Phantom Menace"
    },
    {
      quote: "Your focus determines your reality.",
      character: "Qui-Gon Jinn",
      film: "The Phantom Menace"
    },
    {
      quote: "Somebody has to save our skins.",
      character: "Leia Organa",
      film: "A New Hope"
    },
    {
      quote: "I’ve got a bad feeling about this.",
      character: "Everyone",
      film: "Every Star Wars Film"
    },
    {
      quote: "Remember, concentrate on the moment. Feel, don't think, use your instincts.",
      character: "Qui-Gon Jinn",
      film: "The Phantom Menace"
    },
    {
      quote: "Help me Obi-Wan Kenobi, you're my only hope.",
      character: "Leia Organa",
      film: "A New Hope"
    },
    {
      quote: "Be mindful of your thoughts, Anakin. They will betray you.",
      character: "Obi-Wan Kenobi",
      film: "Attack of the Clones"
    },
    {
      quote: "Laugh it up, Fuzz ball.",
      character: "Han Solo",
      film: "The Empire Strikes Back"
    },
    {
      quote: "Sir, the possibility of successfully navigating an asteroid field is approximately 3,720 to 1.",
      character: "C-3PO",
      film: "The Empire Strikes Back"
    },
    {
      quote: "Sometimes we must let go of our pride and do what is requested of us.",
      character: "Padme Amidala",
      film: "Attack of the Clones"
    },
    {
      quote: "In a dark place we find ourselves, and a little more knowledge lights our way.",
      character: "Yoda",
      film: "Revenge of the Sith"
    },
    {
      quote: "Women Always Figure Out The Truth. Always.",
      character: "Han Solo",
      film: "The Force Awakens"
    },
    {
      quote: "Chewie, We're home.",
      character: "Han Solo",
      film: "The Force Awakens"
    },
    {
      quote: "The force is strong with this one.",
      character: "Darth Vader",
      film: "A New Hope"
    },
    {
      quote: "Great shot kid, that was one in a million.",
      character: "Han Solo",
      film: "A New Hope"
    },
    {
      quote: "Remember...the Force will be with you, always.",
      character: "Obi-Wan Kenobi",
      film: "A New Hope"
    },
    {
      quote: "Death is a natural part of life. Rejoice for those around you who transform into the Force.",
      character: "Yoda",
      film: "Revenge of the Sith"
    },
    {
      quote: "Your eyes can deceive you; don't trust them.",
      character: "Obi-Wan Kenobi",
      film: "A New Hope"
    },
    {
      quote: "So this is how liberty dies…with thunderous applause.",
      character: "Padme Amidala",
      film: "Revenge of the Sith"
    },
    {
      quote: "Never tell me the odds.",
      character: "Han Solo",
      film: "The Empire Strikes Back"
    },
];
