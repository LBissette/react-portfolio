import React from 'react';
import resumePDF from '../../assets/Bissette-Coding-Resume.pdf';

function Resume() {
  return (
    <div className='className="flex flex-col bg-slate-600 text-gray-300 m-6 rounded-lg border-2 border-gray-300'>
      <div className="m-4">
        <a
          href={resumePDF}
          download="Bissette-Resume"
          className="text-3xl underline font-bold mb-4"
        >
          Download Here!
        </a>
        <p className="mt-6 mb-4">Charlotte, NC | loganbissette@gmail.com</p>
        <h2 className="text-xl font-bold mb-2">Objective</h2>
        <p className="mb-4">
          I am an optimistic and energetic problem-solver pursuing roles in web
          development. As an adept and flexible learner, I thrive in complex,
          high-energy situations. I am diligently committed to building a
          relationship with my team.
        </p>
        <h2 className="text-xl font-bold mb-2">Education</h2>
        <p className="mb-1">
          Full-Stack Web Development Certificate | 04/2023 | UNC Charlotte
        </p>
        <p className="mb-2">
          B.S.B.A. Accounting | 12/2020 | Western Carolina University
        </p>
        <ul className="list-disc pl-4 mb-4">
          <li>Minors: Finance, Japanese Studies</li>
          <li>Summer travel course across Japan in 2017</li>
        </ul>
        <h2 className="text-xl font-bold mb-2">Work History</h2>
        <p className="mb-1">
          Billing Coordinator | Hearst Media | 08/2021 – Present
        </p>
        <ul className="list-disc pl-4 mb-2">
          <li>Manage and process advertising orders for four magazines</li>
          <li>Generate and analyze various reports</li>
        </ul>
        <p className="mb-1">
          Deli/Bakery Associate | Food Lion | 03/2021 – 07/2021
        </p>
        <ul className="list-disc pl-4 mb-2">
          <li>Projected and produced goods to sell daily</li>
          <li>Heavily assisted in managing and ordering inventory</li>
        </ul>
        <p className="mb-1">
          Uniform Staff | Western Carolina University | 08/2018 – 08/2020
        </p>
        <ul className="list-disc pl-4 mb-4">
          <li>
            Fitted, managed, and distributed uniforms for Pride of the
            Mountains.
          </li>
          <li>
            Rebuilt database and kept record of 500+ uniforms made up of four
            different pieces
          </li>
        </ul>
        <h2 className="text-xl font-bold mb-2">Skills and Achievements</h2>
        <ul className="list-disc pl-4 mb-4">
          <li>
            Proficient in HTML, CSS, JS, APIs, Node, Express, MySQL, MongoDB,
            GraphQL
          </li>
          <li>
            Proficient in Excel, PowerPoint, and Microsoft Word (MS Office
            Suite)
          </li>
          <li>Experience in Salesforce, Domo, and Ad Depot</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
