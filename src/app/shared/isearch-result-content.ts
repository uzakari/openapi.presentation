export interface ISearchResultContent {
    jokeSearchResponse: JokeSearchResponse;
    peopleApiResponse: PeopleApiResponse;
}


export interface JokeDetails {
    categories: string[];
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
}

export interface JokeSearchResponse {
    total: number;
    result: JokeDetails[];
}

export interface PeopleDetails {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface PeopleApiResponse {
    count: number;
    next: string;
    previous: string;
    results: PeopleDetails[];
}