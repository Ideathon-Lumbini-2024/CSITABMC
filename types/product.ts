export type Review = {
    id: number
    user: string
    rating: number
    comment: string
    date: Date
}

export type Product = {
    id: number
    slug: string
    name: string
    description: string
    price: number
    rating: number
    reviews: Review[]
    images: string[]
    category: string
    inStock: boolean
    features?: string[]
    dimensions?: {
        width: number
        height: number
        depth: number
    }
    weight?: number
    materials?: string[]
    sustainabilityScore?: number
    isEcoFriendly?: boolean
    manufacturer?: string
    origin?: string
    dateAdded: Date
    lastUpdated: Date
    manufacturingVideo?: string
}