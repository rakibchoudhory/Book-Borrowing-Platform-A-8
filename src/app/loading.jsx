export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-5">
        {/* Spinner */}
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-4 border-default-200"></div>
          <div className="absolute inset-0 h-16 w-16 animate-spin rounded-full border-4 border-transparent border-t-primary"></div>
        </div>

        {/* Text */}
        <div className="text-center">
          <h2 className="text-lg font-semibold">Loading</h2>
          <p className="text-sm text-default-500">
            Please wait a moment...
          </p>
        </div>

        {/* Dots Animation */}
        <div className="flex gap-1">
          <span className="h-2 w-2 animate-bounce rounded-full bg-primary"></span>
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-primary"
            style={{ animationDelay: "0.15s" }}
          ></span>
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-primary"
            style={{ animationDelay: "0.3s" }}
          ></span>
        </div>
      </div>
    </div>
  );
}