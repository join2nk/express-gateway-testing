import Image from "next/image";
import { headers } from "next/headers";

export default async function Home() {
  const hdrs =await headers();
  const userAgent =  hdrs.get("user-agent") 
  const url = hdrs.get("x-forwarded-url") || hdrs.get("referer") || hdrs.get("origin") || "unknown";
  console.log("User-Agent:", userAgent);
  console.log("URL:", url);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      hello
      <Image src="/nextjs.svg" alt="Next.js Logo" width={180} height={37} />
    </div>

  );
}
