'use client';

import { SignUp } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignUpPage() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Create an account to register for events</CardDescription>
        </CardHeader>
        <CardContent>
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary: 'bg-blue-500 hover:bg-blue-600 text-sm normal-case',
                card: 'shadow-none',
              },
            }}
            redirectUrl={`${process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL}`}
          />
        </CardContent>
      </Card>
    </div>
  );
}
