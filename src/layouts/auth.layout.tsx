import { ReactNode } from "react";
import { BannerAuth } from "../components/molecules";

interface Props {
  children: ReactNode;
}

export default function LayoutAuth({ children }: Props) {
  return (
    <div className="mx-auto flex grid-cols-[400px,calc(100%-400px)] flex-col md:grid ">
      <BannerAuth />
      {children}
    </div>
  );
}
