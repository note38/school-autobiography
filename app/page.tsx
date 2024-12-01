import Image from "next/image";

export default function HomePage() {
  const imageList = [
    {
      url: "https://picsum.photos/200/300?random=1",
      alt: "School Image 1",
    },
    {
      url: "https://picsum.photos/200/300?random=2",
      alt: "School Image 2",
    },
    {
      url: "https://picsum.photos/200/300?random=3",
      alt: "School Image 3",
    },
  ];
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
        {imageList.map((image, index) => {
          return (
            <Image
              src={image.url}
              alt={image.alt}
              width={300}
              height={200}
              className="rounded-lg"
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
