import type { Metadata } from "next";


export const metadata:Metadata = {
  title: "About JC",
  description: "Description about JC",
};

export default function AboutPage() {
  return (
      <main className="flex flex-col  items-center p-24">
        <span className="text-5xl">About</span>
      </main>
  );
}
