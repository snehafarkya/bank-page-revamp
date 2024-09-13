import { useRouter } from "next/router";
import fake from '../../components/FakeData.json'
export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Fetch product based on ID (in real case, you might want to fetch from API)
  const product = fake.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-[#97144d]">{product.title}</h1>
      <p className="text-lg mt-4 text-gray-600">{product.desc}</p>

      {/* Add more detailed information about the product */}
    </div>
  );
}
