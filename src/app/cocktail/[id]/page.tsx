'use client';
import { Cocktail } from "@/types/cocktail";
import { AxiosError } from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCocktailById } from "@/lib/api/cocktail";
import CocktailCard from "@/components/CocktailCard";

const cocktailInfo = () => {

    const { id } = useParams();
    const [cocktail, setCocktail] = useState<Cocktail | null>(null);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        getCocktailById(String(id))
            .then((res) => {
                if (res && res.length > 0) {
                    setCocktail(res[0]);
                } else {
                    setError("Cocktail no encontrado");
                }
            })
            .catch((e: AxiosError) => {
                setError(e.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return (
        <div>
            {!cocktail && loading && <h1>Loading...</h1>}
            {cocktail &&(
                <>
                  <CocktailCard cocktail={cocktail} />
                </>)}
            {error && <h2>{error}</h2>}
        </div>
    );
};

export default cocktailInfo;