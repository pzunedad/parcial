'use client'
import { useEffect, useState } from 'react';
import { getCocktails, getCocktailByName, getRandomCocktail } from '@/lib/api/cocktail';
import { Cocktail as CocktailType } from '@/types/cocktail';
import Cocktail from '@/components/Cocktail';
import { useRouter } from 'next/navigation';
import "./page.css";

const Home = () => {
  const [cocktails, setCocktails] = useState<CocktailType[] | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const fetchInitialCocktails = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getCocktails();
      setCocktails(data || []);
    } catch {
      setError('Error al cargar los cocktails');
      setCocktails([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialCocktails();
  }, []);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const data = await getCocktailByName(searchTerm);
      setCocktails(data || []);
    } catch {
      setError('Error al buscar');
      setCocktails([]);
    } finally {
      setLoading(false);
    }
  };

const handleAleatorio = () => {
  setLoading(true);
  setError(null);
  getRandomCocktail()
    .then((res) => {
      if (res.data.drinks) {
        const cocktail: CocktailType = res.data.drinks[0];
        router.push(`/cocktail/${cocktail.idDrink}`);
      } else {
        setError("No se encontró ningún cocktail");
      }
    })
    .catch((e) => {
      setError(`Error: ${e.message ? e.message : e}`);
    });
};

  return (
    <div>
      <h1>Buscador de cocktails</h1>
      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar cocktail por nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} disabled={loading}>
          Buscar
        </button>
        <button onClick={handleAleatorio}>
          Dime algo bonito
        </button>
      </div>

      {loading && <h2>Loading...</h2>}
      {error && <h3>Error...{error}</h3>}
      {!loading && !error && (!cocktails || cocktails.length === 0) && (
        <p>No se encontraron cocktails</p>
      )}

      {!loading && !error && cocktails && cocktails.length > 0 && (
        <Cocktail cocktails={cocktails} />
      )}
    </div>
  );
};

export default Home;