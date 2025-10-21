"use client";

import { motion } from "framer-motion";
import { Terminal, Github, Book, Code, Copy, Check, ExternalLink } from "lucide-react";
import { useState } from "react";

interface CodeFocusedHeroProps {
  className?: string;
}

/**
 * CodeFocusedHero - Developer-focused hero with code aesthetics
 *
 * Features:
 * - Terminal/IDE aesthetic
 * - Syntax-highlighted code snippet
 * - Animated typing effect
 * - Monospace fonts with line numbers
 * - Tech stack badges
 * - Dark code editor theme
 * - Glassmorphism effects
 */
export function CodeFocusedHero({ className = "" }: CodeFocusedHeroProps) {
  const [copied, setCopied] = useState(false);
  const [typedText, setTypedText] = useState("");
  const installCommand = "npm install awesome-ui-kit";

  // Simulated typing effect
  useState(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= installCommand.length) {
        setTypedText(installCommand.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  });

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeExample = `import { Button, Card } from 'awesome-ui-kit'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Card className="p-6">
        <h1>Hello, World!</h1>
        <Button variant="primary">
          Get Started
        </Button>
      </Card>
    </motion.div>
  )
}`;

  const techStack = [
    { name: "React", color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", color: "from-blue-500 to-blue-600" },
    { name: "Tailwind", color: "from-cyan-500 to-teal-500" },
    { name: "Next.js", color: "from-gray-700 to-gray-900" },
    { name: "Framer", color: "from-pink-500 to-purple-500" }
  ];

  return (
    <section className={`relative min-h-[800px] bg-slate-950 text-white overflow-hidden ${className}`}>
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-slate-950 to-purple-950/30" />
      </div>

      {/* Floating Code Symbols */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 right-20 text-6xl text-cyan-500/20 font-mono"
      >
        {'</>'}
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute bottom-32 left-20 text-5xl text-purple-500/20 font-mono"
      >
        {'{}'}
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium backdrop-blur-sm">
                <Terminal className="w-4 h-4" />
                v2.0 - Now with TypeScript support
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Ship code
                <span className="block font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  {'<faster />'}
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Production-ready components with TypeScript, accessibility built-in, and stellar DX. Just copy, paste, and customize.
              </p>

              {/* Installation Command */}
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 font-mono">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Terminal className="w-4 h-4" />
                    <span>Terminal</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded-md text-sm text-gray-300 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-400" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="text-cyan-400 text-lg">
                  <span className="text-gray-500">$</span> {typedText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-2 h-5 bg-cyan-400 ml-1"
                  />
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2">
                  <Book className="w-5 h-5" />
                  View Documentation
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <button className="px-8 py-4 bg-slate-900 border-2 border-slate-800 hover:border-cyan-500 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2">
                  <Github className="w-5 h-5" />
                  Star on GitHub
                </button>
              </div>

              {/* Tech Stack Badges */}
              <div className="pt-8">
                <p className="text-sm text-gray-400 mb-4">Built with modern technologies</p>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="px-4 py-2 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg"
                    >
                      <span className={`font-semibold text-transparent bg-clip-text bg-gradient-to-r ${tech.color}`}>
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">1000+</div>
                  <div className="text-sm text-gray-400 mt-1">Components</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">50K+</div>
                  <div className="text-sm text-gray-400 mt-1">Downloads</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">98%</div>
                  <div className="text-sm text-gray-400 mt-1">TypeScript</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Code Editor */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Code Editor Window */}
              <div className="relative bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden">
                {/* Editor Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Code className="w-4 h-4" />
                    <span>App.tsx</span>
                  </div>
                  <div className="w-12" />
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-sm overflow-x-auto">
                  {codeExample.split('\n').map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                      className="flex gap-4"
                    >
                      <span className="text-gray-600 select-none text-right w-6">
                        {index + 1}
                      </span>
                      <span className="flex-1">
                        {line.includes('import') && (
                          <span className="text-purple-400">{line}</span>
                        )}
                        {line.includes('export') && (
                          <span>
                            <span className="text-purple-400">export default </span>
                            <span className="text-blue-400">function</span>
                            <span className="text-yellow-400"> App</span>
                            <span className="text-gray-400">{'() {'}</span>
                          </span>
                        )}
                        {line.includes('return') && (
                          <span>
                            <span className="text-purple-400">  return</span>
                            <span className="text-gray-400"> (</span>
                          </span>
                        )}
                        {line.includes('<motion.div') && (
                          <span className="text-green-400">{line}</span>
                        )}
                        {line.includes('initial') && (
                          <span className="text-cyan-400">{line}</span>
                        )}
                        {line.includes('animate') && (
                          <span className="text-cyan-400">{line}</span>
                        )}
                        {line.includes('<Card') && (
                          <span className="text-green-400">{line}</span>
                        )}
                        {line.includes('<h1>') && (
                          <span>
                            <span className="text-green-400">        {'<h1>'}</span>
                            <span className="text-white">Hello, World!</span>
                            <span className="text-green-400">{'</h1>'}</span>
                          </span>
                        )}
                        {line.includes('<Button') && (
                          <span className="text-green-400">{line}</span>
                        )}
                        {line.includes('Get Started') && (
                          <span>
                            <span className="text-white">          Get Started</span>
                          </span>
                        )}
                        {line.includes('</') && !line.includes('<h1>') && !line.includes('function') && (
                          <span className="text-green-400">{line}</span>
                        )}
                        {line === '    >' && <span className="text-green-400">{line}</span>}
                        {line === '  )' && <span className="text-gray-400">{line}</span>}
                        {line === '}' && <span className="text-gray-400">{line}</span>}
                        {line === '' && <span>&nbsp;</span>}
                      </span>
                    </motion.div>
                  ))}
                  {/* Cursor */}
                  <motion.div
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-cyan-400 ml-1"
                  />
                </div>
              </div>

              {/* Floating Feature Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
                className="absolute -bottom-6 -right-6 bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Build Status</div>
                    <div className="font-semibold text-green-400">All Tests Passing</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">100% TypeScript Coverage</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
