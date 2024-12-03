"use server";

import axios from "axios";
import { LOCAL_DATABASE_URL } from "../../contants";

export type HistoricResultType = {
    id: number,
    weight: number,
    reward: string,
    startDate: string,
    endDate: string,
    userId: string
}

export async function getHistoric(
    userId: string,
    token: string
) {
    try {
        const { data } = await axios.get(
            `${LOCAL_DATABASE_URL}/users/${userId}/historics`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            },

        )
        return data
    } catch (error) {
        console.log(error)
    }
}