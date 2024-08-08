// API Responses
export interface PeopleResponse {
  count: number;
  next: null | string;
  previous: null | string;
  results: People[];
}
export interface People {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

// Application Domain models
export type PageInfo = Omit<PeopleResponse, 'results'> & {
  itemsPerPage: number;  
};

export interface Character extends People {
  id: string;
  imageUrl: string;
}
