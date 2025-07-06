"use client"

import { Button } from "@repo/ui/button";
import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Home() {
  const router = useRouter();
  const [chatName, setChatname] = useState("")
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"

    }}>
      <TextInput
        size="big"
        onChange={(e: any) => {
          setChatname(e.target.value)
        }}
        placeholder="Room Name"
      />
      <button style={{
        padding: 10
      }}
        onClick={() => router.push(`/chat/${chatName}`)}
      >Join Here</button>
    </div>
  );
}
