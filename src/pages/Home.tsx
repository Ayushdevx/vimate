import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Users, Calendar, Shield, Sparkles, ArrowRight, 
  Star, Coffee, BookOpen, Laptop, Music, Camera, Palette, 
  MessageCircle, Award, Zap
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useAuthStore } from '../store/useAuthStore';

const FeatureCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-purple-600" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const TestimonialCard = ({ name, department, quote, image }: {
  name: string,
  department: string,
  quote: string,
  image: string
}) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-xl p-6 shadow-sm"
  >
    <div className="flex items-center gap-4 mb-4">
      <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-600">{department}</p>
      </div>
    </div>
    <p className="text-gray-700 italic">"{quote}"</p>
  </motion.div>
);

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { startExploring } = useAuthStore();

  const handleStartMatching = () => {
    startExploring();
    navigate('/discover');
  };

  const features = [
    {
      icon: Heart,
      title: "Smart Matching",
      description: "Our AI-powered algorithm finds your perfect match based on interests and compatibility."
    },
    {
      icon: Calendar,
      title: "Campus Events",
      description: "Discover and join exciting events happening around campus."
    },
    {
      icon: BookOpen,
      title: "Study Groups",
      description: "Find study partners and form groups for better academic performance."
    },
    {
      icon: Coffee,
      title: "Virtual Coffee Dates",
      description: "Connect virtually before meeting in person."
    },
    {
      icon: Shield,
      title: "Verified Profiles",
      description: "All profiles are verified using institutional email."
    },
    {
      icon: MessageCircle,
      title: "Safe Communication",
      description: "Secure and private messaging system for your peace of mind."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      department: "Computer Science",
      quote: "Found my study group and best friends through VIMate!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Rahul Patel",
      department: "Electronics",
      quote: "The events feature helped me network with like-minded people.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    },
    {
      name: "Priya Sharma",
      department: "Business Administration",
      quote: "Best platform to make meaningful connections on campus!",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-20 pb-32 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Your Perfect Match at{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">VIT</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Connect with fellow VITians, discover meaningful relationships, and create lasting memories on campus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  onClick={handleStartMatching}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                >
                  <Heart className="w-5 h-5" />
                  Start Matching
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose VIMate?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover all the amazing features that make VIMate the perfect platform for campus connections.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from VITians who found their perfect matches through our platform.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              whileInView={{ scale: [0.5, 1] }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">5000+</div>
              <div className="text-gray-600">Active Users</div>
            </motion.div>
            <motion.div
              whileInView={{ scale: [0.5, 1] }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-gray-600">Successful Matches</div>
            </motion.div>
            <motion.div
              whileInView={{ scale: [0.5, 1] }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Events Hosted</div>
            </motion.div>
            <motion.div
              whileInView={{ scale: [0.5, 1] }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">4.8★</div>
              <div className="text-gray-600">User Rating</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">VIMate</h3>
              <p className="text-gray-400">
                Connecting hearts and minds at VIT.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/safety" className="text-gray-400 hover:text-white">Safety</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2">
                <li><Link to="/discover" className="text-gray-400 hover:text-white">Matching</Link></li>
                <li><Link to="/events" className="text-gray-400 hover:text-white">Events</Link></li>
                <li><Link to="/chat" className="text-gray-400 hover:text-white">Chat</Link></li>
                <li><Link to="/communities" className="text-gray-400 hover:text-white">Communities</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} VIMate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};