// ============================================================
// AvenorQ Atlas — Ulna (EN, first-year medical level)
// ============================================================

const STRUCTURES = [
  {
    id: "olecranon",
    name: "Olecranon",
    text: "The large, curved projection at the proximal posterior end of the ulna, forming the bony point of the elbow. It fits into the olecranon fossa of the humerus during elbow extension and gives insertion to triceps brachii.",
    pearl: "Inflammation of the bursa overlying the olecranon, known as \"student's elbow,\" is a common condition from prolonged leaning on the elbow."
  },
  {
    id: "coronoid-process",
    name: "Coronoid Process",
    text: "A triangular projection at the proximal anterior end of the ulna that fits into the coronoid fossa of the humerus during elbow flexion, and gives attachment to part of brachialis.",
    pearl: "A fracture of the coronoid process alongside a radial head fracture and elbow dislocation is known as the \"terrible triad\" — a marker of severe elbow instability."
  },
  {
    id: "trochlear-notch",
    name: "Trochlear Notch",
    text: "A large, C-shaped articular surface formed by the olecranon and coronoid process together, which wraps around and articulates with the trochlea of the humerus.",
    pearl: "This notch creates a true hinge joint at the elbow, allowing flexion and extension but no rotation — rotation instead happens at the proximal radioulnar joint."
  },
  {
    id: "radial-notch",
    name: "Radial Notch",
    text: "A smooth articular facet on the lateral side of the proximal ulna that articulates with the head of the radius, forming the proximal radioulnar joint.",
    pearl: "This joint, stabilized by the annular ligament, allows the head of the radius to rotate in place during forearm pronation and supination."
  },
  {
    id: "ulnar-tuberosity",
    name: "Tuberosity of the Ulna",
    text: "A roughened area just distal to the coronoid process on the anterior surface of the ulna, giving attachment to part of the brachialis muscle.",
    pearl: "Brachialis is the primary flexor of the elbow regardless of forearm position, making this attachment site functionally important in elbow flexion strength."
  },
  {
    id: "head-of-ulna",
    name: "Head of Ulna",
    text: "The rounded distal end of the ulna that articulates with the ulnar notch of the radius, forming the distal radioulnar joint, and is separated from the carpal bones by an articular disc.",
    pearl: "The head of the ulna becomes visibly prominent on the back of the wrist during forearm pronation — a useful landmark in wrist examination."
  },
  {
    id: "styloid-process",
    name: "Styloid Process of the Ulna",
    text: "A short conical projection from the posteromedial part of the distal ulna, giving attachment to the ulnar collateral ligament of the wrist.",
    pearl: "A fracture of the ulnar styloid often accompanies a distal radius fracture and raises suspicion for an associated triangular fibrocartilage complex (TFCC) injury."
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
    question: "Which proximal projection of the ulna forms the bony point of the elbow?",
    options: ["Olecranon", "Coronoid", "Styloid", "Tuberosity"],
    correct: "Olecranon"
  },
  {
    level: "Level 2 · Short phrase",
    question: "Which structure on the ulna articulates with the head of the radius?",
    options: ["Trochlear notch", "Radial notch", "Ulnar tuberosity", "Head of ulna"],
    correct: "Radial notch"
  },
  {
    level: "Level 3 · Definition matching",
    question: "Which structure is described as the C-shaped surface formed by the olecranon and coronoid process together?",
    options: [
      "The radial notch, on the lateral proximal ulna",
      "The trochlear notch, which articulates with the humeral trochlea",
      "The styloid process, at the distal end",
      "The head of the ulna, at the wrist"
    ],
    correct: "The trochlear notch, which articulates with the humeral trochlea"
  },
  {
    level: "Level 4 · Clinical reasoning",
    question: "Inflammation of the bursa overlying which bony prominence is commonly called \"student's elbow\"?",
    options: [
      "Coronoid process",
      "Radial notch",
      "Olecranon",
      "Styloid process"
    ],
    correct: "Olecranon"
  },
  {
    level: "Level 5 · Clinical vignette",
    question: "After a posterior elbow dislocation, imaging shows an associated radial head fracture and a fracture of a triangular projection on the anterior proximal ulna. Which structure is fractured, and what does this combination of injuries indicate?",
    options: [
      "The coronoid process — this combination is known as the \"terrible triad\" and indicates severe elbow instability",
      "The olecranon — this combination indicates an isolated triceps avulsion injury",
      "The styloid process — this combination indicates a distal radioulnar joint injury",
      "The radial notch — this combination indicates isolated proximal radioulnar joint instability"
    ],
    correct: "The coronoid process — this combination is known as the \"terrible triad\" and indicates severe elbow instability"
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
