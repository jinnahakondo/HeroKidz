const ProductDetailsLoading = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 animate-pulse">

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

        {/* Image Skeleton */}
        <div className="lg:col-span-2">
          <div className="card bg-base-100 shadow">
            <div className="h-[420px] skeleton rounded-box"></div>
          </div>
        </div>

        {/* Right Details Skeleton */}
        <div className="lg:col-span-3 space-y-6">

          {/* Title */}
          <div className="space-y-2">
            <div className="h-8 w-3/4 skeleton"></div>
            <div className="h-4 w-1/2 skeleton"></div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="h-4 w-24 skeleton"></div>
            <div className="h-4 w-32 skeleton"></div>
          </div>

          <div className="divider"></div>

          {/* Price Box */}
          <div className="card bg-base-100 shadow p-6 space-y-4">
            <div className="flex gap-3">
              <div className="h-8 w-32 skeleton"></div>
              <div className="h-6 w-20 skeleton"></div>
              <div className="h-6 w-24 skeleton"></div>
            </div>

            <div className="h-12 w-48 skeleton"></div>

            <div className="h-4 w-44 skeleton"></div>
          </div>
        </div>
      </div>

      {/* Description Skeleton */}
      <div className="pt-12 space-y-3">
        <div className="h-6 w-52 skeleton"></div>
        <div className="h-4 w-full skeleton"></div>
        <div className="h-4 w-full skeleton"></div>
        <div className="h-4 w-3/4 skeleton"></div>
      </div>

      {/* Features Skeleton */}
      <div className="pt-12 space-y-4">
        <div className="h-6 w-52 skeleton"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-10 skeleton rounded-box"
            ></div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ProductDetailsLoading;
