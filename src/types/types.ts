export interface User {
    id: number;
    name: string;
    email: string;
    createdAt: string;
}

export interface UserResponse {
    totalCount: number;
    users: User[]
}


export interface CreateUserFormData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}