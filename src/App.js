import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import CalendrierEmploye from './views/calendrier-employe/calendrierEmploye';
import SignUp from './views/connexion/creerCompte';
import Layout from './views/layout';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Layout}/>
          <Route path='/calendrier-employe' Component={CalendrierEmploye}/>
          <Route path='/create-account' Component={SignUp}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
