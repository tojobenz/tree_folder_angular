export class User {
    id: number;
    name: string;
    roles: string;
    email: string;
    cabinet_id: number | null;
    active_account?: string;
    email_verified_at?: string;
    created_at?: string;
    updated_at?: string;
}

export enum UserRole {
    ADMIN = '1',
    MANAGER = '2',
    USER = '3'
}
