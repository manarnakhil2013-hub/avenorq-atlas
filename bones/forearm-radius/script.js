// ============================================================
// AvenorQ Atlas — Radius (EN, first-year medical level)
// ============================================================

const STRUCTURES = [
  {
    id: "head-of-radius",
    name: "Head of Radius",
    text: "A disc-shaped proximal end of the radius that articulates with the capitulum of the humerus and, medially, with the radial notch of the ulna. It rotates during forearm pronation and supination.",
    pearl: "Radial head fractures are common after a fall onto an outstretched hand and are assessed radiographically using the radiocapitellar line."
  },
  {
    id: "radial-tuberosity",
    name: "Radial Tuberosity",
    text: "A roughened prominence just distal to the neck of the radius, on its medial side, giving insertion to the tendon of biceps brachii.",
    pearl: "Because biceps brachii inserts here, sudden forced extension of a flexed, supinated elbow can avulse this tuberosity — a distal biceps tendon injury."
  },
  {
    id: "interosseous-border",
    name: "Interosseous Border",
    text: "A sharp ridge running along the medial side of the radial shaft, giving attachment to the interosseous membrane that connects the radius and ulna along their length.",
    pearl: "The interosseous membrane resists longitudinal force transmitted up the radius, redistributing load toward the ulna and the elbow."
  },
  {
    id: "styloid-process-radius",
    name: "Styloid Process of the Radius",
    text: "A pointed projection at the distolateral end of the radius, palpable at the wrist, giving attachment to brachioradialis.",
    pearl: "Normally the radial styloid projects about 1 cm more distally than the ulnar styloid; a reversal of this relationship is a classic sign of a distal radius fracture."
  },
  {
    id: "ulnar-notch",
    name: "Ulnar Notch",
    text: "A concave surface on the distomedial aspect of the radius that articulates with the head of the ulna, forming the distal radioulnar joint.",
    pearl: "This joint, together with the triangular fibrocartilage complex (TFCC), allows the radius to rotate around the relatively fixed ulna during pronation and supination."
  },
  {
    id: "dorsal-tubercle",
    name: "Dorsal (Lister's) Tubercle",
    text: "A bony ridge on the posterior surface of the distal radius that acts as a pulley, redirecting the tendon of extensor pollicis longus toward the thumb.",
    pearl: "After a distal radius fracture, the extensor pollicis longus tendon can rupture where it rubs against this tubercle, sometimes weeks after the injury has healed."
  }
];

// ---------- Structure rail ----------
const listEl = document.getElementById("structureList");
const descEyebrow = document.getElementById("descEyebrow");
const descTitle = document.getElementById("descTitle");
const descBody = document.getElementById("descBody");
const pearlBox = document.getElementById("pearlBox");
const pearlText = document.getElementById("pearlText");

function renderList() {
  listEl.innerHTML = "";
  STRUCTURES.forEach((s) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "process-item";
    btn.textContent = s.name;
    btn.setAttribute("data-id", s.id);
    btn.addEventListener("click", () => selectStructure(s.id));
    li.appendChild(btn);
    listEl.appendChild(li);
  });
}

function selectStructure(id) {
  const structure = STRUCTURES.find((s) => s.id === id);
  if (!structure) return;

  document.querySelectorAll(".process-item").forEach((el) => {
    el.classList.toggle("active", el.getAttribute("data-id") === id);
  });

  descEyebrow.textContent = "Selected structure";
  descTitle.textContent = structure.name;
  descBody.textContent = structure.text;

  pearlText.textContent = structure.pearl;
  pearlBox.hidden = false;
}

// ============================================================
// QUIZ — 5 fixed questions, progressive difficulty
// ============================================================

