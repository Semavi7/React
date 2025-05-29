import React, { useEffect, useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { setLoading, setProducts } from '../redux/appSlice';
import CategoryService from '../services/CategoryService';
import { toast } from 'react-toastify';
import type { ProductType } from '../types/Type';
import ProductService from '../services/ProductService';

function Category() {

    const dispatch = useDispatch();
    const [categories, setCategories] = useState<string[]>();

    const getAllCategories = async () => {
        try {
            dispatch(setLoading(true));
            const categories: string[] = await CategoryService.getAllVategories();
            setCategories(categories);
        } catch (error) {
            toast.error("Kategory listesi alınırken hata oluştu : " + error);
        }
        finally {
            dispatch(setLoading(false));
        }
    }

    const handleCategory = async (e: React.ChangeEvent<HTMLInputElement>, categoryName: string) => {
        try {
            if (e.target.checked) {
                const products: ProductType[] = await CategoryService.getProductByCategoryName(categoryName);
                dispatch(setProducts(products));
            }
            else {
                const products: ProductType[] = await ProductService.getAllProduct();
                dispatch(setProducts(products))
            }
        } catch (error) {
            toast.error("Kategoriler alınırken hata oluştu : " + error)
        }
        finally {
            dispatch(setLoading(false))
        }

    }

    useEffect(() => {
        getAllCategories();
    }, [])

    return (
        <div style={{ marginTop: '60px', marginLeft: '20px' }}>
            <FormGroup>
                {
                    categories && categories.map((category: string, index: number) => (
                        <FormControlLabel key={index} control={<Checkbox onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCategory(e, category)} />} label={category} />
                    ))
                }

            </FormGroup>
        </div>
    )
}

export default Category