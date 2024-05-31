import React from "react";
import {useRoutes} from "react-router-dom"
import './App.css';
import HomeComponent from "./page/HomeComponent";
import Header from "./component/Header";
import HeroComponent from "./page/HeroComponent";
import HeroIdComponent from "./page/HeroIdComponent";
import LocationsComponent from "./page/LocationsComponent";
import LocationsIdComponent from "./page/LocationsIdComponent";
import EpisodeComponent from "./page/EpisodeComponent";
import EpisodeIdComponent from "./page/EpisodeIdComponent";
import NoneFound from "./page/NoneFound";

function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <HomeComponent/>
    },
      {
          path: '/hero',
          element: <HeroComponent/>,

      },
      {
          path: '/hero/:id',
          element: <HeroIdComponent/>
      },
      {
          path: '/location',
          element: <LocationsComponent/>
      },
      {
          path: '/location/:id',
          element: <LocationsIdComponent/>
      },
      {
          path: '/episodes',
          element: <EpisodeComponent/>
      },
      {
          path: '/episodes/:id',
          element: <EpisodeIdComponent/>
      },
      {
          path: '*',
          element: <NoneFound/>
      },

  ])
  return (
      <>
        <Header/>
          {element}
      </>
  );
}

export default App;
