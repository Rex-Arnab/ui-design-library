"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/showcase/page-header";
import { ComponentPreview } from "@/components/showcase/component-preview";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Check, Sparkles } from "lucide-react";

export default function AnimationsPage() {
  const [showFadeIn, setShowFadeIn] = useState(false);
  const [showSlideUp, setShowSlideUp] = useState(false);
  const [showScaleIn, setShowScaleIn] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3]);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const addItem = () => {
    setItems([...items, items.length + 1]);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item !== id));
  };

  return (
    <div className="space-y-12">
      <PageHeader
        title="Animation Examples"
        description="Interactive animation demos using Framer Motion. Smooth, performant animations for modern web applications."
      />

      {/* Basic Animations */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Basic Animations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ComponentPreview
            title="Fade In"
            description="Simple opacity transition"
            code={`import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>`}
          >
            <div className="space-y-4">
              <Button onClick={() => setShowFadeIn(!showFadeIn)}>
                Toggle
              </Button>
              <AnimatePresence>
                {showFadeIn && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={fadeInVariants}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <p className="text-sm">Fading in and out</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Slide Up"
            description="Slide from bottom with opacity"
            code={`import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
>
  Content
</motion.div>`}
          >
            <div className="space-y-4">
              <Button onClick={() => setShowSlideUp(!showSlideUp)}>
                Toggle
              </Button>
              <AnimatePresence>
                {showSlideUp && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={slideUpVariants}
                    transition={{ duration: 0.4 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <p className="text-sm">Sliding up from below</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Scale In"
            description="Zoom effect with opacity"
            code={`import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>`}
          >
            <div className="space-y-4">
              <Button onClick={() => setShowScaleIn(!showScaleIn)}>
                Toggle
              </Button>
              <AnimatePresence>
                {showScaleIn && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={scaleInVariants}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <p className="text-sm">Scaling in</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* List Animations */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">List Animations</h2>
        <ComponentPreview
          title="Stagger Children"
          description="Sequential animation of child elements"
          code={`import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {items.map(item => (
    <motion.div key={item} variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>`}
        >
          <div className="space-y-4">
            <Button onClick={() => setShowList(!showList)}>
              {showList ? "Hide" : "Show"} List
            </Button>
            <AnimatePresence>
              {showList && (
                <motion.div
                  variants={listContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-2"
                >
                  {[1, 2, 3, 4, 5].map((item) => (
                    <motion.div key={item} variants={listItemVariants}>
                      <Card>
                        <CardContent className="p-4 flex items-center justify-between">
                          <span className="text-sm">List item {item}</span>
                          <Check className="h-4 w-4 text-green-500" />
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ComponentPreview>
      </section>

      {/* Interactive Animations */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Interactive Animations</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ComponentPreview
            title="Add/Remove Items"
            description="Animate items entering and leaving"
            code={`import { motion, AnimatePresence } from "framer-motion";

<AnimatePresence>
  {items.map(item => (
    <motion.div
      key={item}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      layout
    >
      {item}
    </motion.div>
  ))}
</AnimatePresence>`}
          >
            <div className="space-y-4">
              <Button onClick={addItem} size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </Button>
              <div className="space-y-2">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.8, x: -20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8, x: 20 }}
                      layout
                      transition={{ duration: 0.3 }}
                    >
                      <Card>
                        <CardContent className="p-3 flex items-center justify-between">
                          <span className="text-sm">Item {item}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Number Counter"
            description="Animate number changes"
            code={`import { motion } from "framer-motion";

<motion.div
  key={count}
  initial={{ scale: 1.2, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.3 }}
>
  {count}
</motion.div>`}
          >
            <div className="space-y-4">
              <div className="flex gap-2">
                <Button onClick={() => setCount(count + 1)} size="sm">
                  Increment
                </Button>
                <Button onClick={() => setCount(0)} variant="outline" size="sm">
                  Reset
                </Button>
              </div>
              <Card>
                <CardContent className="p-6 flex items-center justify-center">
                  <motion.div
                    key={count}
                    initial={{ scale: 1.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-4xl font-bold text-primary"
                  >
                    {count}
                  </motion.div>
                </CardContent>
              </Card>
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Hover & Tap Animations */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Hover & Tap Effects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ComponentPreview
            title="Hover Scale"
            description="Scale up on hover"
            code={`<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Hover me
</motion.div>`}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className="cursor-pointer">
                <CardContent className="p-6 text-center">
                  <p className="text-sm font-medium">Hover & Click</p>
                </CardContent>
              </Card>
            </motion.div>
          </ComponentPreview>

          <ComponentPreview
            title="Hover Lift"
            description="Lift up with shadow"
            code={`<motion.div
  whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
>
  Hover me
</motion.div>`}
          >
            <motion.div
              whileHover={{
                y: -4,
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
              transition={{ duration: 0.2 }}
            >
              <Card className="cursor-pointer">
                <CardContent className="p-6 text-center">
                  <p className="text-sm font-medium">Lift Effect</p>
                </CardContent>
              </Card>
            </motion.div>
          </ComponentPreview>

          <ComponentPreview
            title="Hover Rotate"
            description="Rotate on hover"
            code={`<motion.div
  whileHover={{ rotate: 5 }}
>
  Hover me
</motion.div>`}
          >
            <motion.div whileHover={{ rotate: 5 }} transition={{ duration: 0.2 }}>
              <Card className="cursor-pointer">
                <CardContent className="p-6 text-center">
                  <p className="text-sm font-medium">Rotate</p>
                </CardContent>
              </Card>
            </motion.div>
          </ComponentPreview>

          <ComponentPreview
            title="Hover Glow"
            description="Border glow effect"
            code={`<motion.div
  whileHover={{ borderColor: "hsl(var(--primary))" }}
>
  Hover me
</motion.div>`}
          >
            <motion.div
              whileHover={{ borderColor: "hsl(var(--primary))" }}
              className="border-2 border-transparent rounded-lg"
            >
              <Card className="cursor-pointer border-0">
                <CardContent className="p-6 text-center">
                  <p className="text-sm font-medium">Border Glow</p>
                </CardContent>
              </Card>
            </motion.div>
          </ComponentPreview>
        </div>
      </section>

      {/* Modal Animation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Modal Animation</h2>
        <ComponentPreview
          title="Animated Modal"
          description="Modal with backdrop and content animations"
          code={`import { motion, AnimatePresence } from "framer-motion";

<AnimatePresence>
  {isOpen && (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="fixed inset-0 flex items-center justify-center"
      >
        <Card>
          <CardHeader>
            <CardTitle>Modal Content</CardTitle>
          </CardHeader>
        </Card>
      </motion.div>
    </>
  )}
</AnimatePresence>`}
        >
          <div className="space-y-4">
            <Button onClick={() => setShowModal(true)}>Open Modal</Button>

            <AnimatePresence>
              {showModal && (
                <>
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowModal(false)}
                    className="fixed inset-0 bg-black/50 z-50"
                  />

                  {/* Modal */}
                  <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 20 }}
                      transition={{ type: "spring", duration: 0.5 }}
                      className="pointer-events-auto"
                    >
                      <Card className="w-[400px]">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle>Animated Modal</CardTitle>
                              <CardDescription>
                                This modal appears with smooth animations
                              </CardDescription>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setShowModal(false)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">
                            Both the backdrop and modal content are animated
                            independently for a professional feel.
                          </p>
                          <Button
                            onClick={() => setShowModal(false)}
                            className="w-full"
                          >
                            Close Modal
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </>
              )}
            </AnimatePresence>
          </div>
        </ComponentPreview>
      </section>

      {/* Continuous Animations */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Continuous Animations</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ComponentPreview
            title="Infinite Rotation"
            description="Continuously rotating element"
            code={`<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "linear"
  }}
>
  <Sparkles />
</motion.div>`}
          >
            <div className="flex items-center justify-center p-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Sparkles className="h-12 w-12 text-primary" />
              </motion.div>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Pulse Effect"
            description="Pulsing scale animation"
            code={`<motion.div
  animate={{ scale: [1, 1.1, 1] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  Content
</motion.div>`}
          >
            <div className="flex items-center justify-center p-8">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Badge className="px-4 py-2 text-sm">
                  <span className="mr-2">•</span>
                  Live
                </Badge>
              </motion.div>
            </div>
          </ComponentPreview>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Performance Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <ul className="list-disc list-inside space-y-1">
                <li>Use transform properties (scale, rotate, translate) for best performance</li>
                <li>Avoid animating expensive properties like width, height, or box-shadow</li>
                <li>Use layout prop for smooth position changes</li>
                <li>Implement exit animations with AnimatePresence</li>
                <li>Consider reduced motion preferences</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Accessibility</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <ul className="list-disc list-inside space-y-1">
                <li>Respect prefers-reduced-motion</li>
                <li>Keep animations short (200-400ms)</li>
                <li>Ensure focus indicators remain visible</li>
                <li>Don&apos;t rely solely on animation to convey information</li>
                <li>Test with keyboard navigation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
