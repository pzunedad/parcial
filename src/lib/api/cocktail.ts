import { CocktailResponse } from "@/types/cocktail";
import { api } from "./axios";

export const getCocktails = () => {
    return api.get('search.php?s=margarita').then((response) => {
        return response.data.drinks
    })
}

export const getCocktailById = async (id: string) => {
    const response = await api.get<CocktailResponse>(`/lookup.php?i=${id}`);
    return response.data.drinks;
};

export const getCocktailByName = async (name: string)  => {
    const response = await api.get<CocktailResponse>(`/search.php?s=${name}`);
    return response.data.drinks;
}

export const getRandomCocktail = async () => {
  const respuesta = await api.get<CocktailResponse>(`/random.php`);
  return respuesta;
};

