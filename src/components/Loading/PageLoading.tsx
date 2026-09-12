const PageLoading = () => {
  return (
    <div
      id="loading"
      className="fixed inset-0 z-50 flex hidden flex-col items-center justify-center bg-white/90 backdrop-blur-sm transition-opacity duration-700"
    >
      <img
        loading="lazy"
        src="/assets/logo/full-horizontal.svg"
        className="h-20 w-40 animate-bounce"
        alt="Logo"
      />

      <p className="mt-4 text-lg text-gray-600">در حال بارگذاری...</p>
    </div>
  );
};

export default PageLoading;
