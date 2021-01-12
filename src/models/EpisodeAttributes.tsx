export default interface EpisodeAttributes {
  airdate: string,
  canonicalTitle: string,
  createdAt: string,
  updatedAt: string,
  description: string,
  length: number,
  number: number,
  relativeNumber: number,
  seasonNumnber: number,
  synopsis: string,
  thumbnail?: string,
  titles: {
    en_us?: string,
    en_jp?: string,
    ja_jp?: string,
  }
}
