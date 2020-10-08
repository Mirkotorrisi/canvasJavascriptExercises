
import React, { useContext } from "react";
import { pokeContext } from "./pokeContext";

export default async function usePokename(pokename) {
  const { setPokeUrl } = useContext(pokeContext);

  try {
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokename}`
    ).then((data) => data.json());
    const res = await fetch(result.forms[0].url).then((data2) => data2.json());
    
    setPokeUrl(res.sprites.front_default);
  } catch (err) {}
  return res.sprites.front_default;

}
