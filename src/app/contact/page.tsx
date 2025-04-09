export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-6">
        We'd love to hear from you! Please use the information below to get in touch with our team.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
          <p className="mb-2"><strong>Email:</strong> support@vibecheck.example</p>
          <p className="mb-2"><strong>Phone:</strong> (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Web Lane, Internet City, 98765</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Business Hours</h2>
          <p className="mb-2"><strong>Monday-Friday:</strong> 9:00 AM - 5:00 PM</p>
          <p><strong>Saturday-Sunday:</strong> Closed</p>
        </div>
      </div>
    </div>
  );
}
