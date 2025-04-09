interface ProductErrorMessageProps {
  message: string | null;
  onRetry: () => void;
}

export default function ProductErrorMessage({ 
  message, 
  onRetry 
}: ProductErrorMessageProps) {
  if (!message) return null;

  return (
    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 flex justify-between items-center">
      <p>{message}</p>
      <button 
        onClick={onRetry} 
        className="bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
