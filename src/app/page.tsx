import Card from "@/components/productCard";
import Image from "next/image";
import { prisma } from "@/lib/db/prisma";
import Link from "next/link";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <div>
      Products:
      <div className="hero rounded-xl bg-base-200">
        <div className="hero-content flex flex-col lg:flex-row">
          <Image
            src={products[0].imageUrl}
            alt={products[0].name}
            width={400}
            height={800}
            className="w-full max-w-sm rounded-lg shadow-2xl"
            priority
          />
          <div>
            <h1 className="font-bold">{products[0].name}</h1>
            <p className="py-6">{products[0].description}</p>
            <Link
              href={"/products/" + products[0].id}
              className="btn btn-outline"
            >
              Check it out!!
            </Link>
          </div>
        </div>
      </div>
      <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.slice(1).map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
