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
        // Vérifier d'abord si les données sont présentes dans le cache local.
        const cachedData = localStorage.getItem(collectionName);

        if (cachedData) {
          // Si les données sont dans le cache, les utiliser.
          setData(JSON.parse(cachedData));
          setLoading(false);
        } else {
          // Sinon, effectuer la requête à la base de données Firebase.
          const snapshot = await getDocs(collection(db, collectionName));
          const allData = snapshot.docs.map((doc) => doc.data());
          setData(allData);

          // Stocker les données dans le cache local.
          localStorage.setItem(collectionName, JSON.stringify(allData));

          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName]);

  return { data, loading, error };
}
export default useFetch;
