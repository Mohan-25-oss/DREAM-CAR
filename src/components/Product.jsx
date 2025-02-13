import { Link } from 'react-router';

const Product = (props) => {
// const Product = (props) => {
  // const {image, category, title, price, id}= props.Product;
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={props?.product.image}
          // src={image}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {props?.product.category}
          {/* {category} */}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {props?.product.title}
          {/* {title} */}
        </h2>
        <p className="mt-1">${props?.product.price}</p>
        {/* <p className="mt-1">${price}</p> */}

        <Link to={`/products/${props?.product.id}`}>
          <button className="border p-2 w-full rounded-md">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
