import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const students = [
  { id: 1, name: "Alice Johnson", grade: "10th", lastCheckup: "2023-05-15" },
  { id: 2, name: "Bob Smith", grade: "11th", lastCheckup: "2023-06-02" },
  { id: 3, name: "Charlie Brown", grade: "9th", lastCheckup: "2023-05-20" },
  { id: 4, name: "Diana Ross", grade: "12th", lastCheckup: "2023-06-10" },
];

export default function StudentSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Student Checkups</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Last Checkup</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.grade}</TableCell>
                <TableCell>{student.lastCheckup}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
