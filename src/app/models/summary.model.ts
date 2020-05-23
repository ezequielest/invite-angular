import { GiftSummary } from './gift.model';

export interface getSummary {
    response: Summary;
}

export interface Summary {
    guestSummary: Array<any>;
    giftSummary: Array<GiftSummary>;
}