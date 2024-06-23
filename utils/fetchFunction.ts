export const fetchItem = async (url: any, str: string, setItem: any, setLoading: any) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL + url}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setItem(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching "+str+":", error);
    }
  };