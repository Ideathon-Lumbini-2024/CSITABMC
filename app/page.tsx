"use client";

import { ProductCard } from "@/components/product-card";
import { ProductCarousel } from "@/components/product-carousel";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <ProductCarousel products={[]} />

      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6">Hot Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="my-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Shop Products</h2>
          <Button variant="outline">View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.slice(0, 10).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
