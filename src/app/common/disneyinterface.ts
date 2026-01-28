export interface Disneyinterface {
      info: InfoApiDisney
      data: CharacterDisney[]
}

export interface InfoApiDisney {
  count: number;
  totalPages: number;
  previousPage: string | null;
  nextPage: string | null;
}

export interface CharacterDisney {
  _id: number;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  alignment: string;
  parkAttractions: string[];
  allies: string[];
  enemies: string[];
  sourceUrl: string;
  name: string;
  imageUrl?: string;
  url: string;
}
