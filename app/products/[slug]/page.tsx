"use client";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/data";
import { HeroSlider } from "@/components/hero-slider";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <HeroSlider images={product.images} />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-4">
            Rs. {product.price.toFixed(2)}
          </p>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              ({product.reviews.length} reviews)
            </span>
          </div>
          <p className="mb-6">{product.description}</p>
          <Button
            className="w-full mb-4"
            onClick={() => alert("Product added to cart!")}
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
          {product.manufacturingVideo && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">
                Manufacturing Process
              </h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={product.manufacturingVideo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        {product.reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 py-4">
            <div className="flex items-center mb-2">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold">{review.user}</span>
            </div>
            <p className="text-gray-600">{review.comment}</p>
            <p className="text-sm text-gray-500 mt-1">
              {review.date.toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
