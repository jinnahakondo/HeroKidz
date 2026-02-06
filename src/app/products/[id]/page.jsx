import CartButton from "@/components/buttons/CartButton";
import { getSingleProduct } from "@/server/product";
import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";

// metadata
export async function generateMetadata({ params }) {
  const { id } = await params
  const product = await getSingleProduct(id);

  if (!product) {
    return {
      title: "Product not found | Hero Kidz",
      description: "This product is no longer available.",
    };
  }

  const {
    title,
    bangla,
    description,
    image,
    price,
    discount,
  } = product;

  const finalPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return {
    title: `${title} | Hero Kidz`,
    description: bangla || description.slice(0, 160),

    openGraph: {
      type: "website", // must be website or other valid types
      title: `${title} | Hero Kidz`,
      description: bangla || description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },


    twitter: {
      card: "summary_large_image",
      title: `${title} | Hero Kidz`,
      description: bangla || description,
      images: [image],
    },

    other: {
      "product:price:amount": finalPrice,
      "product:price:currency": "BDT",
    },
  };
}


const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold">Product not found</h2>
      </div>
    );
  }

  const {
    title,
    bangla,
    image,
    price,
    discount,
    ratings,
    reviews,
    description,
    info,
  } = product;

  const finalPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

        {/* LEFT: Image */}
        <div className="lg:col-span-2">
          <div className="card bg-base-100 shadow">
            <figure className="p-6">
              <Image
                src={image}
                alt={title}
                width={450}
                height={450}
                className="object-contain mx-auto"
              />
            </figure>
          </div>
        </div>

        {/* RIGHT: Details */}
        <div className="lg:col-span-3 space-y-6">

          {/* Title */}
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="opacity-70 mt-1">{bangla}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <FaStar />
            <span className="font-medium">{ratings}</span>
            <span className="opacity-60">
              {reviews} customer reviews
            </span>
          </div>

          <div className="divider"></div>

          {/* Price Box */}
          <div className="card bg-base-100 shadow p-6 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold">৳{finalPrice}</span>
              {discount > 0 && (
                <span className="line-through opacity-60">৳{price}</span>
              )}
              {discount > 0 && (
                <span className="badge badge-outline">
                  Save {discount}%
                </span>
              )}
            </div>         
             <CartButton product={product}/>           
            <p className="text-sm opacity-60">
              Cash on delivery available
            </p>
          </div>
        </div>
      </div>
      <div >
        {/* Description */}
        <div className="pt-12">
          <h2 className="text-lg font-semibold mb-2">Product Description</h2>
          <p className="leading-relaxed whitespace-pre-line opacity-80">
            {description}
          </p>
        </div>
        {/* Features */}
        <div className="pt-12">
          <h2 className="text-lg font-semibold mb-2">Why you’ll love it</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {info.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-base-200 rounded-box px-3 py-2"
              >
                <span>✓</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default ProductDetailsPage;
