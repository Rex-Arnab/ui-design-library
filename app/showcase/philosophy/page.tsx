"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Lightbulb,
  Rocket,
  Target,
  Zap,
  Eye,
  Heart,
  CheckCircle2,
  XCircle,
  Code,
  TrendingUp,
  Users,
  Shield,
  Compass,
  Sparkles,
  Gauge,
  GitBranch,
  Package,
  MessageSquare,
} from "lucide-react";

// Design Philosophy Principles
const designPrinciples = [
  {
    number: "01",
    title: "Start with constraints, not possibilities",
    description:
      "Constraints fuel creativity. By eliminating gradients, we make bolder color choices. By limiting complexity, we create clarity. The best designs emerge when we work within intentional boundaries.",
    icon: Compass,
    color: "cyan-500",
  },
  {
    number: "02",
    title: "Design is how it works, not just how it looks",
    description:
      "Beauty without function is decoration. Every interface decision must serve the user's goal. Visual appeal should emerge from purposeful interaction patterns, not arbitrary embellishment.",
    icon: Eye,
    color: "pink-500",
  },
  {
    number: "03",
    title: "Brutalist honesty over decorative complexity",
    description:
      "Show the structure. Expose the grid. Use bold borders and sharp edges. Authenticity resonates more than polish. Raw, intentional design communicates confidence and respect for users' intelligence.",
    icon: Shield,
    color: "purple-600",
  },
  {
    number: "04",
    title: "Solid colors create stronger decisions",
    description:
      "Gradients hide uncertainty. Solid colors demand commitment. When you can't blend two options, you're forced to choose the right one. This constraint elevates every design decision.",
    icon: Sparkles,
    color: "yellow-500",
  },
  {
    number: "05",
    title: "Accessibility is not optional",
    description:
      "Design for everyone or design for no one. High contrast ratios, semantic HTML, keyboard navigation, and screen reader support aren't features—they're fundamental requirements of ethical design.",
    icon: Heart,
    color: "orange-500",
  },
  {
    number: "06",
    title: "Every pixel should earn its place",
    description:
      "Question everything. Does this shadow serve a purpose? Does this animation guide attention? If a visual element doesn't improve usability or communicate meaning, remove it ruthlessly.",
    icon: Target,
    color: "cyan-500",
  },
];

// Business Philosophy Principles
const businessPrinciples = [
  {
    number: "01",
    title: "Ship fast, iterate faster",
    description:
      "Perfect is the enemy of shipped. Launch at 80% and improve based on real user feedback. The market rewards speed of learning, not theoretical perfection. Momentum beats meditation.",
    icon: Rocket,
    color: "pink-500",
  },
  {
    number: "02",
    title: "Open source beats closed gardens",
    description:
      "Transparency builds trust. Shared code accelerates everyone. When developers win, we all win. The future belongs to communities, not monopolies. Give freely and growth follows.",
    icon: Users,
    color: "purple-600",
  },
  {
    number: "03",
    title: "Developer experience is user experience",
    description:
      "Happy developers build better products. Frustrating tools create frustrated teams. Invest in DX like you invest in UX. Great documentation, clear APIs, and smooth workflows compound over time.",
    icon: Code,
    color: "yellow-500",
  },
  {
    number: "04",
    title: "Documentation is a feature, not an afterthought",
    description:
      "Undocumented features don't exist. Code speaks to machines; docs speak to humans. Write the docs first, build the feature second. If you can't explain it simply, you don't understand it deeply.",
    icon: Lightbulb,
    color: "orange-500",
  },
  {
    number: "05",
    title: "Free forever means free forever",
    description:
      "Build trust through consistency. No bait-and-switch pricing. No feature hostages. When we say free, we mean it. Monetize value-add services, never core functionality. Integrity over revenue.",
    icon: Shield,
    color: "cyan-500",
  },
  {
    number: "06",
    title: "Build tools we'd want to use",
    description:
      "Eat your own dog food. If you wouldn't use it, don't expect others to. The best product teams are their own first customers. Internal pain drives external polish.",
    icon: Zap,
    color: "pink-500",
  },
];

