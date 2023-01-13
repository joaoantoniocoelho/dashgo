import {api} from "../services/api";
import {useQuery} from "react-query";
import {UserResponse} from "../types/types";

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
                createdAt: new Date(new Date(Date.now() - Math.floor(Math.random() * 10000000000))).toISOString()
            }
        }),
        totalCount
    }
}

export const useUsers = (page: number) => {
    return useQuery(['users', page], () => getUsers(page), {
        staleTime: 1000 * 60 * 10 // 10 minutes
    });
}