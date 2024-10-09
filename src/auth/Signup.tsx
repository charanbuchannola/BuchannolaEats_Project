import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignupInpuState, userSignupSchema } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail, PhoneCall, User } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [input, setInput] = useState<SignupInpuState>({
    fullname: "",
    email: "",
    password: "",
    contact: "",
  });

  const [errors, setErrors] = useState<Partial<SignupInpuState>>({});
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    // form validation check start
    const result = userSignupSchema.safeParse(input);
    if (!result.success) {
      const fielderrors = result.error.formErrors.fieldErrors;
      setErrors(fielderrors as Partial<SignupInpuState>);
      return;
    }

    // login api implementation start here
    console.log(input);
  };

  const loading = false;
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={loginSubmitHandler}
        className="md:p-8 w-full max-w-md rounded-lg md:border border-gray-200 mx-4"
      >
        <div className="mb-4">
          <h1 className="font-bold text-2xl">BuchannolaEats</h1>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="FULL NAME"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            ></Input>
            <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {errors && (
              <span className="text-sm text-red-500"> {errors.fullname} </span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            ></Input>
            <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {errors && (
              <span className="text-sm text-red-500"> {errors.email} </span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            ></Input>
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {errors && (
              <span className="text-sm text-red-500"> {errors.password} </span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="CONTACT"
              name="contact"
              value={input.contact}
              onChange={changeEventHandler}
              className="pl-10 focus-visible:ring-1"
            ></Input>
            <PhoneCall className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
            {errors && (
              <span className="text-sm text-red-500"> {errors.contact} </span>
            )}
          </div>
        </div>
        <div className="mb-10">
          {loading ? (
            <Button
              disabled
              className="w-full bg-orange-500 hover:bg-orange-300"
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait{" "}
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-300"
            >
              Signup
            </Button>
          )}
        </div>
        <Separator />
        <p className="mt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
