import { CircleCheck } from "lucide-react";

const VerifyEmail = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center w-full">
      <div className="space-y-4 w-full px-6 max-w-md py-8 rounded-lg border flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold w-full text-center">Yaaaayy!</h2>
        <CircleCheck size={64} />
        <p className="text-sm mt-2 text-gray-500 px-4 text-center">
          A confirmation link has been sent to your email to confirm your
          registration.
        </p>

        <h3 className="text-sm font-semibold">
          Click the link to verify your email
        </h3>
      </div>
    </main>
  );
};

export default VerifyEmail;
