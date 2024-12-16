import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const equipment = [
  { id: 1, name: "Stethoscope", quantity: 50, lastMaintenance: "2023-05-01" },
  {
    id: 2,
    name: "Blood Pressure Monitor",
    quantity: 30,
    lastMaintenance: "2023-05-15",
  },
  { id: 3, name: "Thermometer", quantity: 100, lastMaintenance: "2023-06-01" },
  { id: 4, name: "Otoscope", quantity: 20, lastMaintenance: "2023-05-20" },
];

export default function EquipmentSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Equipment Inventory</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Last Maintenance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {equipment.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.lastMaintenance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
