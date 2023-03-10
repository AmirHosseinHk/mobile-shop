import Product from './Products/Product';
import Users from './Users/Users';
import Offers from './Offers/Offers';
import Orders from './Orders/Orders';
import Comments from './comments/Comments';


const routes=[
    {path:'/products',element:<Product />},
    {path:'/users',element:<Users />},
    {path:'/offs',element:<Offers />},
    {path:'/comments',element:<Comments />},
    {path:'/orders',element:<Orders />}
]

export default routes