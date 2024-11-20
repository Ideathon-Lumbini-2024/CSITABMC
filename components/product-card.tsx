import Image from "next/image";
import Link from "next/link";
import { Star, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-[250px]">
      <Link href={`/products/${product.slug}`}>
        <div className="aspect-square overflow-hidden rounded-t-lg relative">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={250}
            height={250}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
          {product.isEcoFriendly && (
            <Badge className="absolute top-2 right-2 bg-green-500">
              <Leaf className="h-3 w-3 mr-1" /> Eco-Friendly
            </Badge>
          )}
        </div>
      </Link>
      <CardContent className="p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-medium line-clamp-2 hover:underline">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
        <div className="mt-2 flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating)
                  ? "fill-primary text-primary"
                  : "fill-muted text-muted-foreground"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-muted-foreground">
            ({product.reviews.length})
          </span>
        </div>
        <div className="mt-2 text-lg font-bold">
          Rs. {product.price.toFixed(2)}
        </div>
        {product.sustainabilityScore && (
          <div className="mt-1 text-sm">
            Sustainability Score: {product.sustainabilityScore}/10
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" asChild>
          <Link href={`/products/${product.slug}`}>View Product</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
