// src/components/EmailDisplay.tsx
import React from "react";

interface EmailProps {
  email: {
    senderName: string;
    senderEmail: string;
    recipientName: string;
    recipientEmail: string;
    subject: string;
    body: string;
    isPhishing: boolean;
    feedback?: string;
  };
}

export const EmailDisplay: React.FC<EmailProps> = ({ email }) => {
  return (
    <div className="bg-gray-800  p-6 rounded-md shadow-md max-w-2xl w-full text-white">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-semibold">From:</span>
        <span className="text-gray-200">
          {email?.senderName} &lt;{email?.senderEmail}&gt;
        </span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span className="font-semibold">To:</span>
        <span className="text-gray-200">
          {" "}
          {email?.recipientName} &lt;{email?.recipientEmail}&gt;
        </span>
      </div>
      <div className="font-semibold mt-2">Subject:</div>
      <div className="text-gray-200">{email?.subject}</div>
      <div className="mt-4 text-gray-200 whitespace-pre-line">
        {email?.body}
      </div>
    </div>
  );
};
