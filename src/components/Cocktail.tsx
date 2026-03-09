import { Cocktail as CocktailType } from '@/types/cocktail';
import { useRouter } from 'next/navigation'
import './cocktail.css';

type Props = {
  cocktails: CocktailType[];
};

const Cocktail = ({ cocktails }: Props) => {

  const router = useRouter();

  const handleCocktailClick =(id: string) => {
    router.push(`/cocktail/${id}`)
  }

  return (
    <div className="cocktail-grid">
      {cocktails.map((cocktail) => (
        <div key={cocktail.idDrink} className="cocktail-card"
        onClick={() => handleCocktailClick(cocktail.idDrink)}>
          {cocktail.strDrinkThumb && (
            <img
              src={cocktail.strDrinkThumb}
              className="cocktail-img"
            />
          )}
          <div className="cocktail-content">
            <h3>{cocktail.strDrink}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cocktail;