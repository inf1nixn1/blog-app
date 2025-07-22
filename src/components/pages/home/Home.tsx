import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import type { Product } from "./Product";

function Home() {
  const URL = "https://fakestoreapi.com/products";
  const [mahsulotlar, setMahsulotlar] = useState<Product[]>([]);

  async function fetchData() {
    try {
      const res = await axios.get(URL);
      setMahsulotlar(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-16 py-5">
      {mahsulotlar.length > 0 ? (
        <div className="grid grid-cols-4 gap-3">
          {mahsulotlar.map((item: Product) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Home;