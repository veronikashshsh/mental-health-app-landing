import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

interface EmailSubscriptionProps {
  onSubmit?: (email: string) => void; // Функція, що обробляє email
}

const EmailSubscription: React.FC<EmailSubscriptionProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    if (onSubmit) {
      onSubmit(email);
    }

    setMessage("Wait for a message in your email");
    setEmail("");
  };

  return (
    <div className="space-y-4">
      <div className="flex rounded-lg bg-white/90 shadow-2xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:border-gray-400 transition-all duration-300">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="flex-1 py-3 px-4 bg-transparent text-gray-800 text-base placeholder:text-gray-500 placeholder:font-normal border-none rounded-l-lg focus:outline-none transition-all duration-300"
        />
        <button
  onClick={handleSubmit}
  className="px-6 py-3 text-white rounded-r-lg transition-all duration-200 bg-[#8397D3] hover:bg-[#7181b0] active:scale-95 active:shadow-inner"
>
  <ArrowRight className="w-5 h-5" />
</button>

      </div>
      {message && (
        <p className="text-sm text-gray-700 font-medium px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 shadow-sm">
          {message}
        </p>
      )}
    </div>
  );
};

export default EmailSubscription;