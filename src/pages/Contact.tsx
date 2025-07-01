
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for contacting me! I will respond as soon as possible.');
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "hoanyttv@gmail.com",
      href: "mailto:hoanyttv@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "0842500199",
      href: "tel:0842500199"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Address",
      value: "Cầu Giấy - Hà Nội",
      href: null
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-white mb-6">
          Contact Me
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          I'm always open to discussing new projects, work opportunities, or just chatting about technology. 
          Feel free to reach out to me!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-8">
            Contact Information
          </h2>
          
          <div className="space-y-6 mb-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="text-blue-400">
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Connect With Me
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/hoandk203"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="mailto:hoanyttv@gmail.com"
                className="flex items-center justify-center w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                <Mail className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-8">
            Send Message
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-white">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="mt-2 bg-gray-800 border-gray-700 text-white focus:border-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-white">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2 bg-gray-800 border-gray-700 text-white focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <Label htmlFor="subject" className="text-white">
                Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleInputChange}
                className="mt-2 bg-gray-800 border-gray-700 text-white focus:border-blue-500"
                placeholder="Message subject"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-white">
                Message *
              </Label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="mt-2 w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message content..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-50 hover:bg-blue-200 text-black"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Contact;
