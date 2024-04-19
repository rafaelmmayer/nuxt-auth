export interface Claim {
    type: string,
    value: string
}

export interface User {
    claims: Claim[];
}