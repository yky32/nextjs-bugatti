export interface ICheckoutPostContactsData {
    order_id: string;
    phone?: string;
    email?: string;
    receive_marketing_info?: '1';
}
export declare enum TCheckoutStep {
    contactInfo = "contact-info",
    shippingAddress = "shipping-address",
    shippingMethod = "shipping-method",
    paymentMethod = "payment-method",
    thankYou = "thank-you"
}
export interface ICheckoutStepper {
    filledSteps: TCheckoutStep[];
    currentStep: TCheckoutStep;
    steps: TCheckoutStep[];
}
export declare type TCheckoutRedirect = TCheckoutStep | 'url';
export interface ICheckoutPostAddressData {
    order_id: string;
    first_name?: string;
    last_name: string;
    company?: string;
    address_line_1: string;
    address_line_2?: string;
    city: string;
    state?: string;
    country_id: number | string;
    zip: string;
    phone?: string;
    comment?: string;
}
