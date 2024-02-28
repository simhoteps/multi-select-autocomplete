export interface ICharacterType {
  info: IInfo;
  results: IResults[];
}

export interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface IResults {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
