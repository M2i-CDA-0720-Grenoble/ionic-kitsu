import { EpisodeAttributes } from ".";

export default interface Episode {
  id: string,
  links: {
    self: string,
  },
  attributes: EpisodeAttributes,
  relationships: any,
}
