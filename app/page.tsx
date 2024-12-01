import Image from "next/image";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
        Welcome to the Medical Portal
      </h1>
      <p className="text-muted-foreground">
        This is the main page containing school autobiography and related
        information.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Image
          src="/placeholder.svg?height=200&width=300"
          alt="School Image 1"
          width={300}
          height={200}
          className="rounded-lg"
        />
        <Image
          src="/placeholder.svg?height=200&width=300"
          alt="School Image 2"
          width={300}
          height={200}
          className="rounded-lg"
        />
        <Image
          src="/placeholder.svg?height=200&width=300"
          alt="School Image 3"
          width={300}
          height={200}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}