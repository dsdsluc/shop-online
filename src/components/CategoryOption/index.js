import { useEffect, useState } from "react";
import { CategoryList } from "../../services/Category";
import { useDispatch } from "react-redux";
import { option } from "../../action/category";
import { useNavigate } from "react-router-dom";
function CategoryOption (){
    const [category, setCategory]= useState([]);
    const navigation = useNavigate()
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchApi = async ()=>{
            const response = await CategoryList();
            setCategory(response);
        }
        fetchApi();
    },[])
    const handleOption =(e)=>{
        e.preventDefault();
        const value = e.target.value;
        if(value.length > 0 ){
            dispatch(option(value));
            navigation("/category");
        }
        
    }
    return(
        <>
             <form >
                <select onChange={handleOption} >
                    {category.length > 0 ?(
                        category.map((item, index)=>{
                            return(
                                <option value={item} key={index}>{item}</option>
                            )
                            
                        })
                    ):(
                        <>
                            Dang load du lieu
                        </>
                    )}
                    
                </select>
            </form>
        </>
    )
}
export default CategoryOption;