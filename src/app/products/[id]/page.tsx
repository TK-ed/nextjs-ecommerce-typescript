import PriceTag from "@/components/priceTag";
import { prisma } from "@/lib/db/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (!product) notFound();

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={500}
        className="rounded-lg"
        priority
      />
      <div>
        <h1 className="text-5xl font-bold">{product.name}</h1>
        <PriceTag price={product.price} className="mt-4" />
        <p className="py-5">{product.description}</p>
      </div>
    </div>
  );
}