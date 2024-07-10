export const fetchItem = async (url: any, str: string, setItem: any, loadItem: any) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL + url}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setItem(data)
    loadItem()
  } catch (error) {
    console.error("Error fetching "+str+":", error);
  }
};


export const fetchResource = async (setItem: any, setError:any) => {

  const url = process.env.NEXT_PUBLIC_RESOURCES_API_URL
  //const url = process.env.NEXT_PUBLIC_API_URL+ "/recursos"
  try {
    const response = await fetch(`${url}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    setItem(data);
  } catch (error) {
    setError("Error al obtener los recursos, pruebe activando la extension de cors")
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
