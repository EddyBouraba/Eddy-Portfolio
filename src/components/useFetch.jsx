import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

function useFetch(collectionName) {
  // Initialisation des états locaux.
  const [data, setData] = useState(null); // Pour stocker les données récupérées
  const [loading, setLoading] = useState(true); // l'état de chargement
  const [error, setError] = useState(null); // capturer et stocker les erreurs éventuelles

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          // Essayer de récupérer les documents de la collection spécifiée.
          const snapshot = await getDocs(collection(db, collectionName));

          // Convertir le snapshot en tableau de données.
          const allData = snapshot.docs.map((doc) => doc.data());
          setData(allData);
          // Mettre à jour l'état `loading` pour indiquer que le chargement est terminé.
          setLoading(false);
        }, 3000);
      } catch (error) {
        // En cas d'erreur, mettre à jour l'état `error` avec le message d'erreur.
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [collectionName]); // Réexécuter `useEffect` si `collectionName` change.
  return { data, loading, error };
}
export default useFetch;
