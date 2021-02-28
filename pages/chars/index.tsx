import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { getCharacterList, CharacterListResponse } from '../api/chars';

export type Character = {
  name: string;
  height: string;
  eyeColor: string;
  birthYear: string;
  hairColor: string;
  mass: string;
  gender: string;
  numberOfMovies: number;
}

type CharactersProps = {
  characters: Character[];
}

export default function Chars({characters}: CharactersProps) {
  const renderCharacter = (character: Character) => {
    return (
      <li key={character.name}>{character.name}</li>
    );
  }

  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {characters.map(renderCharacter)}
      </ul>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getCharacterList();

  return {
    props: {
      characters: data
    }
  }
}