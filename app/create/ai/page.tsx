"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  CheckCircle2,
  FileText,
  Loader2,
  PenLine,
  Sparkles,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import { useRouter } from "next/navigation";

// Mock data for generated topics
const mockTopics = [
  {
    title: "AI and Machine Learning Fundamentals",
    description:
      "A comprehensive introduction to artificial intelligence and machine learning concepts, algorithms, and applications.",
  },
  {
    title: "Blockchain Technology and Cryptocurrency",
    description:
      "Explore the revolutionary world of blockchain, smart contracts, and digital currencies.",
  },
  {
    title: "Digital Marketing in 2024",
    description:
      "Master modern digital marketing strategies, tools, and analytics for business growth.",
  },
  {
    title: "Sustainable Technology Solutions",
    description:
      "Learn about eco-friendly technologies and their implementation in solving environmental challenges.",
  },
];

// Mock data for modules
const mockModules = [
  {
    title: "Introduction to the Field",
    duration: "2 weeks",
    lessons: 8,
  },
  {
    title: "Core Concepts and Principles",
    duration: "3 weeks",
    lessons: 12,
  },
  {
    title: "Advanced Techniques",
    duration: "4 weeks",
    lessons: 15,
  },
  {
    title: "Practical Applications",
    duration: "3 weeks",
    lessons: 10,
  },
];

export default function CreateCourse() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [topics, setTopics] = useState<
    { title: string; description: string }[]
  >([]);
  const [selectedTopic, setSelectedTopic] = useState<{
    title: string;
    description: string;
  } | null>(null);
  const [selectedModules, setSelectedModules] = useState<
    { title: string; duration: string; lessons: number }[]
  >([]);
  const [generating, setGenerating] = useState(false);

  const handleGenerateTopics = async () => {
    setLoading(true);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setTopics(mockTopics);
    setLoading(false);
  };

  const handleGenerateModules = async () => {
    setGenerating(true);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSelectedModules(mockModules);
    setGenerating(false);
  };

  const handleFinish = () => {
    router.push("/dashboard/courses");
  };

  return (
    <div className="container max-w-5xl py-8">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-purple-900">
            Create New Course
          </h1>
          <p className="text-purple-600">
            Follow the steps below to create your AI-powered course
          </p>
        </div>

        <div className="flex justify-between items-center">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= i
                    ? "bg-purple-600 text-white"
                    : "bg-purple-100 text-purple-400"
                }`}
              >
                {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
              </div>
              <div className="hidden sm:block text-sm font-medium text-purple-900">
                {i === 1 && "Choose Topic"}
                {i === 2 && "Select Modules"}
                {i === 3 && "Review & Generate"}
              </div>
              {i < 3 && <div className="flex-1 h-px bg-purple-200 w-24" />}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-purple-100">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-purple-100">
                      <Sparkles className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="font-medium text-purple-900">
                      AI Generated Topics
                    </div>
                  </div>
                  <p className="text-sm text-purple-600">
                    Let our AI suggest trending and in-demand course topics
                    based on market analysis
                  </p>
                  <Button
                    onClick={handleGenerateTopics}
                    disabled={loading}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Brain className="w-4 h-4 mr-2" />
                    )}
                    Generate Topics
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-purple-100">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-purple-100">
                      <PenLine className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="font-medium text-purple-900">
                      Custom Topic
                    </div>
                  </div>
                  <p className="text-sm text-purple-600">
                    Have a specific topic in mind? Create your own custom course
                    topic
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-purple-200 text-purple-600 hover:bg-purple-50"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Create Custom Topic
                  </Button>
                </CardContent>
              </Card>
            </div>

            {topics.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-purple-900">
                  Generated Topics
                </h2>
                <div className="grid gap-4">
                  {topics.map((topic, i) => (
                    <Card
                      key={i}
                      className={`cursor-pointer transition-colors border-purple-100 hover:bg-purple-50 ${
                        selectedTopic === topic
                          ? "border-purple-600 bg-purple-50"
                          : ""
                      }`}
                      onClick={() => setSelectedTopic(topic)}
                    >
                      <CardContent className="p-4">
                        <div className="font-medium text-purple-900">
                          {topic.title}
                        </div>
                        <p className="text-sm text-purple-600">
                          {topic.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  disabled={!selectedTopic}
                  onClick={() => setStep(2)}
                >
                  Continue to Modules
                </Button>
              </div>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <Card className="border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-xl font-semibold text-purple-900">
                      {selectedTopic?.title}
                    </h2>
                    <p className="text-sm text-purple-600">
                      {selectedTopic?.description}
                    </p>
                  </div>
                  <Button
                    onClick={handleGenerateModules}
                    disabled={generating}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    {generating ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Sparkles className="w-4 h-4 mr-2" />
                    )}
                    Generate Modules
                  </Button>
                </div>
              </CardContent>
            </Card>

            {selectedModules.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-purple-900">
                  Course Modules
                </h2>
                <div className="grid gap-4">
                  {selectedModules.map((module, i) => (
                    <Card key={i} className="border-purple-100">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <div className="font-medium text-purple-900">
                              {module.title}
                            </div>
                            <div className="text-sm text-purple-600">
                              {module.duration} • {module.lessons} lessons
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-purple-200"
                            >
                              <PenLine className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="border-purple-200 text-purple-600 hover:bg-purple-50"
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                    onClick={() => setStep(3)}
                  >
                    Continue to Review
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <Card className="border-purple-100">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-purple-900">
                    Course Summary
                  </h2>
                  <p className="text-purple-600">
                    Review your course details before generation
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-purple-900">
                      Course Title
                    </div>
                    <Card className="p-4 border-purple-100 bg-purple-50">
                      {selectedTopic?.title}
                    </Card>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-purple-900">
                      Description
                    </div>
                    <Card className="p-4 border-purple-100 bg-purple-50">
                      {selectedTopic?.description}
                    </Card>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-purple-900">
                      Modules
                    </div>
                    <Card className="p-4 border-purple-100 bg-purple-50">
                      <ul className="space-y-2">
                        {selectedModules.map((module, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-purple-600" />
                            <span>{module.title}</span>
                            <span className="text-sm text-purple-600">
                              ({module.duration})
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-purple-900">
                      Estimated Completion
                    </div>
                    <Card className="p-4 border-purple-100 bg-purple-50">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-purple-600" />
                        <span>12 weeks</span>
                        <span className="text-purple-600">•</span>
                        <span>45 total lessons</span>
                      </div>
                    </Card>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="border-purple-200 text-purple-600 hover:bg-purple-50"
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                    onClick={handleFinish}
                  >
                    Generate Course
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