// MVP Philosophy Principles
const mvpPrinciples = [
  {
    number: "01",
    title: "Minimum Viable ≠ Minimum Valuable",
    description:
      "MVP doesn't mean broken. It means focused. Ship the smallest version that delivers genuine value. Cut features ruthlessly but never cut quality. Minimum scope, maximum craft.",
    icon: Target,
    color: "purple-600",
  },
  {
    number: "02",
    title: "Focus on the 20% that delivers 80% of value",
    description:
      "The Pareto principle is your compass. Identify core value propositions and nail them completely. 80% coverage of 100% features is worse than 100% coverage of 20% features.",
    icon: TrendingUp,
    color: "yellow-500",
  },
  {
    number: "03",
    title: "Perfect is the enemy of shipped",
    description:
      "Done beats perfect. Shipped beats polished. Real users expose real problems that you'd never predict in isolation. The sooner you launch, the sooner you learn, the sooner you win.",
    icon: Rocket,
    color: "orange-500",
  },
  {
    number: "04",
    title: "Start with the problem, not the solution",
    description:
      "Fall in love with problems, not solutions. Validate pain points before building features. The best MVPs solve obvious problems in new ways, not new problems in obvious ways.",
    icon: Lightbulb,
    color: "cyan-500",
  },
  {
    number: "05",
    title: "Validate with real users, not assumptions",
    description:
      "Your intuition is a hypothesis, not a fact. Ship prototypes to actual humans. Watch them struggle. Listen to their silence. Data beats opinions. Behavior beats surveys. Reality beats spreadsheets.",
    icon: Users,
    color: "pink-500",
  },
  {
    number: "06",
    title: "Speed of learning > speed of building",
    description:
      "Fast code without insight is just fast failure. Optimize for information gain, not feature count. Run experiments, measure outcomes, kill what doesn't work. Learning velocity compounds.",
    icon: Sparkles,
    color: "purple-600",
  },
];

// Code Philosophy Principles
const codePrinciples = [
  {
    number: "01",
    title: "Code is read 10x more than it's written",
    description:
      "Optimize for clarity, not cleverness. Future developers (including yourself) will thank you. Readable code is maintainable code. Write for humans first, compilers second.",
    icon: Code,
    color: "green-500",
  },
  {
    number: "02",
    title: "Explicit is better than implicit",
    description:
      "Magic creates confusion. Be direct about intent. Clear function names, obvious data flows, and transparent abstractions beat clever shortcuts. Boring code is reliable code.",
    icon: Eye,
    color: "blue-500",
  },
  {
    number: "03",
    title: "Optimize for deletion, not addition",
    description:
      "The best code is no code. Every line is a liability to maintain. Before adding complexity, ask: can I delete something instead? Simple solutions compound over time.",
    icon: Target,
    color: "indigo-500",
  },
  {
    number: "04",
    title: "Make illegal states unrepresentable",
    description:
      "Use type systems to prevent bugs, not just document them. Design APIs where invalid operations are impossible. Compile-time safety beats runtime error handling.",
    icon: Shield,
    color: "violet-500",
  },
  {
    number: "05",
    title: "Duplication is better than wrong abstraction",
    description:
      "Don't force patterns prematurely. Repeat yourself until the right abstraction emerges naturally. Wrong abstractions are harder to fix than duplicated code. Wait for clarity.",
    icon: GitBranch,
    color: "green-500",
  },
];

// Collaboration Philosophy Principles
const collaborationPrinciples = [
  {
    number: "01",
    title: "Async by default, sync when needed",
    description:
      "Respect deep work time. Default to written communication. Schedule meetings only when real-time discussion adds clear value. Time zones shouldn't block progress.",
    icon: MessageSquare,
    color: "blue-500",
  },
  {
    number: "02",
    title: "Documentation beats meetings",
    description:
      "Write it down. Decisions made in meetings evaporate without documentation. Written context scales infinitely. Good docs prevent repeated questions and enable autonomous work.",
    icon: Lightbulb,
    color: "indigo-500",
  },
  {
    number: "03",
    title: "Trust scales better than process",
    description:
      "Hire great people, then get out of their way. Micromanagement kills momentum. Trust creates ownership. Autonomy attracts talent. Process should enable, not constrain.",
    icon: Heart,
    color: "violet-500",
  },
  {
    number: "04",
    title: "Disagree and commit",
    description:
      "Debate ideas vigorously, then align completely. Lingering disagreement after decisions is toxic. Commit fully even when you disagree. Unity of execution beats perfection of planning.",
    icon: Target,
    color: "green-500",
  },
  {
    number: "05",
    title: "Feedback is a gift, not an attack",
    description:
      "Critique work, not people. Assume good intent. Directness builds trust. Withholding feedback is unkind. Growth requires uncomfortable conversations. Make feedback normal, not scary.",
    icon: Sparkles,
    color: "blue-500",
  },
];

