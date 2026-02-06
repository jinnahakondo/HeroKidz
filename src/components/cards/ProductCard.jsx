import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart, FaEye } from "react-icons/fa";
import CartButton from "../buttons/CartButton";

const ProductCard = ({ product }) => {
  const { title, image, price, discount, ratings, _id } = product;

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="card bg-base-100 shadow hover:shadow-lg transition-all">
      {/* Image */}
      <figure className="relative h-52">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-4"
        />

        {discount > 0 && (
          <div className="badge badge-secondary absolute top-3 left-3">
            {discount}% OFF
          </div>
        )}
      </figure>

      {/* Content */}
      <div className="card-body p-4">
        <h2 className="card-title text-base line-clamp-2">
          {title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <FaStar />
          <span className="text-sm">{ratings}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">
            ৳{discountedPrice}
          </span>

          {discount > 0 && (
            <span className="text-sm line-through opacity-60">
              ৳{price}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="card-actions justify-between mt-auto ">
          <Link href={`/products/${_id}`} className="btn btn-sm w-full">
            <FaEye />
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
