import { Cocktail } from "@/types/cocktail";
import { useRouter } from "next/navigation";
import "./cocktailcard.css";


type CocktailCardProps = {
  cocktail: Cocktail;
}

const CocktailCard = ({ cocktail }: CocktailCardProps) => {

  const router = useRouter();

  return (
    <div className="mainContainer">
      <img 
        src={cocktail.strDrinkThumb} 
        width={200}
        height={200}
      />
      <div className="cocktailDataContainer">
        <h2>{cocktail.strDrink}</h2>
        <p><strong>Categoría:</strong> {cocktail.strCategory}</p>

        <p><strong>Si es alcohólico o no: </strong>{cocktail.strAlcoholic}</p>

        <p><strong>Tipo de vaso: </strong>{cocktail.strGlass}</p>

        <p><strong>Instrucciones: </strong>{cocktail.strInstructions}</p>

        {cocktail.strIngredient1 && (
          <p><strong>Ingrediente 1:</strong> {cocktail.strIngredient1}</p>
        )}

        {cocktail.strIngredient2 && (
          <p><strong>Ingrediente 2:</strong> {cocktail.strIngredient2}</p>
        )}

        {cocktail.strIngredient3 && (
          <p><strong>Ingrediente 3:</strong> {cocktail.strIngredient3}</p>
        )}
        {cocktail.strIngredient4 && (
          <p><strong>Ingrediente 4:</strong> {cocktail.strIngredient4}</p>
        )}

        {cocktail.strIngredient5 && (
          <p><strong>Ingrediente 5:</strong> {cocktail.strIngredient5}</p>
        )}

        {cocktail.strIngredient6 && (
          <p><strong>Ingrediente 6:</strong> {cocktail.strIngredient6}</p>
        )}

        {cocktail.strIngredient7 && (
          <p><strong>Ingrediente 7:</strong> {cocktail.strIngredient7}</p>
        )}

        {cocktail.strIngredient8 && (
          <p><strong>Ingrediente 8:</strong> {cocktail.strIngredient8}</p>
        )}

        {cocktail.strIngredient9 && (
          <p><strong>Ingrediente 9:</strong> {cocktail.strIngredient9}</p>
        )}

        {cocktail.strIngredient10 && (
          <p><strong>Ingrediente 10:</strong> {cocktail.strIngredient10}</p>
        )}

        {cocktail.strIngredient11 && (
          <p><strong>Ingrediente 11:</strong> {cocktail.strIngredient11}</p>
        )}

        {cocktail.strIngredient12 && (
          <p><strong>Ingrediente 12:</strong> {cocktail.strIngredient12}</p>
        )}

        {cocktail.strIngredient13 && (
          <p><strong>Ingrediente 13:</strong> {cocktail.strIngredient13}</p>
        )}

        {cocktail.strIngredient14 && (
          <p><strong>Ingrediente 14:</strong> {cocktail.strIngredient14}</p>
        )}

        {cocktail.strIngredient15 && (
          <p><strong>Ingrediente 15:</strong> {cocktail.strIngredient15}</p>
        )}
      </div>
      <div className="boton">
        <button onClick={() => router.back()}>Volver</button>
      </div>  
    </div>
  );
};

export default CocktailCard;