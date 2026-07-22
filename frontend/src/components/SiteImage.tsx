import Image from "next/image";

type SiteImageProps = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
};

export default function SiteImage({
  src,
  alt,
  className,
  fill,
  width = 800,
  height = 600,
  priority,
  sizes,
  objectPosition,
}: SiteImageProps) {
  const style = objectPosition ? { objectPosition } : undefined;

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        style={style}
        sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      priority={priority}
    />
  );
}
