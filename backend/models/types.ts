export type Collection = {
    uuid: string
    size: number
    created_at: string
    updated_at: string
}

export type Item = {
    uuid: string
    collection_id: string
    name: string
    description: string
    price: number // in cents
    created_at: string
    images: Record<string, string>
}

export type Producer = {
    uuid: string
    email: string
    password: string
    created_at: string
}