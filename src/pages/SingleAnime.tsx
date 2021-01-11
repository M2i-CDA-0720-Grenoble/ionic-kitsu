import { IonContent, IonHeader, IonPage, IonSpinner, IonTitle, IonToolbar } from "@ionic/react";
import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import AnimeDetails from "../components/AnimeDetails";
import { Anime } from "../models";

interface SingleAnimeResponse {
  data: Anime,
}

interface IParams {
  id: string,
}

const SingleAnime: FC<RouteComponentProps<IParams>> = ({ match }) => {
  const id = match.params.id;

  const [anime, setAnime] = useState<Anime | null>(null);

  useEffect(
    () => {
      fetch(`https://kitsu.io/api/edge/anime/${id}`)
      .then( response => response.json() )
      .then( (json: SingleAnimeResponse) => setAnime(json.data) )
    },
    []
  );

  if (anime === null) {
    return <IonSpinner />;
  }

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
        <AnimeDetails anime={anime} />
      </IonContent>
    </IonPage>
  );
}

export default SingleAnime;
