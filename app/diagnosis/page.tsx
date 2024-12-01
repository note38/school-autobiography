"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function DiagnosisPage() {
  const [result, setResult] = useState('')
  const [remarks, setRemarks] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    setResult('Sample Result')
    setRemarks('Sample Remarks')
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Diagnosis</h1>
      <Card>
        <CardHeader>
          <CardTitle>Questionnaire</CardTitle>
          <CardDescription>Fill out the form for diagnosis</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input id="name" type="text" placeholder="Enter your name" required />
            </div>
            <div>
              <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700">Symptoms</label>
              <Textarea id="symptoms" placeholder="Describe your symptoms" required />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
        {(result || remarks) && (
          <CardFooter className="flex flex-col items-start space-y-2">
            <div>
              <strong>Result:</strong> {result}
            </div>
            <div>
              <strong>Remarks:</strong> {remarks}
            </div>
            <div>
              <strong>Encarta:</strong> [Placeholder for Encarta integration]
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}

