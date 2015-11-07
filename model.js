  var flowChart = {
// q are the questions used to determine if you should quit your tech job.
// type: 1 are yes no questions, type 2: are responses you have to choose
// type: 3 is verdict button
  questionTitle: "What Should I Use the Crispr Gene-editing Tool to Build?",
  currentState: "",

  q: [
   {
      id: "q0",
      text: "Are you out to have fun, or are you one of those serious mutant-creature builders?",
      type: 2,
      opt1: "r0",
      opt2: "r1"
    },
    {
      id: "q1",
      text: "What are you trying to do?",
      type: 2,
      opt1: "r2",
      opt2: "r3",
      opt3: "r4"      
    },
    {
      id: "q2",
      text: "Are you good or evil?",
      type: 2,
      opt1: "r5",
      opt2: "r6"
    },
    {
      id: "q3",
      text: "How evil?",
      type: 2,
      opt1: "r16"
    },
    {
      id: "q4",
      text: "You sound pretty lazy",
      type: 2,
      opt1: "r8"
    },
    {
      id: "q5",
      text: "What are you most worried about?",
      type: 2,
      opt1: "r9",
      opt2: "r10",
      opt3: "r11",
      opt4: "r12",
      opt5: "r13"
    },
    {
      id: "q6",
      text: "Easy: Kittens.",
      type: 2,
      opt1: "r7"
    },
    {
      id: "q7",
      text: "Do you like dogs?",
      type: 2,
      opt1: "r14"
    },
    {
      id: "q8",
      text: "High-protein algae",
      type: 2,
      opt1: "r15"
    },
    {
      id: "q9",
      text: "What about dinosaurs, Dr. Moreau? The internet loves them too!",
      type: 3,
      opt1: "v4"
    },
    {
      id: "q10",
      text: "Yikes, there's only one thing suited to that much evil!",
      type: 3,
      opt1: "v3"
    }
  ],
// r are the responses given to certain questions
  r: [
    {
      id: "r0",
      text: "Fun!",
      opt1: "q1"
    },
    {
      id: "r1",
      text: "Oh, I'm serious",
      opt1: "q2"
    },
    {
      id: "r2",
      text: "Win the internet!",
      opt1: "q6"
    },
    {
      id: "r3",
      text: "Make myself laugh",
      opt1: "v0"
    },
    {
      id: "r4",
      text: "Make my life easier",
      opt1: "q4"
    },
    {
      id: "r5",
      text: "Good",
      opt1: "q5"
    },
    {
      id: "r6",
      text: "Evil",
      opt1: "q3"
    },
    {
      id: "r7",
      text: "Don't those already exist?",
      opt1: "q9"
    },
    {
      id: "r8",
      text: "Oh, I am!",
      opt1: "q7"
    },
    {
      id: "r9",
      text: "That we're ruining the planet.",
      opt1: "v1"
    },
    {
      id: "r10",
      text: "That we've given up on dreaming big.",
      opt1: "v1"
    },
    {
      id: "r11",
      text: "The economy",
      opt1: "v1"
    },
    {
      id: "r12",
      text: "Feeding the hungry",
      opt1: "q8"
    },
    {
      id: "r13",
      text: "White Walkers",
      opt1: "v2"
    },
    {
      id: "r14",
      text: "They're the best.",
      opt1: "v5"
    },
    {
      id: "r15",
      text: "Hey, I Still have taste buds!",
      opt1: "v6"
    },
    {
      id: "r16",
      text: "Super-Duper evil. Check this out: Mwahahahaha!",
      opt1: "q10"
    }
  ],
// v are the possible verdicts to the question "should i quit my tech job?"
  v: [
    {
      id: "v0",
      text: "Monkeypotamus"
    },
    {
      id: "v1",
      text: "40-foot-tall Elon Musk"
    },
    {
      id: "v2",
      text: "Dragons. Lots of dragons."
    },
    {
      id: "v3",
      text: "Funyunflavored dr pepper"
    },
    {
      id: "v4",
      text: "Kittysauraus"
    },
    {
      id: "v5",
      text: "Butler Dog"
    },
    {
      id: "v6",
      text: "Pizza flavored algae"
    }
  ]
};