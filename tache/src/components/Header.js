import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className='header'>
      <div className='logo'>
        <img
          src='https://cdn4.iconfinder.com/data/icons/online-marketing-icons/744/note_journal_pencils_notepad_school_material_Tools_and_utensils-512.png'
          alt='Logo'
        />
      </div>
      <div className='header-content'>
        <h1>Gestion des Tâches</h1>
        <p>
          Bienvenue dans notre application de prise de notes professionnelle !
          Notre objectif est de faciliter votre gestion des tâches et de vous
          permettre de rester organisé et productif au travail.
        </p>
      </div>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className='save'
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
