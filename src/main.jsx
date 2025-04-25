import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from 'react-router-dom';
import './i18n';
import './index.css';

import Calendar from './pages/calendar/Calendar.jsx';
import HomePage from './pages/HomePage.jsx';
import Team from './pages/team/Team.jsx';
import Stuff from './pages/stuff/Stuff.jsx';
import PlayerPage from './pages/playerPage/PlayerPage.jsx';
import History from './pages/history/History.jsx';
import Photos from './pages/photos/Photos.jsx';
import Table from './pages/table/Table.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/team" element={<Team />} />
      <Route path="/stuff" element={<Stuff />} />
      <Route path="/player/:id" element={<PlayerPage />} />
      <Route path="/stuff/:id" element={<PlayerPage />} />
      <Route path="/history" element={<History />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/table" element={<Table />} />
      <Route path="/videos" element={<Photos />} />
    </>
  ),
  {
    basename: '/Victoria'
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
