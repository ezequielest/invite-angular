export interface Guest {
    _id: string;
    cant: number
    confirmed: boolean;
    description: string;
    user: string;
}

export interface GetGuest {
    response: Array<Guest>;
}

export interface AddEditGuest {
    cant: number
    description: string;
}