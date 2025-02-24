//src/app/awards/page.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaAward,
  FaClipboardCheck,
  FaBullhorn,
  FaArrowRight,
} from "react-icons/fa";
import Image from "next/image";

const nominationForm = {
  title: "Ready to Nominate?",
  description:
    "Recognize the cyber security champions! Click the button below to submit your nominations.",
  link: "https://forms.gle/amn4gTt5gaR7py53A",
};

const AwardCeremonyPage: React.FC = () => {
  //  REPLACE WITH ACTUAL WIDTH from your image file
  const imageWidth = 1920;
  //  REPLACE WITH ACTUAL HEIGHT from your image file
  const imageHeight = 480;


  return (
    <div>
      {/* Banner Image */}
      <div className="relative w-full">
        <Image
          src="/img/nomination_banners/projects.png"
          alt="Award Ceremony Banner"
          width={imageWidth}  // Use explicit width and height
          height={imageHeight} // Use explicit width and height
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </div>

      <motion.div>
        <motion.div
          className="bg-gray-1000 rounded-2xl shadow-xl mb-12 w-full overflow-hidden" // Corrected background color
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-10">
            {/* About the Award Ceremony Section */}
            <motion.div
              className="mb-10 flex items-center space-x-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <FaAward className="text-yellow-400 text-4xl" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-100 mb-2">
                  About the Colloquy 4.0 Award Ceremony
                </h2>
              </div>
            </motion.div>
            <motion.div
              className="mb-10"  //removed flex, items-center, space-x-6
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div>
                <p className="text-gray-100">
                  We are excited to host the Award Ceremony at Colloquy 4.0,
                  recognizing individuals and teams who have made significant
                  contributions to the field of cyber security.
                </p>
              </div>
            </motion.div>
            {/* Nomination Categories Section */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center space-x-2">
                <FaClipboardCheck className="text-yellow-500" />
                <span>Nomination Categories</span>
              </h3>

              {/* Award Categories Table */}
              <div className="overflow-x-auto rounded-lg shadow-md">
                <table className="min-w-full divide-y divide-gray-700 dark:divide-gray-600">
                  <thead className="bg-gray-800 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                      >
                        Award Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                      >
                        Criteria
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                      >
                        Evaluation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-900 divide-y divide-gray-700 dark:bg-gray-800 dark:divide-gray-600">
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Cybersecurity Educator of
                        the Year
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Excellence in teaching and
                        mentoring
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Student feedback, innovative
                        curriculum, impact on student
                        careers
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Best Cybersecurity
                        Research Contribution
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Groundbreaking research in
                        cybersecurity
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Research citations, impact factor,
                        industry adoption
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Innovative Cybersecurity
                        Curriculum Designer
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Development of cutting-edge
                        courses
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Course structure, hands-on
                        approach, industry relevance
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Excellence in
                        Cybersecurity Training &
                        Awareness
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Conducting impactful training
                        programs
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Number of trainees, quality of
                        training, community outreach
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Lifetime Achievement in
                        Cybersecurity Education
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Long-term contribution to
                        cybersecurity education
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Years of service, overall impact,
                        recognition in the field
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Best Cybersecurity
                        Department

                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Excellence in cybersecurity
                        education and research

                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Research output, student success
                        rate, industry partnerships
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Top Cybersecurity
                        Research Lab
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Conducting pioneering research in
                        cyber defense
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Research publications, patents,
                        collaboration with industry
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Best Industry-Academia
                        Cybersecurity
                        Collaboration
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Strong partnerships with industry
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Number of collaborations, success
                        stories, student benefits
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Excellence in
                        Cybersecurity Skill
                        Development
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Hands-on cybersecurity training
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Number of workshops, certifications
                        offered, student engagement
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Best Student-Led
                        Cybersecurity Initiative
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Encouragement of student-driven
                        projects
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Innovation, student participation,
                        community impact
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Most Cyber-Resilient
                        Enterprise
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Strong cybersecurity infrastructure
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Security framework, incident
                        response capability, risk
                        management
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Best Cybersecurity
                        Awareness Program
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Employee and public
                        cybersecurity education
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Engagement metrics, behavioral
                        improvements, reach
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Excellence in Cyber
                        Threat Intelligence
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Advanced threat detection and
                        response
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        AI-driven security, detection success
                        rate, real-world impact
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Best Public-Private
                        Cybersecurity Partnership
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Collaboration between industry
                        and government/academia
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Policy impact, industry adoption,
                        number of joint initiatives
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Top Cybersecurity
                        Innovation by a Company
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Development of innovative
                        cybersecurity solutions
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Innovation uniqueness, adoption
                        rate, effectiveness
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Best Cybersecurity
                        Initiative by an Institution
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Large-scale institutional
                        cybersecurity projects
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Project reach, sustainability,
                        effectiveness
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Government Leadership in
                        Cybersecurity
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Effective implementation of
                        cybersecurity policies

                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Policy impact, success stories,
                        national/international influence
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Top Cybersecurity Policy
                        & Law Research
                        Institution
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Research shaping cybersecurity
                        laws
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Policy recommendations, influence
                        on regulations, publications
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Best Cybersecurity
                        Hackathon or Competition
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Organizing impactful
                        cybersecurity competitions
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Number of participants, industry
                        engagement, innovation
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Excellence in Cyber Peace
                        & Ethics Advocacy
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Promotion of cyber ethics and
                        peace initiatives
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Community engagement, ethical
                        awareness programs
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        CyberPeace Rising Star
                        Award
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Student with exceptional potential
                        in cybersecurity

                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Research, competitions won,
                        academic performance
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Best Cybersecurity
                        Capstone Project
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Outstanding final-year
                        cybersecurity project
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Project innovation, practical
                        application, impact
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        CyberPeace Ethical
                        Hacker Award
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Excellence in ethical hacking
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        CTF competitions won, security
                        research contributions
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        Cybersecurity Community
                        Impact Award
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Significant contribution to
                        cybersecurity awareness
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Outreach activities, public
                        education, community engagement
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-100 dark:text-gray-200">
                        CyberPeace COE Student
                        Leader Award
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Leadership in cybersecurity
                        advocacy
                      </td>
                      <td className="px-3 py-4 whitespace-normal text-sm text-gray-100 dark:text-gray-200">
                        Club leadership, project impact,
                        mentoring contributions
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Original List (You can remove or comment out if you only want the table)
              <ul className="list-disc pl-8 text-gray-100 space-y-2">
                <li>
                  <b>Cyber Security Professional of the Year:</b> Recognizing
                  outstanding contributions to the industry.
                </li>
                <li>
                  <b>Emerging Talent Award:</b> For promising students or
                  newcomers in cyber security.
                </li>
                <li>
                  <b>Innovation in Cyber Security Award:</b> Celebrating
                  groundbreaking projects and ideas.
                </li>
                <li>
                  <b>Community Contribution Award:</b> Acknowledging efforts in
                  cyber security education and outreach.
                </li>
                {/* Add more categories as needed
              </ul>*/}
            </motion.div>

            {/* How to Nominate Section */}
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center space-x-2">
                <FaBullhorn className="text-yellow-500" />
                <span>How to Nominate</span>
              </h3>
              <ol className="list-decimal pl-8 text-gray-100 space-y-2">
                <li>
                  <b>Review Categories:</b> Familiarize yourself with the award
                  categories.
                </li>
                <li>
                  <b>Prepare Nomination:</b> Gather information about your
                  nominee and their achievements.
                </li>
                <li>
                  <b>Submit Form:</b> Click the button below to access the
                  nomination form and complete it.
                </li>
                <li>
                  <b>Deadline:</b> Ensure your nomination is submitted before
                  March 15, 2025.
                </li>{" "}
              </ol>
            </motion.div>

            {/* Nominate Now Section */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                {nominationForm.title}
              </h3>
              <p className="text-gray-100 mb-6">
                {nominationForm.description}
              </p>
              <a
                href={nominationForm.link}
                className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-xl transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nominate Now <FaArrowRight className="ml-2" />
              </a>
            </motion.div>
          </div>
          {/* End of padding div */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AwardCeremonyPage;