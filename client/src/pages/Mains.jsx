import React from 'react';
import '../css/Mains.css';
import github from '../assets/github.png';
import Characterlist from '../components/Characterlist';

const Mains = () => {
  return (
    <div className='container'>
      <header>
        <div>The Rick and Morty</div>
        <div className='Header-desc'>
          <div className='rectangle'></div>
          <div className='ricknmorty-desc'>
            "Rick and Morty is an animated sci-fi comedy series that follows the misadventures of an eccentric scientist<br/>, Rick, and his easily influenced grandson, Morty, as they embark on interdimensional escapades."
          </div>
        </div>
        <a href="https://github.com/yoshieexD" target="_blank" rel="noopener noreferrer">
          <button className='headerbtn'>
            <img src={github} alt="GitHub" className="github-image" />
            GitHub
          </button>
        </a>
      </header>
      <main className='mains'>
        <Characterlist />
      </main>
      <footer>
        <div className='footer-text'>
          <span className='footer-text1 padding-text1'>by </span>
          <b>JomWinston</b>
          <span className='footer-text1 padding-text2'>2023 </span>
        </div>
      </footer>
    </div>
  );
};

export default Mains;
