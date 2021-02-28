export type CharacterListResponse = {
    count: number;
    next: number | null;
    previous: number | null;
    results: CharacterResponse[];
}

export type CharacterResponse = {
    name: string;
    height: string;
    eye_color: string;
    birth_year: string;
    hair_color: string;
    mass: string;
    gender: string;
    created: string;
    edited: string;
    films: string[];
    homeworld: string,
    species: string[],
    vehicles: string[],
    starships: string[],
    url: string,
}

export async function getCharacterList() {
  return fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => data.results)
}

export async function getCharacter(id: string | string[]) {
  console.log('GETTING...', id);
  return fetch(`https://swapi.dev/api/people/${id}`)
    .then(response => response.json())
}