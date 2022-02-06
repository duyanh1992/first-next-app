import { Route, Routes, Switch } from 'react-router-dom';

import './App.css';
import MainNagation from './components/layout/MainNavigation';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetup';

function App() {
  return (
    <div style={{ width: '80%' }}>
      <MainNagation />
      <Routes>
        <Route path='/' element={<AllMeetupsPage />} />

        <Route path='/new-meetup' element={<FavoritesPage />} />

        <Route path='/favorite' element={<NewMeetupsPage />} />
      </Routes>
    </div>
  );
}

export default App;
