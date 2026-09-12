// ============================================================
// AvenorQ Atlas — Clavicle (EN, first-year medical level)
// ============================================================

const STRUCTURES = [
  {
    id: "sternal-end",
    name: "Sternal (Medial) End",
    text: "The rounded, enlarged medial end of the clavicle that articulates with the manubrium of the sternum at the sternoclavicular (SC) joint.",
    pearl: "The SC joint is the only true joint connecting the upper limb to the axial skeleton — every force transmitted through the arm ultimately passes through it."
  },
  {
    id: "acromial-end",
    name: "Acromial (Lateral) End",
    text: "The flattened lateral end of the clavicle that articulates with the acromion of the scapula, forming the acromioclavicular (AC) joint.",
    pearl: "A fall onto the point of the shoulder can injure the AC joint, producing the visible \"step deformity\" seen in AC joint separation."
  },
  {
    id: "conoid-tubercle",
    name: "Conoid Tubercle",
    text: "A rough prominence on the inferior surface of the lateral third of the clavicle, giving attachment to the conoid ligament, part of the coracoclavicular ligament complex.",
    pearl: "Rupture of the coracoclavicular ligament at this site is what allows the clavicle to displace upward in high-grade AC joint dislocations."
  },
  {
    id: "subclavian-groove",
    name: "Subclavian Groove",
    text: "A shallow groove on the inferior surface of the middle third of the clavicle that gives attachment to the subclavius muscle.",
    pearl: "The subclavius muscle and groove sit directly above the subclavian vessels and brachial plexus, cushioning them from a fractured clavicle above."
  },
  {
    id: "costal-tuberosity",
    name: "Costal Tuberosity",
    text: "A roughened area near the sternal end of the clavicle's inferior surface, giving attachment to the costoclavicular ligament, which anchors the clavicle to the first rib.",
    pearl: "This ligament is a key stabilizer of the sternoclavicular joint and limits excessive elevation of the clavicle during arm movement."
  },
  {
    id: "middle-third",
    name: "Junction of Middle and Lateral Thirds",
    text: "The clavicle has an S-shaped curve — convex forward medially, concave forward laterally. The junction between these two curves, in the middle-lateral third, is the thinnest and weakest part of the bone.",
    pearl: "This is the most common site of clavicle fracture, and the subclavian vessels and brachial plexus lying just beneath it are at risk of injury."
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
    question: "Which end of the clavicle articulates with the manubrium of the sternum?",
    options: ["Sternal", "Acromial", "Conoid", "Costal"],
    correct: "Sternal"
  },
  {
    level: "Level 2 · Short phrase",
    question: "Which structure on the clavicle gives attachment to the subclavius muscle?",
    options: ["Conoid tubercle", "Costal tuberosity", "Subclavian groove", "Acromial end"],
    correct: "Subclavian groove"
  },
  {
    level: "Level 3 · Definition matching",
    question: "Which structure is described as a rough prominence giving attachment to the conoid ligament?",
    options: [
      "The costal tuberosity, near the sternal end",
      "The conoid tubercle, on the lateral third",
      "The subclavian groove, on the middle third",
      "The acromial end, the flattened lateral tip"
    ],
    correct: "The conoid tubercle, on the lateral third"
  },
  {
    level: "Level 4 · Clinical reasoning",
    question: "Clavicle fractures occur most commonly at which point, and why?",
    options: [
      "The sternal end, because it is the widest part of the bone",
      "The acromial end, because it bears the most muscle attachments",
      "The junction of the middle and lateral thirds, because it is the thinnest point where the bone's curves change direction",
      "The costal tuberosity, because it is fixed rigidly to the first rib"
    ],
    correct: "The junction of the middle and lateral thirds, because it is the thinnest point where the bone's curves change direction"
  },
  {
    level: "Level 5 · Clinical vignette",
    question: "A patient falls onto an outstretched hand and sustains a fracture at the junction of the middle and lateral thirds of the clavicle. Which structures are most at risk of injury from the fracture fragments?",
    options: [
      "The subclavian vessels and brachial plexus, which lie directly beneath this segment of the clavicle",
      "The axillary nerve and posterior circumflex humeral artery, which wrap around the surgical neck of the humerus",
      "The long thoracic nerve, which runs along the lateral chest wall",
      "The radial nerve, which spirals around the humeral shaft"
    ],
    correct: "The subclavian vessels and brachial plexus, which lie directly beneath this segment of the clavicle"
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
