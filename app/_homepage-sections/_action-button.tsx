import { Button } from "@chakra-ui/react";

export default function ActionButton({
  title,
  href,
  style,
}: {
  title: string;
  href: string;
  style?: {
    bgColor: string;
    textColor: string;
    rounded: "none";
  };
}) {
  return (
    <Button
      as="a"
      href={href}
      bgColor={style?.bgColor ?? "#404040"}
      textColor={style?.textColor ?? "#E3E3E3"}
      rounded={style?.rounded ?? "md"}
    >
      {title}
    </Button>
  );
}
