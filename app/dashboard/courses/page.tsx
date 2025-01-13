import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Eye, Play, Plus, Download, Edit } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title:
      "Climate Change Solutions: Harnessing Technology for a Sustainable Future",
    progress: 80,
    status: "In Progress",
    students: 0,
    lastUpdated: "2 hours ago",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 2,
    title: "Introduction to Artificial Intelligence and Machine Learning",
    progress: 100,
    status: "Published",
    students: 156,
    lastUpdated: "1 day ago",
    image: "/placeholder.svg?height=100&width=200",
  },
  {
    id: 3,
    title: "Digital Marketing Mastery: Strategies for Success",
    progress: 30,
    status: "Draft",
    students: 0,
    lastUpdated: "3 days ago",
    image: "/placeholder.svg?height=100&width=200",
  },
];

export default function CoursesPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Courses</h1>
          <p className="text-gray-600">
            Create, manage, and analyze your courses
          </p>
        </div>
        <Link href="/create">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create New Course
          </Button>
        </Link>
      </div>

      <div className="grid gap-6">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardContent className="p-6">
              <div className="flex gap-6">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-48 h-28 object-cover rounded"
                />
                <div className="flex-1 space-y-4">
                  <div>
                    <Link
                      href={`/course/${course.id}`}
                      className="text-xl font-semibold hover:underline"
                    >
                      {course.title}
                    </Link>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                      <span>Last updated {course.lastUpdated}</span>
                      <span>•</span>
                      <span>{course.students} students</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">
                        {course.status}
                      </span>
                      <span className="text-sm text-gray-600">
                        {course.progress}%
                      </span>
                    </div>
                    <Progress value={course.progress} className="h-2">
                      <div
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </Progress>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    {course.status === "Published" && (
                      <Button size="sm">
                        <Play className="w-4 h-4 mr-2" />
                        Launch
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
