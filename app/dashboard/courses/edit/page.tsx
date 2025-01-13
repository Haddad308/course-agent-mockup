import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Edit2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const existingCourses = [
  {
    id: 1,
    title:
      "Climate Change Solutions: Harnessing Technology for a Sustainable Future",
    description:
      "Explore innovative technological solutions to combat climate change and promote environmental sustainability.",
    image: "/placeholder.svg?height=200&width=300",
    lastEdited: "2 days ago",
  },
  {
    id: 2,
    title: "Introduction to Artificial Intelligence and Machine Learning",
    description:
      "Dive into the world of AI and ML, understanding key concepts and practical applications.",
    image: "/placeholder.svg?height=200&width=300",
    lastEdited: "1 week ago",
  },
  {
    id: 3,
    title: "Digital Marketing Mastery: Strategies for Success",
    description:
      "Learn cutting-edge digital marketing techniques to boost your online presence and drive growth.",
    image: "/placeholder.svg?height=200&width=300",
    lastEdited: "3 days ago",
  },
];

export default function EditExistingCourse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/dashboard/courses"
            className="inline-flex items-center text-sm text-blue-600 hover:underline mb-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">
            Edit Existing Course
          </h1>
          <p className="text-gray-600 mt-1">
            Select a course to edit its content and settings
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {existingCourses.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <Image
              src={course.image}
              alt={course.title}
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{course.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Last edited: {course.lastEdited}
                </span>
                <Link href={`/course/${course.id}?edit=true`}>
                  <Button>
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit Course
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
