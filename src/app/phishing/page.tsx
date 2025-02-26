//src/app/phishing/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { EmailDisplay } from "@/components/EmailDisplay";
import { Button } from "@/components/ui/button";

const emails = [
  {
    senderName: "Income Tax Dept.",
    senderEmail: "refunds@incometax.gov.in.secure",
    recipientName: "User",
    recipientEmail: "user@email.com",
    subject: "Urgent: Tax Refund Pending",
    body: "Dear Taxpayer,\n\nWe've noticed an unclaimed tax refund of ₹12,500 under your name. To ensure you receive that, please click this link and verify your details within 24 hours: https://bit.ly/secure-tax-verify\n\nFailure to act may result in refund cancellation.\n\nRegards,\nIncome Tax Department, India",
    isPhishing: true,
    feedback:
      "Phishing detected: That email used urgent language, had a suspicious link, and the sender email wasn't an official address.",
  },
  {
    senderName: "Airtel India",
    senderEmail: "noreply@airtel.com",
    recipientName: "User",
    recipientEmail: "user@email.com",
    subject: "Airtel Bill Payment Successful",
    body: "Dear User,\n\nYour Airtel bill of ₹1,450 was successfully processed. Thank you for using Airtel. You can view your payment at: https://www.airtel.in/bill-details\n\nThank you,\nAirtel Team",
    isPhishing: false,
    feedback: "That was a legitimate email. Standard bill confirmation.",
  },
  {
    senderName: "SBI Bank Alert",
    senderEmail: "alert@sbi-security.net",
    recipientName: "User",
    recipientEmail: "user@email.com",
    subject: "Unusual Account Activity Detected",
    body: "Dear Customer,\n\nWe detected unusual activity on your SBI account. To secure your account, verify your details immediately at: https://www.sbi.co.in/security\n\nFailure to do so might suspend your account.\n\nRegards,\nSBI Security Team",
    isPhishing: true,
    feedback:
      "Phishing detected: That email used a fake domain, had a threatening message, and asked for immediate action.",
  },
  {
    senderName: "Flipkart Offers",
    senderEmail: "noreply@flipkart.com",
    recipientName: "User",
    recipientEmail: "user@email.com",
    subject: "Order Confirmation: [Order ID: #FLPK23456]",
    body: "Hi User,\n\nYour Flipkart order has been successfully placed. You can track it from here https://www.flipkart.com/track-order?id=FLPK23456.\n\nHappy Shopping,\nTeam Flipkart",
    isPhishing: false,
    feedback:
      "That was a legitimate email. Normal order confirmation from Flipkart.",
  },
  {
    senderName: "IRCTC Railways",
    senderEmail: "booking@irctc.co.in",
    recipientName: "User",
    recipientEmail: "user@email.com",
    subject: "Your Ticket Confirmed - Train: 12345",
    body: "Dear Passenger,\n\nYour train ticket with PNR number 1234567890 for train no. 12345 is confirmed. Details of that are availabe on: https://www.irctc.co.in/ticket-details\n\nThanks,\nIndian Railways",
    isPhishing: false,
    feedback:
      "That was a legitimate email. Standard ticket confirmation from IRCTC.",
  },
  {
    senderName: "Google Security",
    senderEmail: "no-reply@google-accounts.co",
    recipientName: "User",
    recipientEmail: "user@email.com",
    subject: "Critical Security Alert",
    body: "Dear User,\n\nSomeone tried accessing your Google Account from an unrecognized location. To review that, please click the link below:\n\nhttps://accounts.google.com/security-check-now\n\nBest,\nGoogle Security Team",
    isPhishing: true,
    feedback:
      "Phishing detected: That email had a fake sender domain, used scare tactics, and had an impersonal tone.",
  },
  {
    senderName: "Amazon Prime",
    senderEmail: "prime-support@amazon.in.renew",
    recipientName: "User",
    recipientEmail: "user@email.com",
    subject: "Action Required: Your Prime Membership",
    body: "Dear Amazon Customer,\n\nYour Prime membership has expired, and your benefits will be suspended. Please renew here: https://amazon.in/renew-prime-now\n\nRegards,\nAmazon Customer Care",
    isPhishing: true,
    feedback:
      "Phishing detected: That email used a fake domain, and an immediate action message.",
  },
  {
    senderName: "HDFC Credit Cards",
    senderEmail: "hdfc-alerts@hdfcbank.info",
    recipientName: "User",
    recipientEmail: "user@email.com",
    subject: "New Credit Card Application Received",
    body: "Dear Valued Customer,\n\nYour credit card application was received. If that wasn't you, cancel request here: https://www.hdfcbank.com/cancel-card-request\n\nRegards,\nHDFC Bank",
    isPhishing: true,
    feedback:
      "Phishing detected: That email used a fake domain and an uncertain situation to get clicks.",
  },
  {
    senderName: "Zomato Eats",
    senderEmail: "noreply@zomato.com",
    recipientName: "User",
    recipientEmail: "user@email.com",
    subject: "Your Zomato Order Placed",
    body: "Hey User,\n\nYour recent Zomato order was placed successfully. Check out your order here: https://www.zomato.com/your-order-status\n\nThanks,\nZomato Team",
    isPhishing: false,
    feedback: "That was a legitimate email. Standard order placed message.",
  },
  {
    senderName: "Swiggy Food",
    senderEmail: "orders@swiggy.com",
    recipientName: "User",
    recipientEmail: "user@email.com",
    subject: "Order Confirmation from Swiggy",
    body: "Hi User,\n\nYour recent Swiggy order has been confirmed. You can find your order status here https://www.swiggy.com/track-order\n\nEnjoy,\nTeam Swiggy",
    isPhishing: false,
    feedback: "That was a legitimate email. Confirmation of a placed order.",
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

const PhishingAttackRecognizer: React.FC = () => {
  const [emailIndex, setEmailIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [shuffledEmails, setShuffledEmails] = useState(
    shuffleArray(emails).slice(0, 4)
  );
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const currentEmail = shuffledEmails[emailIndex];

  const rules = [
    "1. Examine the email carefully.",
    "2. Identify if the email is phishing, legitimate, or unclear.",
    "3. Time and score will be tracked.",
  ];

  const handleEmailChoice = (choice: "phishing" | "legitimate" | "unclear") => {
    setSelectedOption(choice);
    if (!gameOver) {
      if (choice === (currentEmail?.isPhishing ? "phishing" : "legitimate")) {
        setScore(score + 1);
        setFeedback("Correct! That was a legitimate email.");
      } else {
        setFeedback(
          currentEmail?.feedback || "Incorrect! That was a phishing email."
        );
      }

      if (emailIndex < shuffledEmails.length - 1) {
        setEmailIndex(emailIndex + 1);
      } else {
        setTimerRunning(false);
        setGameOver(true);
      }
    }
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (timerRunning) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [timerRunning]);

  useEffect(() => {
    if (gameStarted) {
      const shuffled = shuffleArray(emails).slice(0, 4);
      setShuffledEmails(shuffled);
      setEmailIndex(0);
      setScore(0);
      setFeedback("");
      setTime(0);
      setTimerRunning(true);
      setGameOver(false);
    }
  }, [gameStarted]);

  const handleRetry = () => {
    const shuffled = shuffleArray(emails).slice(0, 4);
    setShuffledEmails(shuffled);
    setEmailIndex(0);
    setScore(0);
    setFeedback("");
    setTime(0);
    setTimerRunning(true);
    setGameOver(false);
  };

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="**bg-black** flex flex-col items-center justify-center min-h-screen p-4"> {/* Added bg-black class here */}
      <div className="bg-gray-800 rounded-lg shadow-md p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-gray-200 text-center">
          Phishing Attack Recognizer
        </h2>
        {!gameStarted ? (
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-gray-300">
              <h3 className="text-xl font-semibold text-center mb-4">Rules</h3>
              <ul className="list-disc pl-5">
                {rules.map((rule, index) => (
                  <li key={index} className="mb-2 text-gray-300">
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
            <Button
              size="lg"
              className="bg-blue-500 text-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
              onClick={handleStartGame}
            >
              Start
            </Button>
          </div>
        ) : (
          <>
            <EmailDisplay email={currentEmail} />
            {!gameOver && (
              <div className="mt-4 flex gap-4 justify-center">
                <Button
                  onClick={() => handleEmailChoice("legitimate")}
                  size="lg"
                  className="bg-green-500 text-white hover:bg-green-600 focus:ring-4 focus:ring-green-300"
                >
                  Safe Email
                </Button>
                <Button
                  onClick={() => handleEmailChoice("phishing")}
                  size="lg"
                  className="bg-red-500 text-white hover:bg-red-600 focus:ring-4 focus:ring-red-300"
                >
                  Phishing Email
                </Button>
                <Button
                  onClick={() => handleEmailChoice("unclear")}
                  size="lg"
                  className="bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300"
                >
                  Unclear
                </Button>
              </div>
            )}
            <p
              className={`mt-4 text-center text-lg ${
                feedback.includes("Correct") ? "text-green-500" : "text-red-500"
              } font-bold`}
            >
              {feedback}
            </p>
            <div className="flex justify-between mt-4 text-white">
              <p>Score: {score}</p>
              <p>Time: {time}s</p>
            </div>

            {gameOver && (
              <div className="flex justify-center mt-4 gap-4">
                <Button
                  onClick={handleRetry}
                  size="lg"
                  className="bg-blue-500 text-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
                >
                  Retry
                </Button>
                <Button
                  onClick={() => (window.location.href = "/register")}
                  size="lg"
                  className="bg-green-500 text-white hover:bg-green-600 focus:ring-4 focus:ring-green-300"
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

export default PhishingAttackRecognizer;