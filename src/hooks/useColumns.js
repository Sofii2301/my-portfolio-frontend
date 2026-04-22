import { useEffect, useState } from "react";

export default function useColumns() {
  const [columns, setColumns] = useState(getColumns());

  function getColumns() {
    const width = window.innerWidth;
    if (width >= 1200) return 3;
    if (width >= 768) return 4;
    if (width >= 576) return 3;
    return 1;
  }

  useEffect(() => {
    const handleResize = () => setColumns(getColumns());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return columns;
}