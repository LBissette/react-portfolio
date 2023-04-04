import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Projects';
import Resume from './pages/Resume';

function Navigation() {
  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-2xl font-medium"
            >
              About Me
            </Link>
            <Link
              to="/projects"
              className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-2xl font-medium"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-2xl font-medium"
            >
              Contact
            </Link>
            <Link
              to="/resume"
              className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-2xl font-medium"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
