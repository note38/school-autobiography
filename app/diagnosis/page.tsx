"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Question = {
  id: number;
  text: string;
  options: string[];
};

const questions: Question[] = [
  {
    id: 1,
    text: "How would you describe your current level of fatigue?",
    options: [
      "No fatigue",
      "Mild fatigue",
      "Moderate fatigue",
      "Severe fatigue",
    ],
  },
  {
    id: 2,
    text: "Have you experienced any recent changes in appetite?",
    options: [
      "No changes",
      "Increased appetite",
      "Decreased appetite",
      "Fluctuating appetite",
    ],
  },
  {
    id: 3,
    text: "Are you having any difficulty sleeping?",
    options: [
      "No difficulty",
      "Trouble falling asleep",
      "Waking up frequently",
      "Both falling asleep and staying asleep",
    ],
  },
];

export default function MedicalDiagnostic() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [diagnosis, setDiagnosis] = useState<string | null>(null);

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const getDiagnosis = () => {
    // This is a very simplified diagnostic logic
    if (
      answers[1] === "Severe fatigue" &&
      answers[2] === "Decreased appetite" &&
      answers[3] === "Both falling asleep and staying asleep"
    ) {
      return "Your symptoms suggest you may be experiencing depression. Please consult with a healthcare professional for a proper evaluation.";
    } else if (
      answers[1] === "Moderate fatigue" ||
      answers[2] === "Fluctuating appetite" ||
      answers[3] === "Waking up frequently"
    ) {
      return "Your symptoms suggest you may be experiencing stress or anxiety. Consider talking to a healthcare provider about stress management techniques.";
    } else {
      return "Based on your answers, your symptoms don't immediately suggest a specific condition. However, if you're concerned about your health, it's always best to consult with a healthcare professional.";
    }
  };

  const handleSubmit = () => {
    setDiagnosis(getDiagnosis());
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-900">
            Medical Consultation
          </CardTitle>
          <CardDescription className="text-center text-gray-600">
            Answer the following questions for a preliminary diagnosis
          </CardDescription>
        </CardHeader>
        <CardContent>
          {questions.map((question) => (
            <div key={question.id} className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {question.text}
              </h3>
              <RadioGroup
                onValueChange={(value) => handleAnswer(question.id, value)}
              >
                {question.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={option}
                      id={`q${question.id}-option${index}`}
                    />
                    <Label htmlFor={`q${question.id}-option${index}`}>
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleSubmit} className="w-full sm:w-auto">
            Get Diagnosis
          </Button>
        </CardFooter>
        {diagnosis && (
          <CardContent>
            <div className="mt-4 p-4 bg-blue-50 rounded-md">
              <h4 className="text-lg font-medium text-blue-900 mb-2">
                Preliminary Diagnosis:
              </h4>
              <p className="text-blue-700">{diagnosis}</p>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
