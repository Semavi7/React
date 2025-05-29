import axios, { type AxiosResponse } from "axios";
import type { ProductType } from "../types/Type";

class CategoryService {

    BASE_URL = "https://fakestoreapi.com";

    getAllVategories(): Promise<string[]> {
        return new Promise((resolve: any, reject: any) => {
            axios.get(`${this.BASE_URL}/products/categories`)
                .then((response: AxiosResponse<any, any>) => resolve(response.data))
                .catch((error: any) => reject(error));
        })
    }

    getProductByCategoryName(categoryName: string): Promise<ProductType[]> {
        return new Promise((resolve: any, reject: any) => {
            axios.get(`${this.BASE_URL}/products/category/${categoryName}`)
                .then((response: AxiosResponse<any, any>) => resolve(response.data))
                .catch((error: any) => reject(error));
        })
    }
}

export default new CategoryService();