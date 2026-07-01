interface ContinueButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function ContinueButton({ onClick, disabled = false }: ContinueButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/25 text-lg ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      Continue to Interview Type
    </button>
  );
}
