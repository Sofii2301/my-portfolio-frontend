export default function useSortedTimeline(items) {
    const sorted = [...items].sort((a, b) => {
      const aYear = parseInt(a.startDate.split("-")[0]);
      const bYear = parseInt(b.startDate.split("-")[0]);
      return bYear - aYear;
    });
  
    const years = [...new Set(sorted.map(item => item.startDate.split("-")[0]))];
  
    return { sorted, years };
  }
  