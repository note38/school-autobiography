"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Student {
  id: number;
  lastName: string;
  firstName: string;
  middleInitial: string;
  grade: string;
  section: string;
}

export default function StudentRecords() {
  const [students, setStudents] = useState<Student[]>([]);
  const [newStudent, setNewStudent] = useState<Omit<Student, "id">>({
    lastName: "",
    firstName: "",
    middleInitial: "",
    grade: "",
    section: "",
  });
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState<Student | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingStudent) {
      setStudents(
        students.map((student) =>
          student.id === editingStudent.id
            ? { ...editingStudent, ...newStudent }
            : student
        )
      );
      setEditingStudent(null);
    } else {
      setStudents([...students, { id: Date.now(), ...newStudent }]);
    }
    setNewStudent({
      lastName: "",
      firstName: "",
      middleInitial: "",
      grade: "",
      section: "",
    });
  };

  const handleEdit = (student: Student) => {
    setEditingStudent(student);
    setNewStudent(student);
  };

  const handleDelete = (student: Student) => {
    setStudentToDelete(student);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (studentToDelete) {
      setStudents(students.filter((s) => s.id !== studentToDelete.id));
      setIsDeleteDialogOpen(false);
      setStudentToDelete(null);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Records</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={newStudent.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={newStudent.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="middleInitial">Middle Initial</Label>
          <Input
            id="middleInitial"
            name="middleInitial"
            value={newStudent.middleInitial}
            onChange={handleInputChange}
            maxLength={1}
          />
        </div>
        <div>
          <Label htmlFor="grade">Grade</Label>
          <Input
            id="grade"
            name="grade"
            value={newStudent.grade}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="section">Section</Label>
          <Input
            id="section"
            name="section"
            value={newStudent.section}
            onChange={handleInputChange}
            required
          />
        </div>
        <Button type="submit" className="mt-4">
          {editingStudent ? "Update Student" : "Add Student"}
        </Button>
      </form>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Last Name</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>M.I.</TableHead>
            <TableHead>Grade</TableHead>
            <TableHead>Section</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.lastName}</TableCell>
              <TableCell>{student.firstName}</TableCell>
              <TableCell>{student.middleInitial}</TableCell>
              <TableCell>{student.grade}</TableCell>
              <TableCell>{student.section}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  className="mr-2"
                  onClick={() => handleEdit(student)}
                >
                  Edit
                </Button>
                <Button onClick={() => handleDelete(student)}>Delete</Button>
                <Link className="ml-2" href="/diagnosis" passHref>
                  <Button variant="outline">Diagnose</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this student record? This action
              cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
