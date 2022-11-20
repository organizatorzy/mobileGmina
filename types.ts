export interface Compost{
    id: number;
    ownerId: number;
    photo: string;
    date: string;
    ownerName: string;
    ref: string;
}


export interface Reward {
    id: string;
    name: string;
    price: number;
    // TODO: add cypher support
    password: string;
    ref: string;
}