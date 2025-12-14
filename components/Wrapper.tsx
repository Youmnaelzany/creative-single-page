import { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

type WrapperProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

const Wrapper = <T extends ElementType = "div">({
  as: Tag = "div" as T,
  className,
  children,
  ...props
}: WrapperProps<T>) => {
  const Component = Tag as ElementType;

  return (
    <Component
      className={cn("mx-auto max-w-360 px-7 md:px-[2.438rem] lg:px-24", className)}
      {...props}
    >
      {children}
    </Component>
  );
};
export default Wrapper;
