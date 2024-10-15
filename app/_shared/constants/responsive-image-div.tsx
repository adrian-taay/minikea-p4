import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import React from "react";

export default function ResponsiveImageDiv({
  src,
  alt,
  divClassName,
}: {
  src: StaticImageData | string;
  alt: string;
  divClassName?: string;
}) {
  return (
    <div className={clsx("relative", "w-full", divClassName)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover bg-center absolute"
      />
    </div>
  );
}
