"use client";

import { useState } from 'react';
import { Button } from '~/components/ui/button';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="relative border-4 border-black p-10 bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-12 overflow-hidden">
          <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-accent border-4 border-black transform rotate-12"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary border-l-4 border-t-4 border-black -mb-6 -mr-6"></div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 relative z-10 tracking-tight">
            Get in <span className="bg-primary px-4 py-2 inline-block transform -rotate-2 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium max-w-3xl">
            Have questions about our product comparison platform? Want to partner with us? We&apos;d love to hear from you!
          </p>
        </div>
      </section>
      
      {/* Contact Info and Form Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Contact Info Cards */}
          <div className="md:col-span-2">
            {/* Office Location */}
            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-10 hover:translate-y-[-5px] hover:shadow-[8px_13px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
              <div className="flex items-start mb-3">
                <div className="w-8 h-8 bg-primary border-2 border-black flex items-center justify-center mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Vibe Check HQ</p>
                  <p className="text-sm">123 Comparison Ave</p>
                  <p className="text-sm">San Francisco, CA 94105</p>
                </div>
              </div>
              <div className="border-t-2 border-black mt-4 pt-4">
                <p className="text-sm mb-2">
                  <span className="font-bold">Monday-Friday:</span> 9:00 AM - 6:00 PM PT
                </p>
                <p className="text-sm">
                  <span className="font-bold">Saturday-Sunday:</span> Closed
                </p>
              </div>
            </div>
            
            {/* Contact Methods */}
            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-10 hover:translate-y-[-5px] hover:shadow-[8px_13px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4">Contact Methods</h2>
              
              <div className="flex items-start mb-5">
                <div className="w-8 h-8 bg-accent text-white border-2 border-black flex items-center justify-center mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Email Us</p>
                  <p className="text-sm">General Inquiries:</p>
                  <a href="mailto:hello@vibecheck.com" className="text-accent font-medium hover:underline">hello@vibecheck.com</a>
                  <p className="text-sm mt-2">Support:</p>
                  <a href="mailto:support@vibecheck.com" className="text-accent font-medium hover:underline">support@vibecheck.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary border-2 border-black flex items-center justify-center mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Call Us</p>
                  <p className="text-sm">Customer Service:</p>
                  <a href="tel:18005551234" className="text-accent font-medium hover:underline">1-800-555-1234</a>
                  <p className="text-sm mt-2">Business Development:</p>
                  <a href="tel:18005551235" className="text-accent font-medium hover:underline">1-800-555-1235</a>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-5px] hover:shadow-[8px_13px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
              <div className="grid grid-cols-2 gap-3">
                <a href="#" className="flex items-center p-3 border-2 border-black hover:bg-primary transition-colors no-underline">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.093 4.093 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.615 11.615 0 006.29 1.84"></path>
                  </svg>
                  Twitter
                </a>
                <a href="#" className="flex items-center p-3 border-2 border-black hover:bg-primary transition-colors no-underline">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                  Facebook
                </a>
                <a href="#" className="flex items-center p-3 border-2 border-black hover:bg-primary transition-colors no-underline">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"></path>
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"></path>
                  </svg>
                  Instagram
                </a>
                <a href="#" className="flex items-center p-3 border-2 border-black hover:bg-primary transition-colors no-underline">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-3 border-2 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            {formSubmitted ? (
              <div className="bg-accent text-white p-6 border-2 border-black mb-4">
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p>Thanks for reaching out. We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-bold mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-bold mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-bold mb-1">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Product Support">Product Support</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="Bug Report">Bug Report</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-bold mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full p-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                
                <div className="pt-4 flex flex-wrap gap-4">
                  <Button 
                    type="submit" 
                    className="border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                  >
                    Send Message
                  </Button>
                  <Button 
                    type="reset" 
                    variant="outline" 
                    className="bg-white border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    onClick={() => setFormData({ name: '', email: '', subject: '', message: '' })}
                  >
                    Reset Form
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-extrabold mb-10 bg-primary inline-block px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Frequently Asked Questions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-2 border-black p-6 bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-bold mb-3">How do I report a technical issue?</h3>
            <p>
              For technical issues, you can contact our support team at support@vibecheck.com or use the form above 
              to send us a detailed description of the problem you're experiencing.
            </p>
          </div>
          
          <div className="border-2 border-black p-6 bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-bold mb-3">Do you offer business partnerships?</h3>
            <p>
              Yes! We're always looking to partner with companies that share our vision. Please reach out to our 
              business development team at partnerships@vibecheck.com.
            </p>
          </div>
          
          <div className="border-2 border-black p-6 bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-bold mb-3">What's your typical response time?</h3>
            <p>
              We aim to respond to all inquiries within 24-48 business hours. For urgent matters, 
              please call our customer service line directly.
            </p>
          </div>
          
          <div className="border-2 border-black p-6 bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-bold mb-3">Can I request a product to be added?</h3>
            <p>
              Absolutely! We're constantly expanding our product database. Use our contact form and select 
              "Feature Request" to let us know what products you'd like to see.
            </p>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="mb-20">
        <div className="border-2 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="aspect-[16/9] w-full bg-secondary relative flex items-center justify-center">
            {/* This would be a real map in a production environment */}
            <div className="text-center p-10">
              <h3 className="text-2xl font-bold mb-2">Interactive Map Coming Soon</h3>
              <p>In a production environment, an interactive map would be displayed here</p>
            </div>
            <div className="absolute border-2 border-black w-8 h-8 bg-primary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-bold">
              📍
            </div>
            
            <div className="absolute top-6 left-6 border-2 border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-3">
              <p className="font-bold">Vibe Check Headquarters</p>
              <p className="text-sm">123 Comparison Ave, San Francisco</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
