"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { databases, EVENTS_DATABASE_ID, REGISTRATIONS_COLLECTION_ID } from "../../../lib/appwrite";
import { BackgroundBeams } from "@/components/BackgroundBeams";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

const formSchema = z.object({
  event: z.string().nonempty("Event is required"),
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email address"),
  department: z.string().nonempty("Department is required"),
  phoneNumber: z.string().min(10, "Phone number must be 10 digits"),
  college: z.string().nonempty("College is required"),
});

const RegisterForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const searchParams = useSearchParams();
  const eventId = searchParams.get('eventId');

  const form = useForm({
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

  useEffect(() => {
    const fetchEventTitle = async () => {
      if (eventId) {
        try {
          const response = await databases.getDocument(
            EVENTS_DATABASE_ID,
            'events', // Replace with your events collection ID
            eventId
          );
          setEventTitle(response.title);
          form.setValue('event', response.title);
        } catch (error) {
          console.error("Error fetching event title:", error);
          toast({
            title: "Error",
            description: "Failed to fetch event details. Please try again.",
            variant: "destructive",
          });
        }
      }
    };

    fetchEventTitle();
  }, [eventId, form, toast]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      const response = await databases.createDocument(
        EVENTS_DATABASE_ID,
        REGISTRATIONS_COLLECTION_ID,
        'unique()',
        values
      );
      
      if (response.$id) {
        toast({
          title: "Registration Successful! 🎉",
          description: "You have been registered for the event. We'll send you more details via email.",
          className: "bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-800",
        });
        form.reset();
      }
    } catch (error: any) {
      console.error("Registration failed:", error);
      
      let errorMessage = "There was an error registering for the event. Please try again.";
      if (error?.code === 401) {
        errorMessage = "Authorization error. Please make sure you have the right permissions.";
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
            title="Register for Cyber Events"
            className="text-center mb-12"
          >
            <p className="text-gray-400 mt-4 text-lg">
              Register for upcoming cyber events at our college. Limited seats available!
            </p>
          </SectionTitle>
          
          <Card className="max-w-2xl mx-auto backdrop-blur-sm bg-white/10 dark:bg-gray-900/50 border-white/20">
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="event"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-200">Event</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            value={eventTitle}
                            disabled
                            className="bg-gray-900/50 border-white/10 text-gray-200"
                          />
                        </FormControl>
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
                        <FormLabel className="text-gray-200">Phone Number</FormLabel>
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
                        <FormLabel className="text-gray-200">Department/Affiliation</FormLabel>
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
                        <FormLabel className="text-gray-200">College/Institution</FormLabel>
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
                      'Register Now'
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

export default RegisterForm;
