import { Guest } from './guest.model';

export interface Gift {
    _id: string;
    description: string;
    user: string;
    gifted_by?: string;
}

export interface GuestGift {
    _id: string;
    user: string;
    gifted_by: string;
    gift: string;
    isMoney: boolean;
    cant: number;
}

export interface GetGift {
    response: Array<Gift>;
}

export interface GetGiftPrivate {
    response: {
        guestGifts: Array<GuestGift>;
        gifts: Array<Gift>;
    }
}

export interface GiftPrivate {
    guestGifts: Array<GuestGift>;
    gifts: Array<Gift>;
}

export interface GetSummary {
    response: GiftSummary;
}

export interface GiftSummary {
    _id: string,
    alreadyDone: boolean,
    cant: number,
    description: string
    user: string
    giftedBy: Guest
}