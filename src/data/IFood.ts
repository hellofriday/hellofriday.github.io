export interface IFoodIcon {
    alt: string
    url: string
}
export interface IFood {
    id: string
    image: IFoodIcon
    name: string
    price: number
}
