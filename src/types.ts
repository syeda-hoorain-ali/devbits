import { IBlog } from "@/models/Blog";

export interface ApiResponse {
    message: string;
    success: boolean;
    blogs?: IBlog[]
    blog?: IBlog
}

