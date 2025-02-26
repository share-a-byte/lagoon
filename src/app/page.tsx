/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AudioWaveform, Mic, Music, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#1a1a2e", "#16213e", "#0f3460"]
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="min-h-screen text-white overflow-hidden cursor-none"
      style={{ backgroundColor }}
    >
      <div
        className="custom-cursor"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: isHovering ? "scale(1.5)" : "scale(1)",
        }}
      />

      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <AudioWaveform className="h-8 w-8 text-purple-500" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            lagoon
          </span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <NavLink href="#features">features</NavLink>
          <NavLink href="#about">about</NavLink>
        </nav>
        <Button
          variant="outline"
          className="hidden md:inline-flex border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          sign up
        </Button>
      </header>

      <main>
        <section className="container mx-auto px-10 py-24 flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              The World&apos;s First Music Protection Software
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              We protect creators, putting undetectable watermarks on music to
              track infringement.
            </p>
            <div className="flex space-x-4">
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <AudioWaveformAnimation />
          </motion.div>
        </section>

        <section id="features" className="py-24 px-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-pink-900/20 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <FeatureCard
                icon={<Mic className="h-12 w-12 text-purple-500" />}
                title="Specific"
                description="We uniquely watermark music millisecond by millisecond, so even small snippets can be isolated and traced back to you."
              />
              <FeatureCard
                icon={<Music className="h-12 w-12 text-purple-500" />}
                title="Imperceptible"
                description="Our watermarks are undetectable to the human ear, making them impossible to copy."
              />
              <FeatureCard
                icon={<Sparkles className="h-12 w-12 text-purple-500" />}
                title="Authentic"
                description="We put individual musicians and creators first, helping you deal with infringements on your own terms."
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-24">
          <motion.div
            className="border border-white rounded-3xl p-12 flex flex-col md:flex-row items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                Ready to protect yourself?
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                Join the musicians already using Lagoon to protect their
                hardwork.
              </p>
            </div>
            <div className="md:w-1/3">
              <form className="flex flex-col space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                />
                <Button
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  Get Early Access
                </Button>
              </form>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <AudioWaveform className="h-6 w-6 text-purple-500" />
            <span className="text-xl font-bold">lagoon</span>
          </div>
          <nav className="flex space-x-6">
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Terms</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </nav>
        </div>
      </footer>
    </motion.div>
  );
}

function NavLink({ href, children }: { href: any; children: any }) {
  return (
    <Link
      href={href}
      className="hover:text-purple-400 transition-colors relative group"
    >
      {children}
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
    </Link>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: any;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray-400 hover:text-purple-400 transition-colors"
    >
      {children}
    </Link>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-8 text-center hover:bg-gray-700 transition-colors relative overflow-hidden group"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative z-10">
        <motion.div
          className="flex justify-center mb-4"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          {title}
        </h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}

const AudioWaveformAnimation: React.FC = () => {
  const waveform = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = waveform.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let i = 0; i < canvas.width; i++) {
        const y =
          canvas.height / 2 + Math.sin(i * 0.05 + Date.now() * 0.01) * 50;
        ctx.lineTo(i, y);
      }

      ctx.strokeStyle = "rgba(139, 92, 246, 0.5)";
      ctx.lineWidth = 2;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={waveform} className="w-full h-64 md:h-96" />;
};
