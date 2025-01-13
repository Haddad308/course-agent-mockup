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
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Upload, FileUp, X, FileText, Loader2 } from "lucide-react";
import Link from "next/link";

export default function UploadCourse() {
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      setError("Please select a file to upload");
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    // Simulate file upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 5000));

    clearInterval(interval);
    setUploading(false);
    setUploadProgress(100);

    // Navigate to the next step
    router.push("/create/enhance");
  };

  return (
    <div className="container max-w-3xl py-8 space-y-8">
      <div>
        <Link
          href="/create"
          className="inline-flex items-center text-sm text-purple-600 hover:underline mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Course Creation
        </Link>
        <h1 className="text-3xl font-bold text-purple-900">
          Upload Existing Course
        </h1>
        <p className="text-purple-600 mt-2">
          Upload your existing course content and enhance it with AI
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Course Content</CardTitle>
          <CardDescription>
            Upload your course content in PDF, DOC, DOCX, TXT, or MD format
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div
            className={`
              border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
              transition-colors duration-200 ease-in-out
             
              ${files.length > 0 ? "border-purple-400 bg-purple-50" : ""}
            `}
          >
            <input />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 mx-auto flex items-center justify-center">
                <Upload className="w-6 h-6 text-purple-600" />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-purple-900">
                  Drop yo ur file here
                </p>
                <p className="text-sm text-purple-600">
                  or click to browse from your computer
                </p>
              </div>
            </div>
          </div>

          {files.length > 0 && (
            <div className="space-y-4">
              <Label>Selected File</Label>
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border bg-purple-50"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-8 h-8 text-purple-600" />
                    <div>
                      <p className="font-medium text-purple-900">{file.name}</p>
                      <p className="text-sm text-purple-600">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFile(index)}
                    disabled={uploading}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {uploadProgress > 0 && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-purple-600">
                <span>Uploading...</span>
                <span>{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="h-2" />
            </div>
          )}

          <Button
            className="w-full bg-purple-600 hover:bg-purple-700"
            onClick={handleUpload}
            disabled={files.length === 0 || uploading}
          >
            {uploading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <FileUp className="w-4 h-4 mr-2" />
                Upload and Continue
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
