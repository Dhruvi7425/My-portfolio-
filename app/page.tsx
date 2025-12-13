"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Github, Linkedin, Menu, X } from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const skills = ["Web Development", "PHP", "C++", "Python", "JavaScript", "Canva Design", "HTML/CSS", "React"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-white">Dhruvi Sutariya</h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-slate-300 hover:text-teal-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-300 hover:text-teal-400 transition-colors"
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-slate-300 hover:text-teal-400 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-300 hover:text-teal-400 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-slate-300 hover:text-teal-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-slate-300 hover:text-teal-400 transition-colors"
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block text-slate-300 hover:text-teal-400 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-slate-300 hover:text-teal-400 transition-colors"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">Dhruvi Sutariya</h2>
            <p className="text-xl sm:text-2xl text-teal-400 mb-8">Developer & Designer</p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Crafting elegant solutions through code and design. Specializing in web development with expertise in
              modern technologies.
            </p>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-teal-500 hover:bg-teal-600 text-slate-950 font-semibold px-8 py-6 text-lg"
            >
              {"Get In Touch"}
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">About Me</h3>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-semibold text-teal-400 mb-4">Background</h4>
              <p className="text-slate-300 leading-relaxed mb-6">
                {
                  "I'm a passionate developer and designer with a strong foundation in multiple programming languages and design tools. I love bringing ideas to life through clean, efficient code and beautiful designs."
                }
              </p>
              <p className="text-slate-300 leading-relaxed">
                My journey in technology has equipped me with diverse skills ranging from backend development to
                frontend design, allowing me to create comprehensive solutions for various projects.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-teal-400 mb-4">Qualifications & Skills</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-300 mb-3">Skilled in modern web technologies and programming languages:</p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-slate-800 text-teal-400 rounded-full text-sm font-medium border border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">Projects & Achievements</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <Card
                key={project}
                className="bg-slate-800/50 border-slate-700 p-6 hover:border-teal-500/50 transition-all hover:transform hover:-translate-y-1"
              >
                <div className="aspect-video bg-slate-700 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-slate-500 text-sm">Project Image</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Project {project}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Description of your project and the technologies used. Highlight key achievements and features.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs px-3 py-1 bg-slate-700 text-teal-400 rounded-full">Web Dev</span>
                  <span className="text-xs px-3 py-1 bg-slate-700 text-teal-400 rounded-full">Design</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-white mb-12 text-center">{"Let's Connect"}</h3>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h4 className="text-2xl font-semibold text-teal-400 mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-teal-400" size={20} />
                  <a href="mailto:dhruvi@example.com" className="text-slate-300 hover:text-teal-400 transition-colors">
                    dhruvi@example.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-teal-400" size={20} />
                  <a href="tel:+1234567890" className="text-slate-300 hover:text-teal-400 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-teal-400 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-teal-400 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h4 className="text-2xl font-semibold text-teal-400 mb-6">Send a Message</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-slate-950 font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {submitStatus === "success" && <p className="text-teal-400 text-sm">Message sent successfully!</p>}
                {submitStatus === "error" && (
                  <p className="text-red-400 text-sm">{"Failed to send message. Please try again."}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2025 Dhruvi Sutariya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
