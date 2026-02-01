const ProductCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow">
      <div className="h-52 skeleton"></div>

      <div className="card-body p-4 space-y-3">
        <div className="h-4 w-3/4 skeleton"></div>
        <div className="h-4 w-1/3 skeleton"></div>

        <div className="flex gap-2">
          <div className="h-5 w-20 skeleton"></div>
          <div className="h-4 w-12 skeleton"></div>
        </div>

        <div className="flex justify-between mt-3">
          <div className="h-8 w-28 skeleton"></div>
          <div className="h-8 w-20 skeleton"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
