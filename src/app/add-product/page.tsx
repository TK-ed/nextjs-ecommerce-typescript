import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import Button from "@/components/button";

export const metadata = {
  title: "Add product - Zephyr",
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price)
    throw Error("Missing Fields required");

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
}

export default function AddProductPage() {
  return (
    <>
      <h1 className="mb-3 text-3xl font-bold">Add product</h1>
      <form action={addProduct}>
        <input
          type="text"
          name="name"
          className="input input-bordered mb-3 w-full"
          placeholder="Name"
          required
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered mb-3 w-full"
        />
        <input
          type="url"
          name="imageUrl"
          className="input input-bordered mb-3 w-full"
          placeholder="Image Url"
        />
        <input
          type="number"
          name="price"
          className="input input-bordered mb-3 w-full"
          placeholder="Price"
        />
        <Button className="btn-block">Add Product!!</Button>
      </form>
    </>
  );
}
