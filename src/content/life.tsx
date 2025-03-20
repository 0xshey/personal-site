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
			className={`flex-grow pl-4 md:pl-10 py-4 flex flex-col gap-8 justify-center md:justify-end bg-green-200 ${className}`}
		>
			<h1 className="text-4xl font-medium">Life</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
				sequi obcaecati recusandae deleniti non blanditiis, enim
				repellendus dolor voluptatum molestiae perspiciatis tempora vel
				eligendi odio inventore? Quos nesciunt tenetur laborum?
			</p>
		</div>
	);
}
