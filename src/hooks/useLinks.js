import { useState, useEffect } from "react";

export default function useLinks() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch(`/data/links.json`)
      .then((res) => res.json())
      .then((data) => setLinks(data))
      .catch((err) => console.error("Error cargando links:", err));
  }, []);

  return links;
}
