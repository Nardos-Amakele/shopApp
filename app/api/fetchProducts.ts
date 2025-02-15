// API call  to fetches product data and stores it in localStorage
export async function getProducts() {
    const cachedData = localStorage.getItem("products");
  
    if (cachedData) {
      return JSON.parse(cachedData);
    }
  
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) throw new Error("Failed to fetch products");
      
      const data = await res.json();
      localStorage.setItem("products", JSON.stringify(data)); //cache the fetched data on local storage
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  