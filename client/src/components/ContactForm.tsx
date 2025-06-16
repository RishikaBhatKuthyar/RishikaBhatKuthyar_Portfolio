// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useToast } from "@/hooks/use-toast";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// const formSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters" }),
//   email: z.string().email({ message: "Please enter a valid email address" }),
//   subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
//   message: z.string().min(10, { message: "Message must be at least 10 characters" })
// });

// type FormValues = z.infer<typeof formSchema>;

// const ContactForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();
  
//   const form = useForm<FormValues>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       subject: "",
//       message: ""
//     }
//   });

// const onSubmit = async (data: FormValues) => {
//   setIsSubmitting(true);

//   try {
//     const response = await fetch("https://formspree.io/f/mdkzzbqq", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: JSON.stringify(data)
//     });

//     if (!response.ok) throw new Error("Submission failed");

//     toast({
//       title: "Message sent!",
//       description: "Thank you for your message. I'll get back to you soon."
//     });

//     form.reset();
//   } catch (error) {
//     toast({
//       title: "An error occurred",
//       description: "Unable to send your message. Please try again later.",
//       variant: "destructive"
//     });
//   } finally {
//     setIsSubmitting(false);
//   }
// };


//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="text-gray-700 dark:text-gray-300">Name</FormLabel>
//               <FormControl>
//                 <Input 
//                   placeholder="Your name" 
//                   className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
//                   {...field} 
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
        
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="text-gray-700 dark:text-gray-300">Email</FormLabel>
//               <FormControl>
//                 <Input 
//                   type="email" 
//                   placeholder="your@email.com" 
//                   className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
//                   {...field} 
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
        
//         <FormField
//           control={form.control}
//           name="subject"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="text-gray-700 dark:text-gray-300">Subject</FormLabel>
//               <FormControl>
//                 <Input 
//                   placeholder="Project inquiry" 
//                   className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
//                   {...field} 
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
        
//         <FormField
//           control={form.control}
//           name="message"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel className="text-gray-700 dark:text-gray-300">Message</FormLabel>
//               <FormControl>
//                 <Textarea 
//                   placeholder="Your message here..." 
//                   rows={5}
//                   className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 resize-none"
//                   {...field} 
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
        
//         <motion.div whileTap={{ scale: 0.97 }}>
//           <Button 
//             type="submit" 
//             className="w-full bg-primary-600 hover:bg-primary-700"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? "Sending..." : "Send Message"}
//           </Button>
//         </motion.div>
//       </form>
//     </Form>
//   );
// };

// export default ContactForm;
