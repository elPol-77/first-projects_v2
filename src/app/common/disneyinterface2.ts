export interface InfoApiDisney {
  info: Info
  data: CharacterDisney[]
}

export interface Info {
  count: number
  totalPages: number
  previousPage: any
  nextPage: string
}

export interface CharacterDisney {
  _id: number
  films: string[]
  shortFilms: string[]
  tvShows: string[]
  videoGames: string[]
  parkAttractions: string[]
  allies: any[]
  enemies: any[]
  name: string
  imageUrl?: string
  url: string
}