const QUIZ = [
  {
    level: "Level 1 · One-word answer",
    question: "Which part of the radius articulates with the capitulum of the humerus?",
    options: ["Head", "Neck", "Tuberosity", "Styloid"],
    correct: "Head"
  },
  {
    level: "Level 2 · Short phrase",
    question: "Which structure on the radius gives insertion to the tendon of biceps brachii?",
    options: ["Ulnar notch", "Radial tuberosity", "Dorsal tubercle", "Interosseous border"],
    correct: "Radial tuberosity"
  },
  {
    level: "Level 3 · Definition matching",
    question: "Which structure is described as a bony ridge that redirects the tendon of extensor pollicis longus?",
    options: [
      "The dorsal (Lister's) tubercle, on the posterior distal radius",
      "The radial tuberosity, on the proximal shaft",
      "The ulnar notch, on the distomedial radius",
      "The styloid process, at the distolateral tip"
    ],
    correct: "The dorsal (Lister's) tubercle, on the posterior distal radius"
  },
  {
    level: "Level 4 · Clinical reasoning",
    question: "A fall onto an outstretched hand commonly fractures which part of the radius, assessed using the radiocapitellar line?",
    options: [
      "Head of radius",
      "Radial tuberosity",
      "Interosseous border",
      "Ulnar notch"
    ],
    correct: "Head of radius"
  },
  {
    level: "Level 5 · Clinical vignette",
    question: "After a fall on an outstretched hand, a patient has a \"dinner fork\" deformity of the wrist. X-ray shows the radial styloid is now level with, rather than more distal than, the ulnar styloid. What does this finding indicate?",
    options: [
      "A distal radius fracture with dorsal displacement, since the normal 1 cm distal projection of the radial styloid is lost",
      "An isolated ulnar styloid fracture, since the radial styloid position is unaffected by radius injuries",
      "A proximal radioulnar joint dislocation, since only the radial head position affects the styloid relationship",
      "A normal finding, since the two styloid processes are expected to lie at the same level"
    ],
    correct: "A distal radius fracture with dorsal displacement, since the normal 1 cm distal projection of the radial styloid is lost"
  }
];

let quizIndex = 0;
let currentQuiz = null;
let selectedOption = null;
let score = 0;
let answered = false;

const difficultyEl = document.getElementById("quizDifficulty");
const questionEl = document.getElementById("quizQuestion");
const optionsEl = document.getElementById("quizOptions");
const scoreDisplay = document.getElementById("scoreDisplay");
const scoreTotal = document.getElementById("scoreTotal");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const feedbackEl = document.getElementById("quizFeedback");

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function loadQuestion() {
  scoreTotal.textContent = QUIZ.length;

  if (quizIndex >= QUIZ.length) {
    difficultyEl.textContent = "Complete";
    questionEl.textContent = "Well done — you've completed all 5 questions.";
    optionsEl.innerHTML = "";
    checkBtn.disabled = true;
    nextBtn.disabled = true;
    feedbackEl.textContent = `Final score: ${score} / ${QUIZ.length}`;
    return;
  }

  currentQuiz = QUIZ[quizIndex];
  selectedOption = null;
  answered = false;
  feedbackEl.textContent = "";
  checkBtn.disabled = false;
  nextBtn.disabled = false;

  difficultyEl.textContent = currentQuiz.level;
  questionEl.textContent = currentQuiz.question;

  optionsEl.innerHTML = "";
  shuffle(currentQuiz.options).forEach((choice) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.textContent = choice;
    btn.setAttribute("data-value", choice);
    btn.addEventListener("click", () => {
      if (answered) return;
      document.querySelectorAll(".quiz-option").forEach((o) => o.classList.remove("selected"));
      btn.classList.add("selected");
      selectedOption = choice;
    });
    optionsEl.appendChild(btn);
  });
}

function checkAnswer() {
  if (!selectedOption || answered) {
    feedbackEl.textContent = selectedOption ? "" : "Select an answer first.";
    return;
  }
  answered = true;
  const correct = selectedOption === currentQuiz.correct;

  document.querySelectorAll(".quiz-option").forEach((o) => {
    const value = o.getAttribute("data-value");
    if (value === currentQuiz.correct) o.classList.add("correct");
    else if (value === selectedOption) o.classList.add("incorrect");
  });

  if (correct) {
    score++;
    scoreDisplay.textContent = score;
    feedbackEl.textContent = "✅ Correct.";
  } else {
    feedbackEl.textContent = "❌ Incorrect — the correct answer is highlighted.";
  }
}

function nextQuestion() {
  quizIndex++;
  loadQuestion();
}

checkBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", nextQuestion);

// ---------- Init ----------
renderList();
loadQuestion();
