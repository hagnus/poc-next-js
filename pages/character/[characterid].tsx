import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import { getCharacter, CharacterResponse } from '../api/chars';

type CharacterProps = {
  character: CharacterResponse;
}

export default function Chars({character}: CharacterProps) {
  return (
    <div>
      <h1>Character: {character.name}</h1>
      <ul>
        <li key="height">Height: {character.height}</li>
        <li key="gender">Gender: {character.gender}</li>
        <li key="masss" >Mass: {character.mass}</li>
      </ul>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
          { params: {characterid: '1'} },
          { params: {characterid: '2'} },
        ],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { characterid } = params;
    const data = await getCharacter(characterid);

    return {
        props: {
            character: data
        },
        revalidate: 10,
    }
}