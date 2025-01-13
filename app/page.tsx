import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">EduGenius</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link className="text-sm hover:text-primary" href="#features">
              Features
            </Link>
            <Link className="text-sm hover:text-primary" href="#pricing">
              Pricing
            </Link>
            <Link className="text-sm hover:text-primary" href="#about">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="container py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold leading-tight">
                  Create Professional Courses with{" "}
                  <span className="text-primary">AI</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Transform your expertise into engaging online courses using
                  our AI-powered platform. Generate content, quizzes, and
                  complete course structures in minutes.
                </p>
              </div>
              <div className="flex gap-4">
                <Link href="/create">
                  <Button size="lg" className="gap-2">
                    Start Creating <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="#demo">
                  <Button size="lg" variant="outline">
                    Watch Demo
                  </Button>
                </Link>
              </div>
              <div className="flex gap-8 py-8">
                <div>
                  <div className="text-3xl font-bold">1000+</div>
                  <div className="text-muted-foreground">Courses Created</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-muted-foreground">Happy Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
              <div className="relative bg-muted p-8 rounded-2xl border shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <div className="text-sm">AI Assistant Active</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Course Topic</div>
                    <p className="text-sm text-muted-foreground">
                      Introduction to Machine Learning and AI: From Basics to
                      Advanced Concepts
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="text-sm font-medium">Generated Modules</div>
                    <ul className="grid gap-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Fundamentals of AI and Machine Learning
                      </li>
                      <li className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Data Preprocessing and Feature Engineering
                      </li>
                      <li className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Supervised Learning Algorithms
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
