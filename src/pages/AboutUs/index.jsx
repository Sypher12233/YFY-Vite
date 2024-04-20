import React from "react";
import styles from "./styles.module.css";

function AboutUs() {
  return (
    <>
      <main className={styles.aboutUsMain}>
        <div>
          <h1>
            The largest and most inclusive youth-led online platform for
            capacity-building and networking in Afghanistan.
          </h1>
        </div>
        <div className={styles.aboutUsMotoContainer}>
          <div className={styles.motoSectionTitle}>
            <h1 className={styles.color}>Youth</h1>
            <h1 className={styles.color}> for </h1>
            <h1 className={styles.color}> Youth</h1>
          </div>
          <div className={styles.motoContainer}>
            <div className={styles.motoSection}>
              <h2>Our Moto</h2>
              <p>Together for a shared future…</p>
            </div>
            <div className={styles.missionSection}>
              <h2>Our Mission</h2>
              <p>Connecting Afghan Youth for Education and Empowerment.</p>
            </div>
            <div className={styles.visionSection}>
              <h2>Our Vision</h2>
              <p>
                Building a Diverse and Inclusive Community of Young Leaders.
              </p>
            </div>
          </div>
        </div>
        {/* Founder Section */}
        <div className={styles.aboutUsFounderContainer}>
          <div className={styles.founderImageSection}>
            <img
              src="/images/project/individuals/najafizada-Picture.jpg"
              alt="najafizada image"
            />
          </div>
          <div className={styles.founderInfoSection}>
            <h2>Founder and Initiator</h2>
            <h1>Mohammad Habib Abdullah</h1>
            <div className={styles.founderBackground}>
              <h2>Background</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
                corrupti beatae quibusdam ut explicabo cum quis natus sapiente
                corporis, maiores officia aspernatur cumque quod voluptatum.
                Exercitationem nisi odit deleniti omnis!
              </p>
            </div>
          </div>
        </div>
        {/* Reason Section */}
        <div className={styles.aboutUsReasonContainer}>
          <h2>Reason for Starting Youth for Youth</h2>
          <p>
            In response to the educational challenges exacerbated by the
            COVID-19 pandemic and the evolving socio-political landscape in
            Afghanistan, Youth for Youth was founded with a clear mission:{" "}
            <strong>to empower Afghan youth</strong> through education and
            collaboration. Recognizing the critical need for accessible
            resources and support, especially in times of crisis, our founder,
            Mohammad Habib Abdullah, initiated this platform in March 2020. With
            a deep commitment to fostering resilience, knowledge, and
            connectivity among Afghan youth, Youth for Youth serves as a beacon
            of hope and opportunity in challenging times. Through our diverse
            range of activities, initiatives, and teams, we strive to create a
            supportive and inclusive community where every young Afghan can
            access the tools, resources, and networks they need to thrive and
            contribute positively to society. Join us in our journey of
            empowerment and transformation. Together, we can build a brighter
            future for Afghan youth.
          </p>
        </div>

        {/* Teams and Clubs Section */}
        <div className={styles.aboutUsTeamsContainer}>
          <h2>Teams and Clubs</h2>
          <div className={styles.teamsClubsList}>
            <div className={styles.teamSection}>
              <h3>1. Award Team</h3>
              <ul>
                <li>Recognizing Top Afghan Talents</li>
                <li>Researching Achievements</li>
                <li>Annual Awards Ceremony</li>
              </ul>
            </div>

            <div className={styles.teamSection}>
              <h3>2. News and Opinion Articles Team</h3>
              <ul>
                <li>Collecting and Editing Youth Opinions</li>
                <li>Publication Initiatives</li>
              </ul>
            </div>
            <div className={styles.teamSection}>
              <h3>3. Social Media Team</h3>
              <ul>
                <li>Creating Daily Content</li>
                <li>Event Posters and City Interviews</li>
                <li>Managing Platforms</li>
              </ul>
            </div>
            <div className={styles.teamSection}>
              <h3>4. Networking Team</h3>
              <ul>
                <li>Weekly Virtual Sessions</li>
                <li>Building Connections</li>
              </ul>
            </div>
            <div className={styles.teamSection}>
              <h3>5. Expert Talk Team</h3>
              <ul>
                <li>Inviting and Organizing Sessions</li>
                <li>Covering Opportunities</li>
              </ul>
            </div>
            <div className={styles.teamSection}>
              <h3>6. Research Team</h3>
              <ul>
                <li>Translating Relevant Research</li>
                <li>Providing Localized Information</li>
              </ul>
            </div>
            <div className={styles.teamSection}>
              <h3>7. Teaching Team</h3>
              <ul>
                <li>Language and Subject Instruction</li>
                <li>Educational Support</li>
              </ul>
            </div>
            <div className={styles.teamSection}>
              <h3>8. Website Development Team</h3>
              <ul>
                <li>Official Website Development</li>
                <li>Maintenance and Updates</li>
              </ul>
            </div>
            <div className={styles.teamSection}>
              <h3>9. HR Team</h3>
              <ul>
                <li>Talent Recruitment</li>
                <li>Team Member Engagement</li>
              </ul>
            </div>
            <div className={styles.teamSection}>
              <h3>10. Charity Team</h3>
              <ul>
                <li>Fundraising Initiatives</li>
                <li>Donation Management</li>
              </ul>
            </div>
            <div className={styles.teamSection}>
              <h3>11. Book Club</h3>
              <ul>
                <li>Purpose: Promoting Reading Culture Among Afghan Youths</li>
                <li>
                  Activities: Monthly Book Selection, Group Discussions, Author
                  Talks
                </li>
                <li>
                  Responsibilities: Organizing Virtual Book Sessions, Managing
                  Book Selection Process
                </li>
              </ul>
            </div>
            <div className={styles.teamSection}>
              <h3>12. Debate Club</h3>
              <ul>
                <li>
                  Purpose: Enhancing Critical Thinking and Communication Skills
                </li>
                <li>
                  Activities: Regular Debates, Topic Discussions, Debate
                  Competitions
                </li>
                <li>
                  Responsibilities: Planning Debate Topics, Coordinating Debate
                  Events, Providing Training Sessions
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rules and Regulations Section */}
        {/* <div className={styles.aboutUsRulesContainer}>
          <h2>Rules and Regulations for Youth for Youth Members</h2>
          <ol>
            <li>
              <h3>Respect and Inclusivity</h3>
              <ul>
                <li>
                  Treat every member with respect, regardless of background,
                  gender, or beliefs.
                </li>
                <li>
                  Foster an inclusive environment that values diversity and
                  promotes understanding.
                </li>
              </ul>
            </li>
          </ol>
        </div> */}

        <div className={styles.aboutUsRulesContainer}>
          <h2>Rules and Regulations for Youth for Youth Members</h2>
          <ol>
            <li>
              <h3>Respect and Inclusivity</h3>
              <ul>
                <li>
                  Treat every member with respect, regardless of background,
                  gender, or beliefs.
                </li>
                <li>
                  Foster an inclusive environment that values diversity and
                  promotes understanding.
                </li>
              </ul>
            </li>
            <li>
              <h3>Professionalism</h3>
              <ul>
                <li>
                  Uphold a high standard of professionalism in all interactions,
                  both within the organization and in external engagements.
                </li>
                <li>
                  Maintain a positive and constructive tone in communication.
                </li>
              </ul>
            </li>
            <li>
              <h3>Commitment and Accountability</h3>
              <ul>
                <li>
                  Demonstrate a strong commitment to the goals and values of
                  Youth for Youth.
                </li>
                <li>
                  Fulfill assigned responsibilities promptly and efficiently.
                </li>
                <li>
                  Communicate any challenges or concerns promptly to the
                  relevant team leader or the HR team.
                </li>
              </ul>
            </li>
            <li>
              <h3>Confidentiality</h3>
              <ul>
                <li>
                  Respect the confidentiality of internal discussions, member
                  information, and sensitive data.
                </li>
                <li>
                  Seek permission before sharing any internal information
                  outside the organization.
                </li>
              </ul>
            </li>
            <li>
              <h3>Collaboration and Teamwork</h3>
              <ul>
                <li>
                  Foster a collaborative spirit by actively participating in
                  team activities and projects.
                </li>
                <li>
                  Encourage and support fellow team members to achieve
                  collective goals.
                </li>
              </ul>
            </li>
            <li>
              <h3>Adherence to Code of Conduct</h3>
              <ul>
                <li>
                  Abide by the established code of conduct for virtual events,
                  discussions, and interactions.
                </li>
                <li>
                  Report any instances of inappropriate behavior or misconduct
                  promptly.
                </li>
              </ul>
            </li>
            <li>
              <h3>Innovation and Initiative</h3>
              <ul>
                <li>
                  Encourage creative thinking and innovative approaches to
                  problem-solving.
                </li>
                <li>
                  Take initiative in proposing new ideas that align with the
                  organization's mission.
                </li>
              </ul>
            </li>
            <li>
              <h3>Punctuality and Time Management</h3>
              <ul>
                <li>Attend scheduled meetings and events on time.</li>
                <li>
                  Manage time effectively to fulfill responsibilities without
                  causing delays.
                </li>
              </ul>
            </li>
            <li>
              <h3>Feedback and Improvement</h3>
              <ul>
                <li>
                  Provide constructive feedback to enhance the effectiveness of
                  team activities.
                </li>
                <li>
                  Embrace feedback from peers and leaders to foster personal and
                  professional growth.
                </li>
              </ul>
            </li>
            <li>
              <h3>Compliance with Laws and Regulations</h3>
              <ul>
                <li>
                  Ensure that all activities conducted under the Youth for Youth
                  banner comply with local laws and regulations.
                </li>
                <li>
                  Avoid engaging in any activities that may bring disrepute to
                  the organization or its members.
                </li>
              </ul>
            </li>
            <li>
              <h3>Conflict Resolution</h3>
              <ul>
                <li>
                  Resolve conflicts in a constructive and respectful manner.
                </li>
                <li>
                  Seek guidance from team leaders or the HR team if conflicts
                  persist.
                </li>
              </ul>
            </li>
            <li>
              <h3>Continuous Learning</h3>
              <ul>
                <li>
                  Stay informed about current events, educational opportunities,
                  and industry trends relevant to the organization's goals.
                </li>
                <li>
                  Actively engage in opportunities for personal and professional
                  development.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        {/* Weekly Board Meetings Section */}
        <div className={styles.aboutUsMeetingsContainer}>
          <h2>Weekly Executive Board Meetings</h2>
          <div className={styles.meetingsInfo}>
            <h3>Meeting Structure:</h3>
            <ul>
              <li>Frequency: Weekly</li>
              <li>Participants: Executive Board Members</li>
              <li>Duration: 1 Hour</li>
            </ul>
            <h3>Agenda:</h3>
            <ul>
              <li>Welcome and Roll Call</li>
              {/* Include other agenda items */}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
export default AboutUs;
