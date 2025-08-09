import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Home, User } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon."
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue font-heading">Contact Me</h2>
          <div className="h-1 w-24 bg-portfolio-accent mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out if you have any questions or want to discuss potential collaborations.
            I'm always open to new opportunities and connections.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-12">
            <h3 className="text-2xl font-semibold text-portfolio-blue mb-6 text-center">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-md transition-all">
                <CardContent className="p-6 flex items-start">
                  <div className="bg-portfolio-blue p-3 rounded-full text-white mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a href="mailto:shawon.eee.edu@gmail.com" className="text-gray-600 hover:text-portfolio-accent">
                      shawon.eee.edu@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-all">
                <CardContent className="p-6 flex items-start">
                  <div className="bg-portfolio-blue p-3 rounded-full text-white mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <a href="tel:+4917640423790" className="text-gray-600 hover:text-portfolio-accent">
                      +49 17640423790
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-all">
                <CardContent className="p-6 flex items-start">
                  <div className="bg-portfolio-blue p-3 rounded-full text-white mr-4">
                    <Home size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Address</h4>
                    <p className="text-gray-600">
                      Bntentorsteinweg 396, Bremen, 28201, Germany
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
