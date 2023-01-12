import {useQuery} from "react-query";

type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

interface UserResponse {
    users: User[]
}

export function useUsers() {
    return useQuery<UserResponse>('users', async () => {
        const response = await fetch('http://localhost:3000/mirage/users')

        return await response.json()
    }, {
        staleTime: 1000 * 5
    });
}