import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes: string;
  priority?: boolean;
  className?: string;
  quality?: number;
};

export default function ProjectImage({
  src,
  alt,
  fill = true,
  sizes,
  priority = false,
  className = "object-cover",
  quality = 72,
}: Props) {
  const isSvg = src.endsWith(".svg");

  if (isSvg) {
    return (
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        className={className}
        unoptimized
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      quality={quality}
      className={className}
      loading={priority ? "eager" : "lazy"}
      priority={priority}
    />
  );
}
