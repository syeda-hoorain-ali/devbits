import { IBlog } from "@/models/Blog";
import { ApiResponse } from "@/types";
import axios, { AxiosError } from "axios";

export const getBlogs = async (): Promise<IBlog[]> => {
    try {
        const URL = `${process.env.NEXT_PUBLIC_DOMAIN}/api/get-blogs`
        const response = await axios.get<ApiResponse>(URL)

        return response.data.blogs || []

    } catch (error) {
        const axiosError: AxiosError<ApiResponse> = error as AxiosError<ApiResponse>
        console.log(axiosError)
        return [];
    }
}

export const getBlog = async (slug: string): Promise<IBlog | undefined> => {
    try {
        const URL = `${process.env.NEXT_PUBLIC_DOMAIN}/api/get-blog?slug=${slug}`
        const response = await axios.get<ApiResponse>(URL)

        return response.data.blog

    } catch (error) {
        const axiosError: AxiosError<ApiResponse> = error as AxiosError<ApiResponse>
        console.log(axiosError)
        return undefined
    }
}

export const addComment = async (name: string, message: string, slug: string): Promise<IBlog | undefined> => {
    try {
        const URL = `${process.env.NEXT_PUBLIC_DOMAIN}/api/add-comment`
        const response = await axios.post<ApiResponse>(URL, {
            name: name,
            message: message,
            blogSlug: slug,
            createdAt: new Date()
        })

        return response.data.blog

    } catch (error) {
        const axiosError: AxiosError<ApiResponse> = error as AxiosError<ApiResponse>
        console.log(axiosError)
        return undefined
    }
}


