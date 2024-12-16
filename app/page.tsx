import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserSquare, Stethoscope, Pill, ClipboardList } from "lucide-react";
import StudentSection from "../components/student-section";
import EquipmentSection from "../components/equipment-section";
import MedicineSection from "../components/medicine-section";
import DiagnosisSection from "../components/diagnosis-section";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
        SDO-Aurora Hacienda Elementary School
      </h1>
      <p className="text-muted-foreground">
        Student Medical Consultation with Diagnostic using Encarta and Optimized
        Inventory System.
      </p>
      <div className="relative aspect-video mb-6">
        <Image
          src="/images/login_bg.jpg"
          alt=""
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Medical Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                Total Students
              </CardTitle>
              <UserSquare className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                Equipment Items
              </CardTitle>
              <Stethoscope className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">567</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                Medicine Stock
              </CardTitle>
              <Pill className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">890</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">
                Diagnosis Records
              </CardTitle>
              <ClipboardList className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,345</div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <StudentSection />
          <EquipmentSection />
          <MedicineSection />
          <DiagnosisSection />
        </div>
      </div>
    </div>
  );
}
