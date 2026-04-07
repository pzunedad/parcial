"use client";

import { useLista } from "@/context/listaContext";
import { useRouter } from "next/navigation";

const FavoritePage = () => {
  const { lista } = useLista();
  const router = useRouter();

  return (
    <div>
      <h1>Favoritos</h1>
      <button onClick={() => router.push("/")}>Ir a la principal</button>
      <p>Bebidas favoritas</p>
      {lista.map((fav) => {
        return <p key={fav}>{fav}</p>;
      })}
    </div>
  );
};

export default FavoritePage;