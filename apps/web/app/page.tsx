import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { prisma } from "@repo/db/client"


export default async function Home() {
  const user = await prisma.user.findFirst();
  return (
    <div >
      {user?.name}
    </div>
  );
}
