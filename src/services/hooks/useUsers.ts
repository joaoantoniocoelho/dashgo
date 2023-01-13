import {api} from "../api";
import {useQuery} from "react-query";

type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

interface UserResponse {
    totalCount: number;
    users: User[]
}

const getUsers = async (page: number): Promise<UserResponse> => {
    const {data, headers} = await api.get<UserResponse>('users', {
        params: {
            page
        }
    });
    const totalCount = Number(headers['x-total-count']);

    return {
        users: data.users.map(user => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                createdAt: user.createdAt
            }
        }),
        totalCount
    }
}

export const useUsers = (page: number) => {
    return useQuery(['users', page], () => getUsers(page), {
        staleTime: 1000 * 5 // 5 segundos
    });
}