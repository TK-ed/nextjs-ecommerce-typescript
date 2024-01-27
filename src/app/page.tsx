import Card from "@/components/productCard";
import { prisma } from "@/lib/db/prisma";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <div>
      Products:
      <Card product={products[0]} />
    </div>
  );
}
