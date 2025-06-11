import Image from "next/image";

export default function Home() {
  return (
		<div className="">
			<h1>Home</h1>
			<Image src="/vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} priority />
		</div>
	);
}
