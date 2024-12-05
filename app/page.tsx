import Image from "next/image";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
        Welcome to the Medical Portal
      </h1>
      <p className="text-muted-foreground">
        This is the school autobiography and related information.
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
    </div>
  );
}
