'use client';

import { useState, useCallback } from 'react';
import { SignIn, SignUp } from "@clerk/nextjs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "../../lib/utils";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: 'sign-in' | 'sign-up';
  redirectUrl?: string;
}

export function AuthModal({ isOpen, onClose, mode = 'sign-in', redirectUrl }: AuthModalProps) {
  const [authMode, setAuthMode] = useState(mode);

  const handleSignInComplete = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 bg-background">
        <div className={cn(
          "flex flex-col w-full p-6",
          "dark:bg-background dark:text-foreground"
        )}>
          {authMode === 'sign-in' ? (
            <SignIn
              appearance={{
                elements: {
                  formButtonPrimary: 'bg-primary hover:bg-primary/90 text-primary-foreground',
                  card: 'shadow-none bg-transparent',
                  headerTitle: 'text-foreground',
                  headerSubtitle: 'text-muted-foreground',
                  socialButtonsBlockButton: 'bg-muted hover:bg-muted/90 text-foreground',
                  formFieldLabel: 'text-foreground',
                  formFieldInput: 'bg-muted border-muted-foreground text-foreground',
                  footerActionLink: 'text-primary hover:text-primary/90',
                },
              }}
              afterSignInUrl={redirectUrl}
              signUpUrl="#"
              routing="virtual"
            />
          ) : (
            <SignUp
              appearance={{
                elements: {
                  formButtonPrimary: 'bg-primary hover:bg-primary/90 text-primary-foreground',
                  card: 'shadow-none bg-transparent',
                  headerTitle: 'text-foreground',
                  headerSubtitle: 'text-muted-foreground',
                  socialButtonsBlockButton: 'bg-muted hover:bg-muted/90 text-foreground',
                  formFieldLabel: 'text-foreground',
                  formFieldInput: 'bg-muted border-muted-foreground text-foreground',
                  footerActionLink: 'text-primary hover:text-primary/90',
                },
              }}
              afterSignUpUrl={redirectUrl}
              signInUrl="#"
              routing="virtual"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
