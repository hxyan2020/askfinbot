interface ExamLogoProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export function ExamLogo({ src, alt, size = 40, className = "" }: ExamLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`mx-auto rounded-xl object-contain shadow-sm ${className}`}
      draggable={false}
    />
  );
}