// Product Philosophy Principles
const productPrinciples = [
  {
    number: "01",
    title: "Fall in love with problems, not solutions",
    description:
      "Your solution is a hypothesis. The problem is the truth. Stay flexible on how, stay rigid on why. When you love your solution too much, you stop listening to users.",
    icon: Heart,
    color: "indigo-500",
  },
  {
    number: "02",
    title: "Build for power users, design for beginners",
    description:
      "Make it simple to start, powerful to master. Onboarding should be effortless, advanced features shouldn't compromise simplicity. Progressive disclosure is your friend.",
    icon: Users,
    color: "violet-500",
  },
  {
    number: "03",
    title: "Every feature has a cost",
    description:
      "Features aren't free. They add complexity, maintenance burden, and cognitive load. Before saying yes, consider what you're saying no to. Subtraction can be innovation.",
    icon: Package,
    color: "green-500",
  },
  {
    number: "04",
    title: "User feedback is a compass, not a roadmap",
    description:
      "Listen to problems, not solutions. Users know what hurts, not what heals. Ask 'why' five times. Build for the pain beneath the request, not the request itself.",
    icon: Compass,
    color: "blue-500",
  },
  {
    number: "05",
    title: "Distribution beats features",
    description:
      "The best product that nobody knows about loses to the good product everyone uses. Build sharing into the core experience. Word-of-mouth is your sustainable moat.",
    icon: TrendingUp,
    color: "indigo-500",
  },
];

