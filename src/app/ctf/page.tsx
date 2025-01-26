"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const challenges = [
  {
    id: 1,
    question:
      "Decode the following hex string to get the flag: 464C41477B7468656E657874666C61677D",
    answer: "FLAG{thenextflag}",
    hint: "Think about encoding format for the given text",
  },
  {
    id: 2,
    question:
      "The flag is hidden in the following text, where each alphabet is replaced with its next alphabet in the English language sequence. 'GMBH{Xfmdpnfupdu}'. Decode this Caesar Cipher",
    answer: "FLAG{WelcomeToCTF}",
    hint: "Caesar Cipher is a substitution cipher where each alphabet is replaced by the next one",
  },
  {
    id: 3,
    question:
      "Find the flag in this sentence: 'The password is 'secretpassword' and the flag is 'FLAG{SimpleCTFFlag}'! What is the flag?'",
    answer: "FLAG{SimpleCTFFlag}",
    hint: "Look for a recognizable format like 'FLAG{}'",
  },
  {
    id: 4,
    question:
      "What is the port used by FTP (File Transfer Protocol) for data transfer? Answer in the following format 'Port: number'",
    answer: "Port: 20",
    hint: "Common port numbers are often associated with standard protocols",
  },
  {
    id: 5,
    question: "What is the flag in this reverse string: '}{dlo_xob_eht_GALF'",
    answer: "FLAG{the_box_old}",
    hint: "Try reversing the given string.",
  },
  {
    id: 6,
    question:
      "What is the name of the tool that can be used for capturing network packets and provides details about them?",
    answer: "Wireshark",
    hint: "It is a well-known name in network analysis and troubleshooting",
  },
];

const shuffleArray = (array: any[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const CTFGame: React.FC = () => {
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [shuffledChallenges, setShuffledChallenges] = useState(
    shuffleArray(challenges).slice(0, 3)
  );
  const [gameStarted, setGameStarted] = useState(false);
  const currentChallenge = shuffledChallenges[currentChallengeIndex];
  const [inactivityTimer, setInactivityTimer] = useState<NodeJS.Timeout | null>(
    null
  );
  const [hintOpen, setHintOpen] = useState(false);
  const [incorrectAnswer, setIncorrectAnswer] = useState(false);

  const handleAnswerSubmit = () => {
    if (
      userAnswer.trim().toLowerCase() === currentChallenge.answer.toLowerCase()
    ) {
      setScore(score + 1);
      setFeedback("Correct! You captured the flag");
      if (currentChallengeIndex < shuffledChallenges.length - 1) {
        setCurrentChallengeIndex(currentChallengeIndex + 1);
        setIncorrectAnswer(false); // Reset incorrect answer flag
      } else {
        setTimerRunning(false);
        setGameOver(true);
      }
    } else {
      setFeedback("Incorrect! Try again. Hint: Think carefully!");
      setIncorrectAnswer(true); // Mark answer as incorrect
    }
    setUserAnswer("");
    clearTimeout(inactivityTimer as NodeJS.Timeout);
    setInactivityTimer(null);
    setInactivityTimer(
      setTimeout(() => {
        setTimerRunning(false);
        setGameOver(true);
      }, 120000)
    );
  };

  const handleSkipQuestion = () => {
    setFeedback("You skipped this question!");
    if (currentChallengeIndex < shuffledChallenges.length - 1) {
      setCurrentChallengeIndex(currentChallengeIndex + 1);
      setIncorrectAnswer(false); // Reset incorrect answer flag
    } else {
      setTimerRunning(false);
      setGameOver(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAnswerSubmit();
    }
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (timerRunning) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
    if (!timerRunning) {
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
        setInactivityTimer(null);
      }
    }
    return () => clearInterval(intervalId);
  }, [timerRunning]);

  useEffect(() => {
    if (gameStarted) {
      const shuffled = shuffleArray(challenges).slice(0, 3);
      setShuffledChallenges(shuffled);
      setCurrentChallengeIndex(0);
      setScore(0);
      setFeedback("");
      setTime(0);
      setTimerRunning(true);
      setGameOver(false);
      setInactivityTimer(
        setTimeout(() => {
          setTimerRunning(false);
          setGameOver(true);
        }, 120000)
      );
    }
  }, [gameStarted]);

  const handleRetry = () => {
    const shuffled = shuffleArray(challenges);
    setShuffledChallenges(shuffled);
    setCurrentChallengeIndex(0);
    setScore(0);
    setFeedback("");
    setTime(0);
    setTimerRunning(true);
    setGameOver(false);
    setHintOpen(false);
    setInactivityTimer(
      setTimeout(() => {
        setTimerRunning(false);
        setGameOver(true);
      }, 120000)
    );
  };

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleHintClick = () => {
    setHintOpen(!hintOpen);
  };

  const rules = [
    "1. Try to solve the given challenges.",
    "2. You will get a point for every correct answer.",
    "3. If there is no interaction for 2 mins the test will stop.",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-trueGray-900 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200 text-center">
          Capture the Flag Lite
        </h2>
        {!gameStarted ? (
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-gray-700 dark:text-gray-300">
              <h3 className="text-xl font-semibold text-center mb-4">Rules</h3>
              <ul className="list-disc pl-5">
                {rules.map((rule, index) => (
                  <li
                    key={index}
                    className="mb-2 text-gray-700 dark:text-gray-300"
                  >
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
            <Button
              onClick={handleStartGame}
              size="lg"
              className="bg-blue-500 text-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
            >
              Start
            </Button>
          </div>
        ) : (
          <>
            <div className="bg-gray-200 dark:bg-gray-700 rounded-md p-4 mb-6">
              <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line">
                {currentChallenge.question}
              </p>
            </div>

            <div className="flex flex-col items-center mb-4">
              <input
                type="text"
                className="border rounded-md p-2 mb-3 text-black w-full max-w-md dark:bg-gray-700 dark:text-gray-200"
                placeholder="Your answer"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyDown={handleKeyPress}
                disabled={gameOver}
              />
              {!gameOver && (
                <Button
                  onClick={handleHintClick}
                  variant="outline"
                  className="bg-yellow-500 text-white hover:bg-yellow-600"
                >
                  Hint
                </Button>
              )}
              {hintOpen && (
                <p className="text-yellow-300 mt-2 text-center">
                  {currentChallenge.hint}
                </p>
              )}
              <Button
                onClick={handleAnswerSubmit}
                className="bg-indigo-600 text-white hover:bg-indigo-700 mt-2"
                disabled={gameOver}
              >
                Submit Answer
              </Button>

              {/* Skip Button */}
              {incorrectAnswer && !gameOver && (
                <Button
                  onClick={handleSkipQuestion}
                  variant="outline"
                  className="mt-2 bg-red-500 text-white hover:bg-red-600"
                >
                  Skip Question
                </Button>
              )}
            </div>

            <p className="text-white mt-2 text-center">{feedback}</p>
            <p className="text-white mt-2 text-center">Score: {score}</p>
            <p className="text-white mt-2 text-center">Time: {time}s</p>
            {gameOver && (
              <div className="flex justify-center mt-4 gap-4">
                <Button
                  onClick={handleRetry}
                  size="lg"
                  variant="outline"
                  className="bg-blue-500 text-white hover:bg-blue-600"
                >
                  Retry
                </Button>
                <Button
                  onClick={() => {
                    window.location.href = "/register?source=ctf";
                  }}
                  size="lg"
                  className="bg-green-500 text-white hover:bg-green-600"
                >
                  Register Now
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CTFGame;
