import React, { useState, useEffect } from 'react';
import '../css/Characterlist.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Characterlist = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const charactersPerPage = 4;

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch character data');
        }
        return response.json();
      })
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  }, []);
  

  useEffect(() => {
    setShouldAnimate(true);
    const timer = setTimeout(() => {
      setShouldAnimate(false);
    }, 500); 
    return () => clearTimeout(timer);
  }, [currentPage]);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const totalPages = Math.ceil(characters.length / charactersPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className='character-container'>
        <div className='row'>
          {currentCharacters.slice(0, 2).map((character, index) => (
            <div className={`character-card ${shouldAnimate ? 'fade-in' : ''}`}
            key={index}>
              <img src={character.image} alt={character.name} />
              <div className='character-desc'>
                <h3 className='character-desc-h3'>{character.name}</h3>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='row'>
          {currentCharacters.slice(2, 4).map((character, index) => (
            <div  className={`character-card ${shouldAnimate ? 'fade-in' : ''}`}
            key={index}>
              <img src={character.image} alt={character.name} />
              <div className='character-desc'>
                <h3 className='character-desc-h3'>{character.name}</h3>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='pagination'>
        <div className='pagination-background'>
          <button onClick={prevPage} disabled={currentPage === 1}>
            <FaChevronLeft />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            <FaChevronRight/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Characterlist;
