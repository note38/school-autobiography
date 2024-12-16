import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const diagnoses = [
  {
    id: 1,
    studentName: "Alice Johnson",
    diagnosis: "Common Cold",
    date: "2023-06-15",
  },
  {
    id: 2,
    studentName: "Bob Smith",
    diagnosis: "Sprained Ankle",
    date: "2023-06-12",
  },
  {
    id: 3,
    studentName: "Charlie Brown",
    diagnosis: "Allergic Rhinitis",
    date: "2023-06-10",
  },
  {
    id: 4,
    studentName: "Diana Ross",
    diagnosis: "Migraine",
    date: "2023-06-08",
  },
];

export default function DiagnosisSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Diagnoses</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student Name</TableHead>
              <TableHead>Diagnosis</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {diagnoses.map((diagnosis) => (
              <TableRow key={diagnosis.id}>
                <TableCell>{diagnosis.studentName}</TableCell>
                <TableCell>{diagnosis.diagnosis}</TableCell>
                <TableCell>{diagnosis.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
