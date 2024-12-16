import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const researchers = [
  {
    name: "Jasmin Mamugay",
    picture: "/images/about/jas.jpg?height=100&width=100",
    contact: "+63 9234 567 8902",
    email: "jasminasuncionmamis@gmail.com",
  },
  {
    name: "Cathleen Carasco",
    picture: "/images/about/cath.jpg?height=100&width=100",
    contact: "+63 9234 567 8902",
    email: "cathlyncarrasco22@gmail.com",
  },
  {
    name: "Jay-ar Layan",
    picture: "/images/about/jay-r.jpg?height=100&width=100",
    contact: "+63 9234 567 8902",
    email: "jayare.layan@gmail.com",
  },
  // Add more researchers
];

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
        About Us
      </h1>
      <p className="text-muted-foreground">
        Learn more about our medical facility and staff.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {researchers.map((researcher, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{researcher.name}</CardTitle>
              <CardDescription>Researcher</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
              <Image
                src={researcher.picture}
                alt={researcher.name}
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <p>
                  <strong>Contact:</strong> {researcher.contact}
                </p>
                <p>
                  <strong>Email:</strong> {researcher.email}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
