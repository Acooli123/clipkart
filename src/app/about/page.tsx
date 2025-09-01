"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Smartphone, Star, Rocket, Heart, Zap, Award, Shield, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    customers: 0,
    products: 0,
    brands: 0,
    uptime: 0
  });

  // Animate statistics when they come into view
  useEffect(() => {
    if (statsVisible) {
      const targets = {
        customers: 50000,
        products: 100000,
        brands: 500,
        uptime: 99.9
      };

      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setAnimatedStats({
          customers: Math.floor(targets.customers * progress),
          products: Math.floor(targets.products * progress),
          brands: Math.floor(targets.brands * progress),
          uptime: parseFloat((targets.uptime * progress).toFixed(1))
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedStats(targets);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [statsVisible]);

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation",
      description: "We constantly push boundaries to bring you the latest in shopping technology and user experience."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer First",
      description: "Every decision we make is centered around creating value and delight for our customers."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Speed & Reliability",
      description: "Fast delivery, quick support, and a platform you can always count on."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality",
      description: "We partner only with the best brands and sellers to ensure premium quality products."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Security",
      description: "Your data, payments, and privacy are protected with enterprise-grade security."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and building a sustainable future for e-commerce."
    }
  ];

  const team = [
    { name: "Rahul Sharma", role: "Founder & CEO", initials: "RS", color: "from-purple-500 to-pink-500" },
    { name: "Priya Kumar", role: "Head of Technology", initials: "PK", color: "from-blue-500 to-cyan-500" },
    { name: "Amit Singh", role: "Head of Operations", initials: "AS", color: "from-green-500 to-teal-500" },
    { name: "Neha Kapoor", role: "Head of Design", initials: "NK", color: "from-orange-500 to-red-500" }
  ];

  const FloatingShape = ({ icon, className }: { icon: React.ReactNode; className: string }) => (
    <div className={`absolute text-white/20 text-4xl animate-pulse ${className}`}>
      {icon}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800"></div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12"></div>
        </div>

        {/* Floating shapes */}
        <FloatingShape icon={<ShoppingBag />} className="top-20 left-10 animate-bounce delay-1000" />
        <FloatingShape icon={<Smartphone />} className="top-40 right-20 animate-bounce delay-2000" />
        <FloatingShape icon={<Star />} className="bottom-32 left-20 animate-bounce delay-3000" />

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Clipkart
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Revolutionizing online shopping with innovative technology and unmatched customer experience
          </p>
          <Link href="/home" className="group inline-block">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-violet-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25">
              <span className="flex items-center gap-2">
                Discover Our Journey
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              </span>
            </button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-white/60 to-transparent rounded-full"></div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-300 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Born from a vision to make online shopping seamless, personal, and delightful for everyone
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-cyan-400 mb-6">The Beginning</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Founded in 2020, Clipkart emerged from a simple idea: online shopping should be as enjoyable as walking through your favorite store. Our founders recognized the gap between digital convenience and personal touch.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                What started as a small team with big dreams has grown into a platform that serves thousands of customers daily, always putting user experience at the heart of everything we do.
              </p>
              <div className="flex flex-wrap gap-4 pt-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm">Customer Focused</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30">
                  <Zap className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">Fast & Reliable</span>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.6"
                  alt="Team collaboration"
                  className="w-full h-80 lg:h-96 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide us in creating exceptional shopping experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats-section" className="py-20 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent mb-2">
                {animatedStats.customers.toLocaleString()}+
              </div>
              <div className="text-gray-300 text-lg">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {animatedStats.products.toLocaleString()}+
              </div>
              <div className="text-gray-300 text-lg">Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">
                {animatedStats.brands}+
              </div>
              <div className="text-gray-300 text-lg">Brands</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                {animatedStats.uptime}%
              </div>
              <div className="text-gray-300 text-lg">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-300 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The passionate individuals working tirelessly to bring you the best shopping experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-4"
              >
                <div className={`h-48 bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                  <span className="text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    {member.initials}
                  </span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white">
            Ready to Experience the Future of Shopping?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have made Clipkart their go-to shopping destination
          </p>
          <Link href="/t-shirt" className="group inline-block">
            <button className="px-10 py-5 bg-white text-gray-900 rounded-full font-bold text-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/25">
              <span className="flex items-center justify-center gap-3">
                Start Shopping Now
                <ShoppingBag className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </button>
          </Link>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full animate-pulse delay-1000"></div>
      </section>
    </div>
  );
};

export default AboutPage;