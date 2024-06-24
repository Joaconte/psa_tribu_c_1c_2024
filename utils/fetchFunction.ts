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

  export const fetchResource = async (setItem: any, setLoading: any) => {
    
    const url = 'https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos'
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL+"/recursos"}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setItem(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching resources:", error);
    }
  };


  export const fetchDeleteItem = async (url: any, str: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL + url}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
    } catch (error) {
      console.error("Error fetching "+str+":", error);
    }
  };