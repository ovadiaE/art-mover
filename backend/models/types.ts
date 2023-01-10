export type Collection = {
    uuid: string,
    name: string,
    size: number,
    created_at: Date,
    producer_id: string
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

export type Token = {
    user: 'string',
    admin: boolean,
    iat: number,
    exp: number
}

export type SQL_Error = {
    length: number,
    severity: string,
    code: string,
    detail: string,
    hint: any,
    position: any,
    internalPosition: any,
    internalQuery: any,
    where: any,
    schema: string,
    table: string,
    column: any,
    dataType: any,
    constraint: string,
    file: string,
    line: string,
    routine: string  
}