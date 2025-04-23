import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './i18n';
import './index.css'
import Calendar from './pages/calendar/Calendar.jsx';
import HomePage from './pages/HomePage.jsx';
import Team from './pages/team/Team.jsx'
import Stuff from './pages/stuff/Stuff.jsx';
import PlayerPage from './pages/playerPage/PlayerPage.jsx';
import History from './pages/history/History.jsx';
import Photos from './pages/photos/Photos.jsx';
import Table from './pages/table/Table.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
  },
  {
    path: '/calendar',
    element: <Calendar/>
  },
  {
    path: "/team",
    element: <Team/>
  },
  {
    path:'/stuff',
    element: <Stuff/>
  },
  {
    path: '/player/:id',
    element: <PlayerPage/>
  },
  {
    path: '/stuff/:id',
    element: <PlayerPage/>
  },
  {
    path:'/history',
    element: <History/>
  },
  {
    path:'/photos',
    element: <Photos/>
  },
  {
    path: '/table',
    element: <Table/>
  },
  {
    path:'/videos',
    element: <Photos/>
  },


])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
