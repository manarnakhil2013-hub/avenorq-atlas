// ============================================================
// ScapAtlas — data & interactions (EN, first-year medical level)
// ============================================================

const STRUCTURES = [
  {
    id: "acromion",
    name: "Acromion",
    text: "A flat bony process extending laterally from the spine of the scapula, arching over the humeral head. It articulates with the clavicle to form the acromioclavicular (AC) joint.",
    pearl: "A fall onto the point of the shoulder can sprain or dislocate the AC joint — the most common cause of \"shoulder separation\" in young athletes."
  },
  {
    id: "coracoid",
    name: "Coracoid Process",
    text: "A hook-like projection arising from the superior border of the scapula, curving anteriorly like a crow's beak. It gives attachment to the short head of biceps brachii, coracobrachialis, and pectoralis minor.",
    pearl: "During anterior shoulder dislocation, the coracoid process is a key palpable landmark used to guide safe reduction techniques."
  },
  {
    id: "glenoid",
    name: "Glenoid Cavity",
    text: "A shallow, pear-shaped depression on the lateral angle of the scapula that receives the head of the humerus, forming the glenohumeral (shoulder) joint.",
    pearl: "Its shallow depth allows the shoulder its huge range of motion, but this is also why the shoulder is the most frequently dislocated joint in the body."
  },
  {
    id: "spine",
    name: "Spine of Scapula",
    text: "A prominent ridge running obliquely across the posterior surface of the scapula, dividing it into the supraspinous and infraspinous fossae. It ends laterally as the acromion.",
    pearl: "The spine is easily palpable in a thin patient and is used as a surface landmark to localize the supraspinatus and infraspinatus muscles clinically."
  },
  {
    id: "supraspinous",
    name: "Supraspinous Fossa",
    text: "The concave area superior to the spine of the scapula; it is the site of origin of supraspinatus, one of the four rotator cuff muscles.",
    pearl: "Supraspinatus initiates the first 15° of arm abduction and is the most commonly torn rotator cuff tendon due to its narrow subacromial passage."
  },
  {
    id: "infraspinous",
    name: "Infraspinous Fossa",
    text: "The broader depression inferior to the spine of the scapula; it is the site of origin of infraspinatus, which laterally rotates the humerus.",
    pearl: "Weak lateral rotation with a positive external rotation lag sign suggests infraspinatus tendon pathology."
  },
  {
    id: "medial-border",
    name: "Medial (Vertebral) Border",
    text: "The long, thin edge of the scapula running parallel to the vertebral column; it gives attachment to rhomboid major, rhomboid minor, and serratus anterior.",
    pearl: "Damage to the long thoracic nerve paralyzes serratus anterior, producing a \"winged scapula\" — the medial border lifts away from the thoracic wall."
  },
  {
    id: "inferior-angle",
    name: "Inferior Angle",
    text: "The lowest point of the scapula, formed by the junction of the medial and lateral borders; partly covered by latissimus dorsi.",
    pearl: "The inferior angle normally lies at the level of the T7 spinous process — a quick landmark for counting ribs and vertebral levels on physical exam."
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
// Level 1: one-word answer  →  Level 5: full-sentence answer
// ============================================================

const QUIZ = [
  {
    level: "Level 1 · One-word answer",
    question: "Which process articulates with the clavicle at the AC joint?",
    options: ["Acromion", "Coracoid", "Glenoid", "Spine"],
    correct: "Acromion"
  },
  {
    level: "Level 2 · Short phrase",
    question: "Which fossa gives origin to supraspinatus?",
    options: ["Infraspinous fossa", "Subscapular fossa", "Supraspinous fossa", "Glenoid cavity"],
    correct: "Supraspinous fossa"
  },
  {
    level: "Level 3 · Definition matching",
    question: "Which structure is described as a shallow, pear-shaped depression that articulates with the head of the humerus?",
    options: [
      "The coracoid process, a hook-like anterior projection",
      "The glenoid cavity, on the lateral angle of the scapula",
      "The spine of the scapula, a posterior ridge",
      "The inferior angle, the lowest point of the bone"
    ],
    correct: "The glenoid cavity, on the lateral angle of the scapula"
  },
  {
    level: "Level 4 · Clinical reasoning",
    question: "A patient cannot initiate the first 15° of shoulder abduction. Which structure's origin is most likely affected?",
    options: [
      "Infraspinous fossa, origin of infraspinatus",
      "Supraspinous fossa, origin of supraspinatus",
      "Medial border, origin of rhomboid muscles",
      "Coracoid process, origin of coracobrachialis"
    ],
    correct: "Supraspinous fossa, origin of supraspinatus"
  },
  {
    level: "Level 5 · Clinical vignette",
    question: "After axillary surgery, a patient develops winging of the scapula with the medial border lifting off the thoracic wall on wall-push testing. Which nerve and muscle pairing best explains this finding?",
    options: [
      "Long thoracic nerve injury causing serratus anterior weakness, so the medial border loses its stabilizing pull against the rib cage",
      "Axillary nerve injury causing deltoid weakness, so the arm cannot be abducted past 90 degrees",
      "Suprascapular nerve injury causing supraspinatus weakness, so abduction cannot be initiated",
      "Musculocutaneous nerve injury causing biceps weakness, so elbow flexion is impaired"
    ],
    correct: "Long thoracic nerve injury causing serratus anterior weakness, so the medial border loses its stabilizing pull against the rib cage"
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
