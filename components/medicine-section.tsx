import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const medicines = [
  { id: 1, name: "Paracetamol", stock: 500, expiryDate: "2024-12-31" },
  { id: 2, name: "Ibuprofen", stock: 300, expiryDate: "2024-10-31" },
  { id: 3, name: "Amoxicillin", stock: 200, expiryDate: "2024-08-31" },
  { id: 4, name: "Cetirizine", stock: 400, expiryDate: "2025-01-31" },
];

export default function MedicineSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Medicine Inventory</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Expiry Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {medicines.map((medicine) => (
              <TableRow key={medicine.id}>
                <TableCell>{medicine.name}</TableCell>
                <TableCell>{medicine.stock}</TableCell>
                <TableCell>{medicine.expiryDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
