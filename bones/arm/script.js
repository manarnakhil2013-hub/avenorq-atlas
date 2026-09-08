// ============================================================
// AvenorQ Atlas — Humerus (EN, first-year medical level)
// ============================================================

const STRUCTURES = [
  {
    id: "head",
    name: "Head of Humerus",
    text: "A smooth, hemispherical surface at the proximal end that articulates with the glenoid cavity of the scapula, forming the glenohumeral joint.",
    pearl: "The head's large surface relative to the shallow glenoid explains why the shoulder has the greatest range of motion of any joint, at the cost of stability."
  },
  {
    id: "anatomical-neck",
    name: "Anatomical Neck",
    text: "A slight constriction separating the head from the greater and lesser tubercles; it marks the attachment line of the joint capsule.",
    pearl: "True anatomical neck fractures are rare but carry a high risk of avascular necrosis of the humeral head due to disruption of its blood supply."
  },
  {
    id: "surgical-neck",
    name: "Surgical Neck",
    text: "A narrowing just distal to the tubercles, at the junction of the head with the shaft. It is a common site of fracture, especially in older adults with osteoporosis.",
    pearl: "The axillary nerve and posterior circumflex humeral artery wrap around the surgical neck — both are at risk in surgical neck fractures or shoulder dislocations."
  },
  {
    id: "greater-tubercle",
    name: "Greater Tubercle",
    text: "A lateral bony prominence giving attachment to supraspinatus, infraspinatus, and teres minor — three of the four rotator cuff muscles.",
    pearl: "Greater tubercle fractures often accompany anterior shoulder dislocation and can be missed if not specifically checked for on X-ray."
  },
  {
    id: "lesser-tubercle",
    name: "Lesser Tubercle",
    text: "An anterior bony prominence giving attachment to subscapularis, the fourth rotator cuff muscle, which medially rotates the arm.",
    pearl: "Subscapularis is the strongest rotator cuff muscle and the main defense against anterior shoulder dislocation."
  },
  {
    id: "intertubercular-groove",
    name: "Intertubercular (Bicipital) Groove",
    text: "A deep groove between the greater and lesser tubercles that houses the tendon of the long head of biceps brachii.",
    pearl: "Tenderness directly over this groove on palpation is a classic sign of biceps tendinopathy or tendon instability."
  },
  {
    id: "deltoid-tuberosity",
    name: "Deltoid Tuberosity",
    text: "A roughened, V-shaped area on the lateral surface of the shaft that serves as the insertion point of the deltoid muscle.",
    pearl: "This landmark is used clinically to localize the standard site for intramuscular deltoid injections, just above its level."
  },
  {
    id: "radial-groove",
    name: "Radial (Spiral) Groove",
    text: "A shallow oblique groove on the posterior surface of the mid-shaft, through which the radial nerve and profunda brachii artery pass.",
    pearl: "Mid-shaft humeral fractures can injure the radial nerve here, producing wrist drop and loss of sensation over the dorsal first web space."
  },
  {
    id: "medial-epicondyle",
    name: "Medial Epicondyle",
    text: "A prominent projection at the distal medial end of the humerus, giving origin to the common flexor tendon of the forearm.",
    pearl: "The ulnar nerve runs directly posterior to the medial epicondyle — trauma here causes the familiar tingling of the \"funny bone\"."
  },
  {
    id: "lateral-epicondyle",
    name: "Lateral Epicondyle",
    text: "A projection at the distal lateral end of the humerus, giving origin to the common extensor tendon of the forearm.",
    pearl: "Chronic overload of this origin causes lateral epicondylitis, commonly known as \"tennis elbow\"."
  },
  {
    id: "trochlea",
    name: "Trochlea",
    text: "A medial, pulley-shaped articular surface at the distal humerus that articulates with the trochlear notch of the ulna.",
    pearl: "The trochlea guides elbow flexion and extension in a hinge motion and contributes to the normal \"carrying angle\" of the extended forearm."
  },
  {
    id: "capitulum",
    name: "Capitulum",
    text: "A rounded, lateral articular surface at the distal humerus that articulates with the head of the radius.",
    pearl: "Fractures of the capitulum are often seen after a fall on an outstretched hand and can be subtle on plain radiographs."
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
    question: "Which tubercle gives attachment to subscapularis?",
    options: ["Greater", "Lesser", "Medial", "Lateral"],
    correct: "Lesser"
  },
  {
    level: "Level 2 · Short phrase",
    question: "Which groove houses the tendon of the long head of biceps brachii?",
    options: ["Radial groove", "Intertubercular groove", "Anatomical neck", "Surgical neck"],
    correct: "Intertubercular groove"
  },
  {
    level: "Level 3 · Definition matching",
    question: "Which structure is described as the pulley-shaped medial articular surface that meets the ulna?",
    options: [
      "The capitulum, a rounded lateral surface for the radius",
      "The trochlea, a medial hinge surface for the ulna",
      "The deltoid tuberosity, on the lateral shaft",
      "The greater tubercle, a lateral bony prominence"
    ],
    correct: "The trochlea, a medial hinge surface for the ulna"
  },
  {
    level: "Level 4 · Clinical reasoning",
    question: "A mid-shaft humeral fracture results in wrist drop. Which nerve is most likely injured, and where?",
    options: [
      "Ulnar nerve, posterior to the medial epicondyle",
      "Radial nerve, in the radial (spiral) groove of the shaft",
      "Axillary nerve, at the surgical neck",
      "Musculocutaneous nerve, in the arm's anterior compartment"
    ],
    correct: "Radial nerve, in the radial (spiral) groove of the shaft"
  },
  {
    level: "Level 5 · Clinical vignette",
    question: "After a fall with a fracture at the surgical neck of the humerus, a patient loses sensation over the \"regimental badge\" area of the shoulder and cannot abduct the arm past 15 degrees. Which nerve and muscle pairing best explains this?",
    options: [
      "Axillary nerve injury causing deltoid paralysis, since it wraps around the surgical neck with the posterior circumflex humeral artery",
      "Radial nerve injury causing wrist extensor paralysis, since it runs in the radial groove of the shaft",
      "Suprascapular nerve injury causing supraspinatus paralysis, since it supplies the initial 15 degrees of abduction",
      "Ulnar nerve injury causing intrinsic hand muscle paralysis, since it passes behind the medial epicondyle"
    ],
    correct: "Axillary nerve injury causing deltoid paralysis, since it wraps around the surgical neck with the posterior circumflex humeral artery"
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
