import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import Footer from './components/Footer'; // Vérifiez que le chemin est correct ici

const App = () => {
  const [notes, setNotes] = useState([
    {
			id:1,
			text: 'Organiser une réunion avec léquipe marketing pour discuter des nouvelles stratégies de marketing.',
			date: '15/04/2023',
		},
		{
			id:1,
			text: ' Compléter et valider le rapport financier du trimestre pour le conseil administration.',
			date: '21/04/2023',
		},
		{
			id:1,
			text: ' Ajouter de nouveaux produits sur la page accueil du site Web de Enterprise.',
			date: '28/04/2023',
		},
		{
			id:1,
			text: ' Préparer une présentation PowerPoint pour le client XYZ concernant notre proposition commerciale.',
			date: '30/04/2023',
		},
		{
			id:1,
			text: 'Trouver et résoudre les problèmes techniques rencontrés par léquipe informatique.',
			date: '15/04/2023',
		},
		{
			id:1,
			text: 'Lancer le processus de recrutement pour embaucher un nouveau développeur pour léquipe technique.',
			date: '21/04/2023',
		},
		{
			id:1,
			text: ' Examiner les rapports de ventes pour le dernier trimestre et analyser les performances.',
			date: '28/04/2023',
		},
		{
			id:1,
			text: ' Organiser une session de formation sur les mesures de sécurité en entreprise pour tous les employés.',
			date: '30/04/2023',
		},
		{
			id:1,
			text: 'Mettre à jour les informations clients dans la base de données après une récente campagne marketing.',
			date: '15/04/2023',
		},
		{
			id:1,
			text: ': Élaborer le plan de lancement pour le nouveau produit de lentreprise, y compris la stratégie marketing, les ressources nécessaires, etc.',
			date: '21/04/2023',
		},
		{
			id:1,
			text: ' Compiler les mises à jour du projet A et préparer un rapport pour léquipe de direction.',
			date: '28/04/2023',
		},
		{
			id:1,
			text: ' Organiser les détails logistiques un événement client, y compris la réservation de lieux, les fournitures, etc.',
			date: '30/04/2023',
		},
		{
			id:1,
			text: ' Réviser et mettre à jour les politiques internes de entreprise conformément aux nouvelles réglementations.',
			date: '15/04/2023',
		},
		{
			id:1,
			text: ' Rassembler les documents requis pour audit externe de entreprise.',
			date: '21/04/2023',
		},
		{
			id:1,
			text: 'Analyser les activités de la concurrence et préparer un rapport pour léquipe de vente.',
			date: '28/04/2023',
		},
		{
			id:1,
			text: ': Préparer des réponses aux demandes de renseignements des médias sur les derniers développements de entreprise.',
			date: '30/04/2023',
		},
		{
			id:1,
			text: 'Mettre à jour le calendrier des vacances pour lensemble du personnel de entreprise.',
			date: '15/04/2023',
		},
		{
			id:1,
			text: 'Mener des entretiens avec les candidats pour le poste de responsable des ressources humaines.',
			date: '21/04/2023',
		},
		{
			id:1,
			text: ': Coordonner la réunion du comité exécutif, fixer lordre du jour et distribuer les documents pertinents.',
			date: '28/04/2023',
		},
		{
			id:1,
			text: ' Élaborer les directives et le contenu de la formation en ligne pour les nouveaux employés.',
			date: '30/04/2023',
		},
    // Vos données de notes ici...
  ]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: notes.length + 1, // Vous pouvez utiliser une logique pour générer un nouvel ID unique ici
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handleSearchNote = (searchText) => {
    setSearchText(searchText); // Mettre à jour le state 'searchText' avec la valeur saisie dans la barre de recherche.
  };

  return (
    <Provider store={store}>
      <div className={`${darkMode ? 'dark-mode' : ''}`}>
        <div className='container'>
          <Header handleToggleDarkMode={setDarkMode} />
          <Search handleSearchNote={handleSearchNote} />
          <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText.toLowerCase())
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />
          <Footer />
        </div>
      </div>
    </Provider>
  );
};

export default App;
