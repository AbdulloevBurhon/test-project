import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../../../../../components/ui/button/button";

/* QUESTIONS (пока локально) */
const QUESTIONS = [
  {
    question: "Что такое React?",
    answers: ["Библиотека UI", "Язык", "Фреймворк", "База данных"],
    correct: 0,
  },
  {
    question: "Что такое JSX?",
    answers: ["HTML", "Синтаксис React", "Фреймворк", "База"],
    correct: 1,
  },
];

function IqQuestions() {
  const { category } = useParams();
  const navigate = useNavigate();

  /* UI STATES */
  const [showInfo, setShowInfo] = useState(false);
  const [showExit, setShowExit] = useState(false);

  /* GAME STATES */
  const [started, setStarted] = useState(false);
  const [level, setLevel] = useState(null);

  const [time, setTime] = useState(60);
  const [trophies, setTrophies] = useState(0);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);

  const current = QUESTIONS[index];

  /* TIMER */
  useEffect(() => {
    if (!started) return;

    if (time <= 0) {
      resetGame();
      alert("⏱ Время вышло!");
      return;
    }

    const timer = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [started, time]);

  /* RESET */
  const resetGame = () => {
    setStarted(false);
    setIndex(0);
    setSelected(null);
    setResult(null);
    setLevel(null);
    setTrophies(0);
  };

  /* BACK */
  const handleBack = () => {
    if (started) {
      setShowExit(true);
    } else {
      navigate(-1);
    }
  };

  /* START */
  const startGame = (lvl) => {
    setLevel(lvl);
    setStarted(true);
    setTime(60);
    setTrophies(0);
    setIndex(0);
    setSelected(null);
    setResult(null);
  };

  /* ANSWER */
  const chooseAnswer = (i) => {
    if (result) return;

    setSelected(i);

    if (i === current.correct) {
      setResult("correct");
      setTrophies((p) => p + 10);

      setTimeout(nextQuestion, 900);
    } else {
      setResult("wrong");
    }
  };

  /* NEXT */
  const nextQuestion = () => {
    if (index + 1 >= QUESTIONS.length) {
      alert("🏆 Тест завершён!");
      resetGame();
      return;
    }

    setIndex((p) => p + 1);
    setSelected(null);
    setResult(null);
    setTime((t) => t + 5);
  };

  return (
    <div className="p-4 space-y-6 sm:p-6 dark:text-white">
      {/* BACK */}
      <button
        onClick={handleBack}
        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        ← Назад
      </button>

      {/* LEVEL SELECT */}
      {!started && (
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-center">Выбери уровень</h2>

          <div className="space-y-4">
            <LevelButton
              color="blue"
              text="🟢 Лёгкий"
              onClick={() => startGame("easy")}
            />

            <LevelButton
              color="gold"
              text="🟡 Средний"
              center
              onClick={() => startGame("medium")}
            />

            <LevelButton
              color="red"
              text="🔴 Сложный"
              onClick={() => startGame("hard")}
            />
          </div>

          {/* INFO BUTTON */}
          <button
            onClick={() => setShowInfo(true)}
            className="block mx-auto text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            ℹ Как работает игра?
          </button>
        </div>
      )}

      {/* GAME */}
      {started && (
        <div className="space-y-5">
          {/* TOP BAR */}
          <div className="flex items-center justify-between px-4 py-2 shadow rounded-xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur">
            <div>⏱ {time}s</div>

            <div className="font-medium text-yellow-500">🏆 {trophies}</div>

            <button
              onClick={() => setShowInfo(true)}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              ℹ
            </button>
          </div>

          {/* QUESTION CARD */}
          <div className="p-5 border shadow-xl rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur">
            <h4 className="mb-4 text-lg font-semibold">{current.question}</h4>

            <div className="space-y-3">
              {current.answers.map((item, i) => (
                <Answer
                  key={i}
                  text={item}
                  active={selected === i}
                  correct={current.correct === i}
                  result={result}
                  onClick={() => chooseAnswer(i)}
                />
              ))}
            </div>

            {result === "wrong" && (
              <p className="mt-3 text-sm text-red-500">❌ Неправильно</p>
            )}

            {result === "correct" && (
              <p className="mt-3 text-sm text-green-500">✅ Верно</p>
            )}
          </div>

          {result === "wrong" && (
            <Button fullWidth onClick={nextQuestion}>
              Далее →
            </Button>
          )}
        </div>
      )}

      {/* INFO MODAL */}
      {showInfo && (
        <Modal onClose={() => setShowInfo(false)}>
          <h3 className="mb-3 text-lg font-bold">📘 Как работает игра</h3>

          <div className="space-y-2 text-sm">
            <p>🎯 Ты прокачиваешь знания и рейтинг.</p>

            <p>⏱ Отвечай до конца времени.</p>

            <p>🏆 За правильные ответы — кубки.</p>

            <p>❌ Если время выйдет — награды нет.</p>

            <p>📈 Кубки повышают:</p>

            <ul className="pl-5 list-disc">
              <li>Мировой рейтинг 🌍</li>
              <li>Страну 🇷🇺</li>
              <li>Лигу 💎</li>
            </ul>

            <p>🚀 Чем выше — тем круче профиль!</p>
          </div>
        </Modal>
      )}

      {/* EXIT MODAL */}
      {showExit && (
        <Modal onClose={() => setShowExit(false)}>
          <h3 className="mb-3 text-lg font-bold">⚠ Выйти из игры?</h3>

          <p className="mb-4 text-sm">Ты потеряешь текущий прогресс.</p>

          <div className="flex gap-3">
            <Button
              fullWidth
              variant="secondary"
              onClick={() => setShowExit(false)}
            >
              Остаться
            </Button>

            <Button
              fullWidth
              variant="danger"
              onClick={() => {
                setShowExit(false);
                resetGame();
                navigate(-1);
              }}
            >
              Выйти
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}

/* MODAL */
function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/40">
      <div className="w-full max-w-md p-5 bg-white shadow-2xl dark:bg-zinc-900 rounded-2xl">
        <div className="flex justify-end mb-2">
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-red-500"
          >
            ✕
          </button>
        </div>

        {children}

        <button
          onClick={onClose}
          className="w-full py-2 mt-4 font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700"
        >
          Понятно 👍
        </button>
      </div>
    </div>
  );
}

/* LEVEL */
function LevelButton({ text, onClick, color, center }) {
  const colors = {
    blue: "from-blue-500 to-blue-700",
    red: "from-red-500 to-red-700",
    gold: "from-yellow-400 to-orange-400 text-black",
  };

  return (
    <button
      onClick={onClick}
      className={`
        w-full py-3 rounded-full font-semibold
        bg-gradient-to-r ${colors[color]}
        shadow-xl transition-all
        hover:scale-105 hover:shadow-2xl
        active:scale-95
        ${center ? "scale-105" : ""}
      `}
    >
      {text}
    </button>
  );
}

/* ANSWER */
function Answer({ text, onClick, active, correct, result }) {
  let style =
    "border-zinc-300 dark:border-zinc-700 hover:bg-blue-50 dark:hover:bg-zinc-800";

  if (result === "wrong") {
    if (active && !correct) {
      style = "border-red-500 bg-red-500/10 shadow";
    }

    if (correct) {
      style = "border-green-500 bg-green-500/10 shadow";
    }
  }

  if (result === "correct" && correct) {
    style = "border-green-500 bg-green-500/10 shadow";
  }

  return (
    <button
      onClick={onClick}
      disabled={result !== null}
      className={`
        w-full px-4 py-2.5 text-left
        rounded-xl border
        transition-all duration-200
        ${style}
      `}
    >
      {text}
    </button>
  );
}

export default IqQuestions;
