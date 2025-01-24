"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  databases,
  EVENTS_DATABASE_ID,
  REGISTRATIONS_COLLECTION_ID,
  isClient,
} from "../../../lib/appwrite";
import { BackgroundBeams } from "@/components/BackgroundBeams";
import { Card, CardContent } from "../../components/ui/card";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  event: z.string().min(1, "Event is required"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  department: z.string().min(1, "Department is required"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  college: z.string().min(1, "College name is required"),
});

type FormData = z.infer<typeof formSchema>;

const RegisterPage: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      event: "",
      name: "",
      email: "",
      department: "",
      phoneNumber: "",
      college: "",
    },
  });

  const onSubmit = async (values: FormData) => {
    if (!isClient) return;
    setIsSubmitting(true);

    try {
      const response = await databases.createDocument(
        EVENTS_DATABASE_ID,
        REGISTRATIONS_COLLECTION_ID,
        "unique()",
        values
      );

      if (response.$id) {
        toast({
          title: "Registration Successful! 🎉",
          description:
            "You have been registered for the event. We'll send you more details via email.",
          className:
            "bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-800",
        });
        form.reset();
      }
    } catch (error: any) {
      console.error("Registration failed:", error);

      let errorMessage =
        "There was an error registering for the event. Please try again.";
      if (error?.code === 401) {
        errorMessage =
          "Authorization error. Please make sure you have the right permissions.";
      }

      toast({
        title: "Registration Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-gray-900/95">
      <BackgroundBeams className="absolute inset-0" />
      <Container className="relative pt-20 pb-32">
        <div className="relative z-10">
          <SectionTitle
            preTitle="Join Us"
            title="Register for Our Cyber Events"
            className="text-center mb-12"
          >
            Register for upcoming cyber events at our college. Limited seats
            available!
          </SectionTitle>

          <Card className="max-w-2xl mx-auto backdrop-blur-sm bg-white/10 dark:bg-gray-900/50 border-white/20">
            <CardContent className="p-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="event"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-200">Event</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-gray-900/50 border-white/10 text-gray-200">
                              <SelectValue placeholder="Select an event" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-900 border-white/10">
                            <SelectItem value="Cybersecurity Colloquy 2021">
                              Cybersecurity Colloquy 2021
                            </SelectItem>
                            <SelectItem value="Cybersecurity Colloquy 2022">
                              Cybersecurity Colloquy 2022
                            </SelectItem>
                            <SelectItem value="Cybersecurity Colloquy 2023">
                              Cybersecurity Colloquy 2023
                            </SelectItem>
                            <SelectItem value="Cybersecurity Colloquy 2024">
                              Cybersecurity Colloquy 2024
                            </SelectItem>
                            <SelectItem value="Cyber Colloquy 4.0">
                              Cyber Colloquy 4.0
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="bg-gray-900/50 border-white/10 text-gray-200 placeholder:text-gray-400"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Your email"
                              {...field}
                              className="bg-gray-900/50 border-white/10 text-gray-200 placeholder:text-gray-400"
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-200">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Your phone number"
                            {...field}
                            className="bg-gray-900/50 border-white/10 text-gray-200 placeholder:text-gray-400"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-200">
                          Department/Affiliation
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your department"
                            {...field}
                            className="bg-gray-900/50 border-white/10 text-gray-200 placeholder:text-gray-400"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="college"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-200">
                          College/Institution
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your college or institution"
                            {...field}
                            className="bg-gray-900/50 border-white/10 text-gray-200 placeholder:text-gray-400"
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Registering...
                      </>
                    ) : (
                      "Register Now"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default RegisterPage;
