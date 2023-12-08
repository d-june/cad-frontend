export type ProductType = {
    id: string,
    title: string,
    slug: string,
    images?: string[],
    description: string,
    volume?: number,
    weight: string,
    height: string,
    width: string,
    depth: string,
    burningTime: string,
    price: number,
    top?: boolean,
    generalGroup?: string,
    specifiedGroup?: string,
    color: string,
    aromas?: AromaType[],
    count?: number
}

export type AromaType = {
    name: string,
    count: number,
    id: number,
    productId: string
}

export type SliderInfo = {
    id: number,
    image: string,
    title: string,
    advantage: string,
    advantageDescription: string
}

export type NavItem = {
    id: string,
    label: string,
    href: string
}