import { Button } from "@/components/ui/button";
import { Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const loading = false;

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <form className="flex flex-col gap-5 md:p-8 w-full max-w-md rounded-lg mx-4">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl mb-2">Forgot Password</h1>
          <p className="text-sm text-gray-600">
            Enter your email address to reset your password
          </p>
        </div>
        <div className="mb-4">
          <div className="relative w-full">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="pl-10 selection:focus-visible:ring-1 w-full"
            ></input>
            <Mail className="absolute inset-y-0 left-2 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <div className="mb-10">
          {loading ? (
            <Button
              disabled
              className="w-full bg-orange-500 hover:bg-orange-300"
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin " />
              Please wait{" "}
            </Button>
          ) : (
            <Button className="w-full bg-orange-500 hover:bg-orange-300">
              Send reset link
            </Button>
          )}
        </div>
        <span>
          Back to {""}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default ForgotPassword;
