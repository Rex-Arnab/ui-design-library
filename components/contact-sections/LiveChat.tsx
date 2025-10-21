"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Clock } from "lucide-react";

interface LiveChatProps {
  className?: string;
}

/**
 * LiveChat - Chat widget integration
 *
 * Features:
 * - Chat box interface mockup
 * - "Chat with us now" CTA
 * - Online/offline status indicator
 * - Fallback email form when offline
 * - Real-time support feel
 * - Toggle between chat and email
 */
export function LiveChat({ className = "" }: LiveChatProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{ id: number; text: string; sender: "user" | "agent" }>>([
    {
      id: 1,
      text: "Hi there! 👋 How can we help you today?",
      sender: "agent",
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: "user" as const,
    };
    setMessages([...messages, newMessage]);
    setMessage("");

    // Simulate agent response
    setTimeout(() => {
      const agentResponse = {
        id: messages.length + 2,
        text: "Thanks for your message! A team member will respond shortly.",
        sender: "agent" as const,
      };
      setMessages((prev) => [...prev, agentResponse]);
    }, 1000);
  };

  return (
    <section className={`py-16 px-4 bg-gray-50 dark:bg-gray-950 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Need Help? We&apos;re Here
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Chat with our support team in real-time or send us a message
          </p>
        </motion.div>

        {/* Status Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  isOnline ? "bg-green-500 animate-pulse" : "bg-gray-400"
                }`}
              />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {isOnline ? "Our team is online" : "Our team is offline"}
              </span>
            </div>
            {!isOnline && (
              <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                <Clock className="w-3 h-3" />
                <span>Available Mon-Fri 9am-5pm PST</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Chat Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <MessageCircle className="w-6 h-6" />
            {isOnline ? "Start Live Chat" : "Send Us a Message"}
          </button>
        </motion.div>

        {/* Chat Widget */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="mt-8 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* Chat Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Support Team</h3>
                    <p className="text-xs opacity-90">
                      {isOnline ? "Online now" : "We'll reply via email"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {isOnline ? (
                <>
                  {/* Chat Messages */}
                  <div className="h-80 overflow-y-auto p-6 space-y-4 bg-gray-50 dark:bg-gray-950">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-xs px-4 py-3 rounded-lg ${
                            msg.sender === "user"
                              ? "bg-blue-600 text-white"
                              : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700"
                          }`}
                        >
                          <p className="text-sm">{msg.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 dark:text-white"
                      />
                      <button
                        onClick={handleSendMessage}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                /* Offline Email Form */
                <div className="p-6 space-y-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Our team is currently offline. Leave us a message and we&apos;ll get back to you
                    as soon as possible.
                  </p>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 dark:text-white"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 dark:text-white resize-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                    Send Message
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Status (Demo Only) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <button
            onClick={() => setIsOnline(!isOnline)}
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <span className="underline">Toggle online/offline status</span> (demo only)
          </button>
        </motion.div>
      </div>
    </section>
  );
}
