import { Card, CardContent } from "@/components/card";

export default function LifeSection({
	id,
	className,
}: {
	id?: string;
	className?: string;
}) {
	return (
		<div
			id={id}
			className={`flex-grow pl-4 md:pl-10 py-4 flex flex-col gap-8 justify-center md:justify-end ${className}`}
		>
			<h1 className="text-4xl font-medium mx-auto">How I got here</h1>
			<Card>
				<CardContent>
					<div className="flex flex-col gap-4">
						<p className="font-medium text-xl">
							Born and raised in a small Western Australian town,
							far away from the rest of the world in a low-tech
							household, my curiosity of technology and travel has
							had a strong impact on my life
						</p>

						<p className="font-medium text-xl">
							I spent much of my childhood sketching floorplans,
							products and schematics all over spare graphing
							paper from my dads construction drawings. When I was
							able to afford a computer for my final years of
							school, I discovered the unlimited potential of
							creativity possible from a computer.
						</p>

						<p className="font-medium text-xl">
							In late 2024, after graduating from University with
							a Computer Science degree, I took an opportunity to
							move from Perth to California, where I have since
							been working and exploring.
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