// Performance Philosophy Principles
const performancePrinciples = [
  {
    number: "01",
    title: "Fast is a feature",
    description:
      "Speed isn't a technical detail—it's a user experience multiplier. Every 100ms of latency costs you users. Performance is the most underrated feature you can ship. Make it feel instant.",
    icon: Zap,
    color: "violet-500",
  },
  {
    number: "02",
    title: "Measure before optimizing",
    description:
      "Gut feelings lie. Profile, don't guess. Premature optimization wastes time. Identify bottlenecks with data, then fix what actually matters. Measure twice, optimize once.",
    icon: Gauge,
    color: "green-500",
  },
  {
    number: "03",
    title: "Progressive enhancement beats graceful degradation",
    description:
      "Start with core functionality that works everywhere. Add enhancements for capable devices. Don't build for the best case then patch for the worst. Build up, not down.",
    icon: TrendingUp,
    color: "blue-500",
  },
  {
    number: "04",
    title: "Loading states are part of the design",
    description:
      "Don't leave users wondering. Skeleton screens, progress indicators, and optimistic updates aren't nice-to-haves. Perceived performance often matters more than actual performance.",
    icon: Sparkles,
    color: "indigo-500",
  },
  {
    number: "05",
    title: "Performance budgets prevent regressions",
    description:
      "Set limits and enforce them. Bundle size, time to interactive, core web vitals—track what matters. Features that break the budget don't ship. Make performance non-negotiable.",
    icon: Shield,
    color: "violet-500",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const numberVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

// Principle Card Component
function PrincipleCard({ principle, index }: { principle: any; index: number }) {
  const Icon = principle.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={itemVariants}
      className={`flex flex-col md:flex-row gap-8 items-start ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Number and Icon */}
      <motion.div
        variants={numberVariants}
        className="flex-shrink-0 w-full md:w-64"
      >
        <div className="relative">
          {/* Large decorative number */}
          <div
            className={`text-[120px] md:text-[180px] font-black leading-none text-${principle.color} opacity-10 select-none`}
          >
            {principle.number}
          </div>

          {/* Icon box */}
          <div className="absolute top-8 left-8">
            <div
              className={`w-20 h-20 bg-${principle.color} border-4 border-white dark:border-black flex items-center justify-center shadow-brutal-sm`}
            >
              <Icon className="w-10 h-10 text-black dark:text-white" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="flex-1 space-y-4">
        <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
          {principle.title}
        </h3>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          {principle.description}
        </p>
      </div>
    </motion.div>
  );
}

// Section Header Component
function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  color,
}: {
  icon: any;
  title: string;
  subtitle: string;
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-6 mb-20"
    >
      {/* Icon */}
      <div className="flex justify-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          className={`w-24 h-24 bg-${color} border-4 border-white dark:border-black flex items-center justify-center shadow-brutal`}
        >
          <Icon className="w-12 h-12 text-black dark:text-white" />
        </motion.div>
      </div>

      {/* Title */}
      <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter">
        {title}
      </h2>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        {subtitle}
      </p>

      {/* Decorative line */}
      <div className="flex items-center justify-center gap-4 pt-4">
        <div className={`w-16 h-1 bg-${color}`} />
        <div className={`w-4 h-4 bg-${color} rotate-45`} />
        <div className={`w-16 h-1 bg-${color}`} />
      </div>
    </motion.div>
  );
}

// Contrast Section Component
function ContrastSection() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-black dark:bg-white p-8 md:p-16 border-4 border-black dark:border-white shadow-brutal-lg"
    >
      <div className="grid md:grid-cols-2 gap-12">
        {/* We Believe */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <CheckCircle2 className="w-12 h-12 text-cyan-500" />
            <h3 className="text-3xl md:text-4xl font-black text-white dark:text-black tracking-tight">
              We Believe
            </h3>
          </div>
          <ul className="space-y-4 text-lg text-gray-300 dark:text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-cyan-500 font-black text-2xl">→</span>
              <span>Constraints spark creativity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-500 font-black text-2xl">→</span>
              <span>Shipping beats perfecting</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-500 font-black text-2xl">→</span>
              <span>Open source multiplies impact</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-500 font-black text-2xl">→</span>
              <span>Users validate assumptions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-500 font-black text-2xl">→</span>
              <span>Quality compounds over time</span>
            </li>
          </ul>
        </div>

        {/* We Don't Believe */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <XCircle className="w-12 h-12 text-pink-500" />
            <h3 className="text-3xl md:text-4xl font-black text-white dark:text-black tracking-tight">
              We Don't Believe
            </h3>
          </div>
          <ul className="space-y-4 text-lg text-gray-300 dark:text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-black text-2xl">×</span>
              <span>More features = better product</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-black text-2xl">×</span>
              <span>Perfect planning prevents execution</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-black text-2xl">×</span>
              <span>Complexity demonstrates expertise</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-black text-2xl">×</span>
              <span>Theory beats real-world testing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-black text-2xl">×</span>
              <span>Lock-in creates sustainable business</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

// Pull Quote Component
function PullQuote({ quote, author }: { quote: string; author: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="my-24 relative"
    >
      <div className="border-l-8 border-purple-600 pl-8 md:pl-12">
        <p className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6">
          "{quote}"
        </p>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-bold">
          — {author}
        </p>
      </div>
    </motion.div>
  );
}

export default function PhilosophyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef} className="space-y-32 pb-32">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center space-y-8 py-20"
      >
        {/* Decorative background elements */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-0 left-1/4 w-32 h-32 bg-cyan-500 opacity-10 rotate-12"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-20 right-1/4 w-24 h-24 bg-pink-500 opacity-10 -rotate-12"
        />

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 border-4 border-black dark:border-white text-white dark:text-black font-black text-sm tracking-widest uppercase shadow-brutal-sm">
            <Compass className="w-5 h-5" />
            <span>Our Philosophy</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">
          Principles that
          <br />
          <span className="text-cyan-500">guide us</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium">
          How we think about design, business, and building products that matter.
          These aren't just words on a page—they're decisions we make every day.
        </p>

        {/* Decorative element */}
        <div className="flex items-center justify-center gap-3 pt-8">
          <div className="w-3 h-3 bg-cyan-500" />
          <div className="w-3 h-3 bg-pink-500" />
          <div className="w-3 h-3 bg-purple-600" />
          <div className="w-3 h-3 bg-yellow-500" />
          <div className="w-3 h-3 bg-orange-500" />
        </div>
      </motion.div>

      {/* Design Philosophy Section */}
      <section className="space-y-20">
        <SectionHeader
          icon={Eye}
          title="Design Philosophy"
          subtitle="How we approach visual design, user experience, and interface craft"
          color="cyan-500"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {designPrinciples.map((principle, index) => (
            <PrincipleCard key={principle.number} principle={principle} index={index} />
          ))}
        </motion.div>

        <PullQuote
          quote="Design is not just what it looks like and feels like. Design is how it works."
          author="Steve Jobs"
        />
      </section>

      {/* Contrast Section */}
      <section>
        <ContrastSection />
      </section>

      {/* Business Philosophy Section */}
      <section className="space-y-20">
        <SectionHeader
          icon={Rocket}
          title="Business Philosophy"
          subtitle="How we build sustainable products and serve our developer community"
          color="pink-500"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {businessPrinciples.map((principle, index) => (
            <PrincipleCard key={principle.number} principle={principle} index={index} />
          ))}
        </motion.div>

        <PullQuote
          quote="The best way to predict the future is to invent it."
          author="Alan Kay"
        />
      </section>

      {/* MVP Philosophy Section */}
      <section className="space-y-20">
        <SectionHeader
          icon={Target}
          title="MVP Philosophy"
          subtitle="How we think about building, validating, and shipping minimum viable products"
          color="purple-600"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {mvpPrinciples.map((principle, index) => (
            <PrincipleCard key={principle.number} principle={principle} index={index} />
          ))}
        </motion.div>

        <PullQuote
          quote="If you're not embarrassed by the first version of your product, you've launched too late."
          author="Reid Hoffman"
        />
      </section>

      {/* Code Philosophy Section */}
      <section className="space-y-20">
        <SectionHeader
          icon={Code}
          title="Code Philosophy"
          subtitle="How we write maintainable, clear, and purposeful code"
          color="green-500"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {codePrinciples.map((principle, index) => (
            <PrincipleCard key={principle.number} principle={principle} index={index} />
          ))}
        </motion.div>

        <PullQuote
          quote="Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
          author="Martin Fowler"
        />
      </section>

      {/* Collaboration Philosophy Section */}
      <section className="space-y-20">
        <SectionHeader
          icon={Users}
          title="Collaboration Philosophy"
          subtitle="How we work together, communicate, and build high-trust teams"
          color="blue-500"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {collaborationPrinciples.map((principle, index) => (
            <PrincipleCard key={principle.number} principle={principle} index={index} />
          ))}
        </motion.div>

        <PullQuote
          quote="If you want to go fast, go alone. If you want to go far, go together."
          author="African Proverb"
        />
      </section>

      {/* Product Philosophy Section */}
      <section className="space-y-20">
        <SectionHeader
          icon={Package}
          title="Product Philosophy"
          subtitle="How we build products users love and problems worth solving"
          color="indigo-500"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {productPrinciples.map((principle, index) => (
            <PrincipleCard key={principle.number} principle={principle} index={index} />
          ))}
        </motion.div>

        <PullQuote
          quote="Make something people want."
          author="Paul Graham"
        />
      </section>

      {/* Performance Philosophy Section */}
      <section className="space-y-20">
        <SectionHeader
          icon={Zap}
          title="Performance Philosophy"
          subtitle="How we prioritize speed, optimization, and exceptional user experiences"
          color="violet-500"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {performancePrinciples.map((principle, index) => (
            <PrincipleCard key={principle.number} principle={principle} index={index} />
          ))}
        </motion.div>

        <PullQuote
          quote="Performance is not just a metric, it's a user experience."
          author="Addy Osmani"
        />
      </section>

      {/* Final CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-cyan-500 to-purple-600 p-1"
      >
        <div className="bg-white dark:bg-black p-12 md:p-20 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
            Ready to build with these principles?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore our component library built with these philosophies at its core.
            Every component. Every pattern. Every line of code.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <motion.a
              href="/showcase/hero-sections"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-cyan-500 text-black font-black text-lg border-4 border-black dark:border-white shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm transition-all uppercase tracking-wide"
            >
              Browse Components
            </motion.a>
            <motion.a
              href="/showcase"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-black text-black dark:text-white font-black text-lg border-4 border-black dark:border-white shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm transition-all uppercase tracking-wide"
            >
              View Showcase
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Closing Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center space-y-6 py-12"
      >
        <div className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white tracking-tighter">
          Ship. Learn. Iterate.
        </div>
        <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
          The philosophy that powers every line of code we write.
        </div>
      </motion.div>
    </div>
  );
}
