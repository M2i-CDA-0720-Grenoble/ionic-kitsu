import { IonContent, IonHeader, IonPage, IonSpinner, IonTitle, IonToolbar } from "@ionic/react";
import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import EpisodeDetails from "../components/EpisodeDetails";
import { ApiResponse, Episode } from "../models";

interface IParams {
  id: string,
}

const SingleEpisode: FC<RouteComponentProps<IParams>> = ({ match }) => {
  // Récupère l'ID de l'épisode demandé dans l'uRL
  const { id } = match.params;
  // Retient l'état actuel de l'épisode
  const [episode, setEpisode] = useState<Episode | null>(null);

  // Déclenche un effet à chaque changement de la variable ID
  useEffect(
    () => {
      fetch(`https://kitsu.io/api/edge/episodes/${id}`)
      .then( response => response.json() )
      .then( (json: ApiResponse<Episode>) => setEpisode(json.data) )
    },
    [id]
  );

  // Tant que les données de l'épisode n'ont pas été récupérées, afficher un indicateur de chargement
  if (episode === null) {
    return <IonSpinner />;
  }

  // Dès que les donnés de l'épisode ont été récupérées, bascule vers l'affichage normal
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
        <EpisodeDetails episode={episode} />
      </IonContent>
    </IonPage>
  );
}

export default SingleEpisode;
