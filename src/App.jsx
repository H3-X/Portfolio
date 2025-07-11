import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Download, ExternalLink, Shield, Code, Users, Zap, Lightbulb, Target, Handshake, TrendingUp } from 'lucide-react'
import './App.css'

function App() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const skills = [
    {
      category: "Secure System Architecture",
      icon: Shield,
      description: "Designing network infrastructures and cloud environments that grow with your business.",
      items: [
        "Scalable network design (TCP/IP, DNS, DHCP, LAN/WAN)",
        "Cloud architecture & security (AWS, Azure, GCP)",
        "Enterprise endpoint management and hardening"
      ]
    },
    {
      category: "Proactive Threat Management", 
      icon: Target,
      description: "Early detection and rapid response minimize business disruption.",
      items: [
        "Advanced threat detection (SIEM: Splunk, Microsoft Sentinel, InsightIDR)",
        "Digital forensics and incident response",
        "Risk assessment and vulnerability management"
      ]
    },
    {
      category: "Operational Efficiency & Automation",
      icon: Zap,
      description: "Manual processes are security vulnerabilities waiting to happen.",
      items: [
        "End-to-end process automation (N8N, QuickBooks integration)",
        "Custom scripting solutions (BASH, Python)",
        "Workflow optimization that saves 15+ hours per week"
      ]
    },
    {
      category: "User-Centric Security Design",
      icon: Users,
      description: "Security tools should feel as intuitive as consumer apps.",
      items: [
        "Human-centered security interface design",
        "Clear communication for technical and non-technical stakeholders",
        "Visual design and presentation (Figma, Sketch)"
      ]
    }
  ]

  const impactItems = [
    {
      icon: TrendingUp,
      title: "40% Faster Response",
      description: "Streamlined security incident response processes"
    },
    {
      icon: Lightbulb,
      title: "Automated Compliance",
      description: "Eliminated manual audit preparation through smart monitoring"
    },
    {
      icon: Users,
      title: "95% Completion Rate",
      description: "User-friendly security training programs"
    },
    {
      icon: Shield,
      title: "Scalable Security",
      description: "Cost-effective architectures that grow with business"
    }
  ]

  return (
    <div className="dark min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
        style={{ y, opacity }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(139,92,246,0.4),transparent_50%)]" />
          <div className="absolute inset-0 bg-[conic-gradient(from_45deg,transparent,rgba(139,92,246,0.1),transparent)] bg-[length:40px_40px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Photo Placeholder */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white text-sm font-medium shadow-2xl border-4 border-purple-400/20"
          >
            <div className="text-center">
              <div className="text-xs opacity-75">Professional</div>
              <div className="text-xs opacity-75">Photo</div>
              <div className="text-xs opacity-75">Placeholder</div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              A Fusion of
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Logic & Creativity
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
          >
            Building secure systems that people actually want to use
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed"
          >
            I'm <span className="text-purple-400 font-semibold">Tahji</span>—a systems thinker who believes that the best cybersecurity solutions are born from understanding both technology and human behavior. My journey through fashion, architecture, and digital defense has taught me that truly effective security isn't just about building walls—it's about creating intuitive pathways that guide users toward safe practices while enhancing their workflow.
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-purple-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Philosophy Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Beyond the Code: My Path to <span className="text-purple-400">Human-Centered Security</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                The thread connecting my diverse background is simple: <span className="text-purple-400 font-semibold">great design solves real problems elegantly</span>. Whether I was creating fashion pieces that moved with the body, designing architectural spaces that felt natural to inhabit, or building security systems that teams actually embrace—the principle remains the same.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                This perspective shapes how I approach cybersecurity challenges. Instead of viewing security as a barrier, I see it as an opportunity to create systems that are both protective and empowering. When security feels intuitive rather than intrusive, compliance becomes natural, and businesses can focus on what they do best.
              </p>

              <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
                <p className="text-purple-300 font-medium text-lg italic">
                  "Security should enhance productivity, not hinder it. The most effective defenses are the ones users don't have to think about."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Lightbulb className="w-8 h-8 text-purple-400 mr-3" />
                My Philosophy
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Design-First Thinking</h4>
                    <p className="text-gray-300">Every security solution should feel natural and intuitive to use</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Business Impact Focus</h4>
                    <p className="text-gray-300">Security measures should enable growth, not constrain it</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Human-Centered Approach</h4>
                    <p className="text-gray-300">Understanding user behavior is key to effective security</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Where Design Meets <span className="text-purple-400">Defense</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              My skillset combines technical expertise with design thinking to create security solutions that work for everyone
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-500/30 transition-colors">
                    <skill.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{skill.description}</p>
                
                <div className="space-y-3">
                  <h4 className="text-white font-semibold text-sm uppercase tracking-wide">Key Focus Areas:</h4>
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-300">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="leading-relaxed text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership & Impact Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Driving Results Through <span className="text-purple-400">Partnership</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Over the past four years, I've collaborated with diverse businesses—from Manhattan financial firms to growing startups—helping them achieve robust security while enhancing operational flow. My approach emphasizes partnership over prescription: I work with your team to understand your unique challenges and build solutions that fit your culture and workflow.
              </p>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Handshake className="w-6 h-6 text-purple-400 mr-3" />
                  What sets my collaboration style apart:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-purple-400 font-semibold">Translation Skills:</span>
                      <span className="text-gray-300"> I bridge the gap between technical teams and business leadership</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-purple-400 font-semibold">Adaptive Solutions:</span>
                      <span className="text-gray-300"> Security strategies that align with your business model and growth plans</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-purple-400 font-semibold">Continuous Partnership:</span>
                      <span className="text-gray-300"> Building relationships that support your evolving needs</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Recent Impact:</h3>
              <div className="grid grid-cols-2 gap-4">
                {impactItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 text-center"
                  >
                    <item.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-slate-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Something <span className="text-purple-400">Secure and Intuitive</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Whether you're a startup establishing your first security framework, a consulting firm needing versatile technical expertise, or a growing business looking to strengthen your defenses without slowing down—I'm here to help create solutions that protect what matters most while empowering your team to do their best work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Explore My Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Download My Resume
              </Button>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg italic"
            >
              Ready to explore how thoughtful design can transform your approach to cybersecurity?
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500">
            © 2025 Tahji Lyons. Bridging design and defense for a more secure digital world.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

