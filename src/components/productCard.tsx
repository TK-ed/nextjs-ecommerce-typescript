import { Product } from "@prisma/client";
import PriceTag from "@/components/priceTag";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function Card({ product }: ProductCardProps) {
  const isNew = Date.now() - new Date(product.createdAt).getTime();

  return (
    <Link
      href={"/products/" + product.id}
      className="card w-full bg-base-100 transition-shadow hover:shadow-md"
    >
      <figure>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={800}
          height={400}
          className="h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.name}
          {isNew && <div className="badge badge-neutral">NEW</div>}
        </h2>

        <p>{product.description}</p>
        <PriceTag price={product.price} />
      </div>
    </Link>
  );
}
