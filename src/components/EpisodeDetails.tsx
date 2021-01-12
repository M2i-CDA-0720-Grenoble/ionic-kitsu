import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import React, { FC } from "react";
import { Episode } from "../models";

interface EpisodeDetailsProps {
  episode: Episode,
}

const EpisodeDetails: FC<EpisodeDetailsProps> = ({ episode }) =>
  <IonCard>
    <IonCardHeader>
      <IonCardTitle>
        {episode.attributes.canonicalTitle}
      </IonCardTitle>
    </IonCardHeader>

    <IonCardContent>
      {episode.attributes.synopsis}
    </IonCardContent>
  </IonCard>
;

export default EpisodeDetails;
