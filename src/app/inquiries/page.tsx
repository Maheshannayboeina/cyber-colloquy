//src/app/inquiries/page.tsx
"use client";
import React, { useState } from "react"; // ADDED useState import here
import { useForm, useWatch } from "react-hook-form";
import {
  databases,
  isClient,
  CONTACT_COLLECTION_ID,
  EVENTS_DATABASE_ID,
} from "@/appwrite"; // Adjust the path as necessary
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { motion } from "framer-motion";
import { FaEnvelope, FaUser, FaQuestion } from "react-icons/fa"; // Install react-icons

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export default function GeneralInquiriesPage() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState<string | null>(null);

  const userName = useWatch({ control, name: "name", defaultValue: "Someone" });

  const onSubmit = async (data: any) => {
    if (!isClient) {
      setMessage("Client Error, please try again in the client");
      return;
    }

    try {
      const document = await databases.createDocument(
        EVENTS_DATABASE_ID, // Using EVENTS_DATABASE_ID here
        CONTACT_COLLECTION_ID,
        "unique()",
        {
          name: data.name,
          email: data.email,
          message: data.message,
          event: "contact_form",
        }
      );

      if (document) {
        setIsSuccess(true);
        setMessage("Your message was sent successfully!");
        reset();
      } else {
        setIsSuccess(false);
        setMessage("An error occurred while sending your message.");
      }
    } catch (error: any) {
      setIsSuccess(false);
      setMessage(
        error.message ||
          "Client Error. Please check the console.log for more info"
      );
      console.log(error);
    }
  };

  return (
    <Container>
      <SectionTitle
        preTitle="Get in Touch"
        title="General Inquiries"
        align="center"
        className="text-blue-500"
        id="contact-faq" //Adding code
      >
        We're here to help! Send us your questions or comments using the form
        below.
      </SectionTitle>

      <motion.div
        className="bg-gray-800 p-10 rounded-2xl shadow-xl max-w-lg mx-auto"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {!isSubmitSuccessful && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-6"
          >
            <input
              type="hidden"
              value={`${userName} sent a message from Cyber Colloquy`}
              {...register("subject")}
            />
            <input
              type="hidden"
              value="Cyber Colloquy Website"
              {...register("from_name")}
            />
            <input
              type="checkbox"
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")}
            />

            {/* Full Name */}
            <motion.div className="space-y-2" variants={fadeInUp}>
              <label
                htmlFor="full_name"
                className="text-sm font-medium text-gray-300 flex items-center space-x-1"
              >
                <FaUser className="text-gray-500" />
                <span>Full Name</span>
              </label>
              <input
                type="text"
                id="full_name"
                placeholder="Your name"
                {...register("name", {
                  required: "Full name is required",
                  maxLength: 80,
                })}
                className={`w-full px-3 py-2 text-gray-200 placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message as string}
                </p>
              )}
            </motion.div>

            {/* Email Address */}
            <motion.div className="space-y-2" variants={fadeInUp}>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300 flex items-center space-x-1"
              >
                <FaEnvelope className="text-gray-500" />
                <span>Email Address</span>
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email",
                  },
                })}
                placeholder="you@company.com"
                className={`w-full px-3 py-2 text-gray-200 placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message as string}
                </p>
              )}
            </motion.div>

            {/* Your Message */}
            <motion.div className="space-y-2" variants={fadeInUp}>
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-300 flex items-center space-x-2"
              >
                <FaQuestion className="text-gray-500" />
                <span>Your Message</span>
              </label>
              <textarea
                rows={5}
                id="message"
                {...register("message", {
                  required: "Enter your Message",
                })}
                placeholder="Your Message"
                className={`w-full px-3 py-2 text-gray-200 placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message as string}
                </p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={fadeInUp}>
              <button
                type="submit"
                className="w-full px-4 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <svg
                    className="w-5 h-5 mx-auto text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                ) : (
                  "Send Message"
                )}
              </button>
              <p className="mt-3 text-xs text-center text-gray-500">
                Powered by CYSE Department
              </p>
            </motion.div>
          </form>
        )}

        {/* Success Message */}
        {isSubmitSuccessful && isSuccess && (
          <motion.div
            className="flex flex-col items-center justify-center h-full text-center rounded-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <svg
              width="60"
              height="60"
              className="text-green-400"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 95 48.3333 95Z"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
            <h3 className="py-5 text-xl text-green-500">
              Message sent successfully!
            </h3>
            <p className="text-gray-300 md:px-3">{Message}</p>
            <button
              className="mt-6 text-blue-600 focus:outline-none"
              onClick={() => reset()}
            >
              Go back
            </button>
          </motion.div>
        )}

        {/* Error Message */}
        {isSubmitSuccessful && !isSuccess && (
          <motion.div
            className="flex flex-col items-center justify-center h-full text-center rounded-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 97 97"
              className="text-red-400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C74.2466 91.75 60.5957 95 48.3333 95Z"
                stroke="CurrentColor"
                strokeWidth="3"
              />
            </svg>
            <h3 className="text-xl text-red-400 py-7">
              Oops, Something went wrong!
            </h3>
            <p className="text-gray-300 md:px-3">{Message}</p>
            <button
              className="mt-6 text-blue-600 focus:outline-none"
              onClick={() => reset()}
            >
              Go back
            </button>
          </motion.div>
        )}
      </motion.div>
    </Container>
  );
}
