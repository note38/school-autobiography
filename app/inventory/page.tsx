"use client";

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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Medicine {
  id: number;
  name: string;
  expirationDate: string;
  quantity: number;
}

interface Equipment {
  id: number;
  name: string;
}

export default function InventoryPage() {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [medicineName, setMedicineName] = useState("");
  const [medicineExpirationDate, setMedicineExpirationDate] = useState("");
  const [medicineQuantity, setMedicineQuantity] = useState("");
  const [equipmentName, setEquipmentName] = useState("");

  const addMedicine = (e: React.FormEvent) => {
    e.preventDefault();
    const newMedicine: Medicine = {
      id: Date.now(),
      name: medicineName,
      expirationDate: medicineExpirationDate,
      quantity: parseInt(medicineQuantity),
    };
    setMedicines([...medicines, newMedicine]);
    setMedicineName("");
    setMedicineExpirationDate("");
    setMedicineQuantity("");
  };

  const addEquipment = (e: React.FormEvent) => {
    e.preventDefault();
    const newEquipment: Equipment = {
      id: Date.now(),
      name: equipmentName,
    };
    setEquipment([...equipment, newEquipment]);
    setEquipmentName("");
  };

  const deleteMedicine = (id: number) => {
    setMedicines(medicines.filter((medicine) => medicine.id !== id));
  };

  const deleteEquipment = (id: number) => {
    setEquipment(equipment.filter((item) => item.id !== id));
  };

  const editMedicine = (id: number) => {
    const medicineToEdit = medicines.find((medicine) => medicine.id === id);
    if (medicineToEdit) {
      setMedicineName(medicineToEdit.name);
      setMedicineExpirationDate(medicineToEdit.expirationDate);
      setMedicineQuantity(medicineToEdit.quantity.toString());
      deleteMedicine(id);
    }
  };

  const editEquipment = (id: number) => {
    const equipmentToEdit = equipment.find((item) => item.id === id);
    if (equipmentToEdit) {
      setEquipmentName(equipmentToEdit.name);
      deleteEquipment(id);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Add Medicine</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={addMedicine} className="space-y-4">
              <div>
                <Label htmlFor="medicineName">Name</Label>
                <Input
                  id="medicineName"
                  value={medicineName}
                  onChange={(e) => setMedicineName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="medicineExpirationDate">Expiration Date</Label>
                <Input
                  id="medicineExpirationDate"
                  type="date"
                  value={medicineExpirationDate}
                  onChange={(e) => setMedicineExpirationDate(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="medicineQuantity">Quantity</Label>
                <Input
                  id="medicineQuantity"
                  type="number"
                  value={medicineQuantity}
                  onChange={(e) => setMedicineQuantity(e.target.value)}
                  required
                />
              </div>
              <Button type="submit">Add Medicine</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Add Equipment</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={addEquipment} className="space-y-4">
              <div>
                <Label htmlFor="equipmentName">Name</Label>
                <Input
                  id="equipmentName"
                  value={equipmentName}
                  onChange={(e) => setEquipmentName(e.target.value)}
                  required
                />
              </div>
              <Button type="submit">Add Equipment</Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Medicine Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Expiration Date</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {medicines.map((medicine) => (
                  <TableRow key={medicine.id}>
                    <TableCell>{medicine.name}</TableCell>
                    <TableCell>{medicine.expirationDate}</TableCell>
                    <TableCell>{medicine.quantity}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mr-2"
                        onClick={() => editMedicine(medicine.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteMedicine(medicine.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Equipment Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {equipment.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mr-2"
                        onClick={() => editEquipment(item.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteEquipment(item.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
