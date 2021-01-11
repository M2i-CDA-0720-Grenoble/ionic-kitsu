import { AnimeAttributes } from ".";

export default interface Anime {
  id: string,
  type: string,
  links: {
    self: string,
  },
  attributes: AnimeAttributes,
  relationships: any,
}
