"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  RefreshCw,
  Edit2,
  Download,
  Play,
  Eye,
  FileText,
  Video,
  Book,
  HelpCircle,
  Plus,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const initialCourseContent = {
  title:
    "Climate Change Solutions: Harnessing Technology for a Sustainable Future",
  description:
    "This comprehensive course explores innovative technological solutions to combat climate change and promote environmental sustainability.",
  image: "/placeholder.svg?height=400&width=800",
  modules: [
    {
      title: "Introduction to Climate Change",
      image: "/placeholder.svg?height=200&width=300",
      lessons: [
        { title: "Understanding the Greenhouse Effect", type: "video" },
        { title: "Global Warming Trends and Impacts", type: "article" },
        {
          title: "The Role of Human Activities in Climate Change",
          type: "quiz",
        },
      ],
    },
    {
      title: "Renewable Energy Technologies",
      image: "/placeholder.svg?height=200&width=300",
      lessons: [
        {
          title: "Solar Power: Photovoltaics and Thermal Systems",
          type: "video",
        },
        {
          title: "Wind Energy: Onshore and Offshore Solutions",
          type: "article",
        },
        { title: "Hydroelectric and Geothermal Power", type: "quiz" },
      ],
    },
    {
      title: "Sustainable Transportation",
      image: "/placeholder.svg?height=200&width=300",
      lessons: [
        {
          title: "Electric Vehicles and Charging Infrastructure",
          type: "video",
        },
        {
          title: "Hydrogen Fuel Cells and Their Applications",
          type: "article",
        },
        { title: "Smart Cities and Sustainable Urban Planning", type: "quiz" },
      ],
    },
  ],
  emails: [
    {
      subject: "Welcome to the Course!",
      content: "Welcome to 'Climate Change Solutions'...",
    },
    {
      subject: "Module 1 Now Available",
      content: "The first module on Climate Change basics is now open...",
    },
    {
      subject: "Quiz Reminder",
      content: "Don't forget to complete the quiz for Module 1...",
    },
  ],
  quizzes: [
    { title: "Climate Change Basics", questions: 10 },
    { title: "Renewable Energy Technologies", questions: 15 },
    { title: "Sustainable Transportation Quiz", questions: 12 },
  ],
  resources: [
    { title: "IPCC Climate Change Report 2023", type: "pdf" },
    { title: "Renewable Energy Market Analysis", type: "spreadsheet" },
    { title: "Sustainable City Case Studies", type: "document" },
  ],
};

export default function CourseView() {
  const [activeTab, setActiveTab] = useState("content");
  const [isEditing, setIsEditing] = useState(false);
  const [courseContent, setCourseContent] = useState(initialCourseContent);

  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("edit") === "true") {
      setIsEditing(true);
    }
  }, [searchParams]);

  const handleDownload = () => {
    alert("Course content download started!");
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="w-4 h-4 text-blue-500" />;
      case "article":
        return <FileText className="w-4 h-4 text-green-500" />;
      case "quiz":
        return <HelpCircle className="w-4 h-4 text-orange-500" />;
      default:
        return <Book className="w-4 h-4 text-gray-500" />;
    }
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCourseContent({
      ...courseContent,
      [e.target.name]: e.target.value,
    });
  };

  const handleModuleChange = (index: number, field: string, value: string) => {
    const updatedModules = [...courseContent.modules];
    updatedModules[index] = { ...updatedModules[index], [field]: value };
    setCourseContent({ ...courseContent, modules: updatedModules });
  };

  const handleLessonChange = (
    moduleIndex: number,
    lessonIndex: number,
    field: string,
    value: string
  ) => {
    const updatedModules = [...courseContent.modules];
    updatedModules[moduleIndex].lessons[lessonIndex] = {
      ...updatedModules[moduleIndex].lessons[lessonIndex],
      [field]: value,
    };
    setCourseContent({ ...courseContent, modules: updatedModules });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <header className="bg-white border-b shadow-sm">
        <Link
          href="/dashboard/courses"
          className="inline-flex items-center text-sm text-blue-600 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back To Courses
        </Link>
      </header>

      <div className="relative rounded-xl overflow-hidden shadow-lg">
        <Image
          src={courseContent.image}
          alt={courseContent.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="p-6 text-white w-full">
            {isEditing ? (
              <Input
                name="title"
                value={courseContent.title}
                onChange={handleInputChange}
                className="text-3xl font-bold mb-2 bg-transparent text-white border-white"
              />
            ) : (
              <h1 className="text-3xl font-bold mb-2">{courseContent.title}</h1>
            )}
            {isEditing ? (
              <Textarea
                name="description"
                value={courseContent.description}
                onChange={handleInputChange}
                className="text-lg text-gray-200 bg-transparent border-white"
              />
            ) : (
              <p className="text-lg text-gray-200">
                {courseContent.description}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline" size="sm" onClick={toggleEditing}>
          {isEditing ? (
            <>
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </>
          ) : (
            <>
              <Edit2 className="w-4 h-4 mr-2" />
              Edit Course
            </>
          )}
        </Button>
        <Button variant="outline" size="sm">
          <RefreshCw className="w-4 h-4 mr-2" />
          Regenerate
        </Button>
        <Button variant="outline" size="sm" onClick={handleDownload}>
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
        <Button size="sm" className="bg-green-600 hover:bg-green-700">
          <Play className="w-4 h-4 mr-2" />
          Publish
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full justify-start h-auto p-0 bg-transparent border-b">
          {["Content", "Quizzes", "Emails", "Resources", "Settings"].map(
            (tab) => (
              <TabsTrigger
                key={tab}
                value={tab.toLowerCase()}
                className={`rounded-none border-b-2 border-transparent px-4 py-2 text-gray-600 hover:text-gray-900 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600`}
              >
                {tab}
              </TabsTrigger>
            )
          )}
        </TabsList>

        <TabsContent value="content" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {courseContent.modules.map((module, moduleIndex) => (
              <Card key={moduleIndex} className="overflow-hidden">
                <Image
                  src={module.image}
                  alt={module.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <CardHeader>
                  {isEditing ? (
                    <Input
                      value={module.title}
                      onChange={(e) =>
                        handleModuleChange(moduleIndex, "title", e.target.value)
                      }
                      className="font-semibold"
                    />
                  ) : (
                    <CardTitle>{module.title}</CardTitle>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li
                        key={lessonIndex}
                        className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        {getLessonIcon(lesson.type)}
                        {isEditing ? (
                          <Input
                            value={lesson.title}
                            onChange={(e) =>
                              handleLessonChange(
                                moduleIndex,
                                lessonIndex,
                                "title",
                                e.target.value
                              )
                            }
                            className="flex-1"
                          />
                        ) : (
                          <span>{lesson.title}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                  {isEditing && (
                    <Button variant="outline" size="sm" className="mt-4 w-full">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Lesson
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          {isEditing && (
            <Button variant="outline" className="mt-6 w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Module
            </Button>
          )}
        </TabsContent>

        {/* Other TabsContent components remain unchanged */}
      </Tabs>
    </div>
  );
}
