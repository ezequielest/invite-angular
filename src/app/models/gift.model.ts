export interface Gift {
    _id: string;
    description: string;
    user: string;
    gifted_by?: string;
}

export interface GetGift {
    response: Array<Gift>;
}