const SDKCard = (sdk: { name: string; description: string }) => {
  return (
    <div className="flex flex-col gap-2 md:gap-6 border border-[#3C4947] text-start p-4 md:p-8 rounded-xs backdrop-blur-2xl  bg-[linear-gradient(124.2deg,rgba(0,163,146,0.05)_29.77%,rgba(255,255,255,0.0005)_75.14%)]">
      <h2 className="text-lg md:text-xl font-medium">{sdk.name}</h2>
      <p className="text-muted">{sdk.description}</p>
    </div>
  );
};

export default SDKCard;
// background: linear-gradient(124.2deg, rgba(0, 163, 146, 0.05) 29.77%, rgba(255, 255, 255, 0.0005) 75.14%);
