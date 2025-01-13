"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Upload, Sparkles } from "lucide-react";

export default function CreateCourse() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleChoice = (choice: "upload" | "ai") => {
    setLoading(true);
    if (choice === "upload") {
      router.push("/create/upload");
    } else {
      router.push("/create/ai");
    }
  };

  return (
    <div className="container max-w-4xl py-8 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-purple-900">
          Create New Course
        </h1>
        <p className="text-purple-600">
          Choose how youd like to start creating your course
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5 text-purple-600" />
              Upload Existing Course
            </CardTitle>
            <CardDescription>
              Upload your existing course content and enhance it with AI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="w-full bg-purple-600 hover:bg-purple-700"
              onClick={() => handleChoice("upload")}
              disabled={loading}
            >
              Upload Course
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-600" />
              Build with AI
            </CardTitle>
            <CardDescription>
              Create a new course from scratch with AI assistance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="w-full bg-purple-600 hover:bg-purple-700"
              onClick={() => handleChoice("ai")}
              disabled={loading}
            >
              Build with AI
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
