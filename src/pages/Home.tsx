import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import AnimeList from '../components/AnimeList';
import { Anime } from '../models';
import './Home.css';

// Définit la structure de la réponse attendue de l'API
interface AllAnimeResponse {
  data: Anime[],
  meta: {
    count: number,
  },
  links: {
    first: string,
    next: string,
    last: string,
  },
}

const Home: React.FC = () => {
  // Retient un état qui est appelé à contenir les données reçues de l'API
  const [animes, setAnimes] = useState<Anime[]>([]);

  // Le hook d'effet (useEffect) nous permet de définir des comportements qui
  // doivent être exécutés à chaque changement d'état d'une ou plusieurs
  // variables.
  // En l'occurrence, on donne une liste de variables vide pour faire en sorte
  // que le comportement s'exécute uniquement au moment où le composant est
  // monté dans le DOM.
  useEffect(
    // Comportement à exécuter à chaque changement d'état
    () => {
      // Récupère la liste des 10 premiers animés de l'API
      // fetchAllAnimes()
      // .then( (json: AllAnimeResponse) => setAnimes(json.data) );

      fetch('https://kitsu.io/api/edge/anime')
      .then( response => response.json() )
      .then( (json: AllAnimeResponse) => setAnimes(json.data) );
    },
    // Liste de dépendances vide = exécution uniquement au montage
    []
  );
    
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AnimeList animes={animes} />
      </IonContent>
    </IonPage>
  );
}

export default Home;
