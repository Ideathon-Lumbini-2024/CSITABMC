import type { Product } from "@/types/product"

export const products: Product[] = [
    {
        id: 1,
        slug: "organic-green-tea",
        name: "Organic Green Tea",
        description: "Experience the pure essence of Nepal with our premium Organic Green Tea. Handpicked from the lush hills of Ilam, this exquisite tea offers a delicate flavor profile with notes of fresh grass and a subtle sweetness. Rich in antioxidants, it's not just a beverage, but a journey to the heart of the Himalayas.",
        price: 299,
        rating: 4.5,
        reviews: [
            { id: 1, user: "Tea Lover", rating: 5, comment: "The best green tea I've ever tasted!", date: new Date("2024-02-15") },
            { id: 2, user: "Himalayan Explorer", rating: 4, comment: "Reminds me of my trek in Nepal. Authentic taste!", date: new Date("2024-01-20") }
        ],
        images: [
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600",
            "/placeholder.svg?height=400&width=600"
        ],
        category: "Tea & Spices",
        inStock: true,
        features: ["Organic", "Hand-picked", "Rich in antioxidants"],
        sustainabilityScore: 9,
        isEcoFriendly: true,
        manufacturer: "Nepal Tea Collective",
        origin: "Ilam, Nepal",
        dateAdded: new Date("2023-01-15"),
        lastUpdated: new Date("2024-03-10"),
        manufacturingVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    // Add more products here...
]

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    return products.find(product => product.slug === slug)
}

export async function getProducts({ limit = 10, category = 'all' }: { limit?: number, category?: string }) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    let filteredProducts = products

    if (category !== 'all') {
        filteredProducts = products.filter(product => {
            if (category === 'featured') return product.rating >= 4
            if (category === 'new') return new Date().getTime() - product.dateAdded.getTime() < 30 * 24 * 60 * 60 * 1000
            if (category === 'best') return product.reviews.length > 2
            return true
        })
    }

    return filteredProducts.slice(0, limit)
}