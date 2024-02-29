// funciton based component
import Productlist from "./productList";
function Product()
{
    return (
        <div className="alignProduct">  
            <Productlist />
            <Productlist />
            <Productlist />
            <Productlist />
            <Productlist />
            <Productlist />
            <Productlist />
        </div>
    )
}
export default Product;