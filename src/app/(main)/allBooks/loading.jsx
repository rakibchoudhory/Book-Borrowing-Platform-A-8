export default function Loading() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 animate-pulse">
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Book Cover Skeleton */}
        <div className="w-full h-[600px] rounded-xl bg-gray-200" />

        {/* Details Skeleton */}
        <div className="space-y-6">
          <div className="h-10 w-3/4 bg-gray-200 rounded" />

          <div className="h-6 w-1/2 bg-gray-200 rounded" />

          <div className="space-y-3">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />
          </div>

          <div className="h-6 w-48 bg-gray-200 rounded" />

          <div className="h-12 w-44 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </section>
  );
}