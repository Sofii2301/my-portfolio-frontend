export default function useSortedTimeline(items) {
  const parseDate = (date) => {
    const [year, month = "1"] = date.split("-");
    return new Date(Number(year), Number(month) - 1);
  };

  const sorted = [...items].sort((a, b) => {
    const dateA = parseDate(a.startDate);
    const dateB = parseDate(b.startDate);

    return dateB - dateA; // más reciente primero
  });

  const years = [...new Set(sorted.map(item => item.startDate.split("-")[0]))];

  return { sorted, years };
}