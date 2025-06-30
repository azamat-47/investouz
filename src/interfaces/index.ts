export interface SaleStartUPData {
    title: string;
    titleInfo: string;
    name: string,
    id: number;
    companyName: string;
    phone: number;
    email?: string;
    telegram?: string;
    date: string;
    info: string;
    companyType: string;
    investmentSize: number;
    investmentValyuta: string;
    investmentVolume: string;
    reyting: number;
    status: boolean;
    locationPreference: string;
    qiziqishi: string;
    tashkilTopgan: string;
    ishchiSoni: number;
    kasbi: string;
    image: string;
}

export interface StartUPData {
    title: string;
    titleInfo: string;
    id: number;
    companyName: string;
    phone: number;
    email?: string;
    telegram?: string;
    date: string;
    info: string;
    companyType: string;
    investmentSize: string;
    investmentValyuta: string;
    reyting: number;
    status: boolean;
    locationPreference: string;
    image: string;
}


export interface GroupData {
    id: number;
    companyName: string;
    info: string;
    fullInfo: string;
    phone: number;
    email?: string;
    telegram?: string;
    date: string;
    companyType: string;
    reyting: number;
    status: boolean;
    locationPreference: string;
    image: string;
}