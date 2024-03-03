export interface PriceType {
    planeName: string;
    price: number;
}

export interface TestimonialType {
    name: string;
    title: string;
    imgUrl: string;
}

export interface Team2Type {
    imgUrl: string;
    name: string;
    title: string;
    description: string;
}

export interface ServiceType {
    imgUrl: string;
    icon: string;
    title: string;
    brief: string;
}

export interface ProjectType {
    imgUrl: string;
    title: string;
    category: string;
}

export interface TeamType {
    title: string;
    category: string;
    imgUrl: string;
}

export interface FaqType {
    title: string;
    description: string;
}

export interface BlogType {
    imgUrl: string;
    title: string;
    date: string;
}

export interface BlogType2 {
    imgUrl: string;
    title: string;
    description: string;
}

export interface BreadcumbType {
    title: string;
    list: {
        name: string;
        url: string;
    }[];
}
