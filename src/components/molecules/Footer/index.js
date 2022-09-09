import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and built with{' '}
        <span className="Footer__Heart">&hearts;</span> by{' '}
        <a
          href="https://www.linkedin.com/in/pritam-kumar-5137511b9/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Pritam Kumar
        </a>
      </section>

      <section className="Footer__Items">
        <a
          href="https://github.com/pritamkr212"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Code
        </a>
      </section>
    </footer>
  );
};

export default Footer;
