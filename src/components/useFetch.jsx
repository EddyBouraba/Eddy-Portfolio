import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

function useFetch(collectionName) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simule un temps de chargement de 2 secondes avec setTimeout

        const snapshot = await getDocs(collection(db, collectionName));
        const allData = snapshot.docs.map((doc) => doc.data());
        setData(allData);
        setLoading(false); // Fin du chargement
      } catch (error) {
        setError(error.message);
        setLoading(false); // Fin du chargement en cas d'erreur
      }
    };

    fetchData();
  }, [collectionName]);

  return { data, loading, error };
}

export default useFetch;
