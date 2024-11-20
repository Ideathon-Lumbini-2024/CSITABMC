import type { Product } from "@/types/product"

export const products: Product[] = [
    {
        id: 1,
        slug: "ganja",
        name: "Ganja ko Kapada",
        description: "Experience the pure essence of Nepal with our premium Organic Green Tea. Handpicked from the lush hills of Ilam, this exquisite tea offers a delicate flavor profile with notes of fresh grass and a subtle sweetness. Rich in antioxidants, it's not just a beverage, but a journey to the heart of the Himalayas.",
        price: 299,
        rating: 4.5,
        reviews: [
            { id: 1, user: "Purrna Bahadur", rating: 5, comment: "The best clothes i love it ", date: new Date("2024-02-15") },
            { id: 2, user: "Himalayan Explorer", rating: 4, comment: "Reminds me of my trek in Nepal. Authentic taste!", date: new Date("2024-01-20") }
        ],
        images: [
            "/images/ganja.jpg",
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
    {
        id: 2,
        slug: "Khukuri",
        name: "Khukuri",
        description: "Experience the pure essence of Nepal with our premium Organic Green Tea. Handpicked from the lush hills of Ilam, this exquisite tea offers a delicate flavor profile with notes of fresh grass and a subtle sweetness. Rich in antioxidants, it's not just a beverage, but a journey to the heart of the Himalayas.",
        price: 1299,
        rating: 4.9,
        reviews: [
            { id: 1, user: "Purrna Bahadur", rating: 5, comment: "The best clothes i love it ", date: new Date("2024-02-15") },
            { id: 2, user: "Himalayan Explorer", rating: 4, comment: "Reminds me of my trek in Nepal. Authentic taste!", date: new Date("2024-01-20") }
        ],
        images: [
            "/images/khukuri.jpg",
            "/images/khukuri.jpg",
            "/images/khukuri.jpg"
        ],
        category: "Handmade",
        inStock: true,
        features: ["Bravery", "Hand-picked", "Rich in antioxidants"],
        sustainabilityScore: 10,
        isEcoFriendly: true,
        manufacturer: "Gurkha Manufacturer",
        origin: "Bhojpur, Nepal",
        dateAdded: new Date("2023-01-15"),
        lastUpdated: new Date("2024-03-10"),
        manufacturingVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: 3,
        slug: "Yarsha",
        name: "Yarshagumba",
        description: "Experience the pure essence of Nepal with our premium Yarshagumba. Handpicked from the lush hills of Ilam, this exquisite tea offers a delicate flavor profile with notes of fresh grass and a subtle sweetness. Rich in antioxidants, it's not just a beverage, but a journey to the heart of the Himalayas.",
        price: 2999,
        rating: 5,
        reviews: [
            { id: 1, user: "Purrna Bahadur", rating: 5, comment: "The best , i love it ", date: new Date("2024-02-15") },
            { id: 2, user: "Himalayan Explorer", rating: 4, comment: "Reminds me of my trek in Nepal. Authentic taste!", date: new Date("2024-01-20") }
        ],
        images: [
            "/images/yarsha.jpg",
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

]

export async function getProductBySlug(slug: string): Promise<Product | undefined> {

    await new Promise(resolve => setTimeout(resolve, 500))
    return products.find(product => product.slug === slug)
}

export async function getProducts({ limit = 10, category = 'all' }: { limit?: number, category?: string }) {

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