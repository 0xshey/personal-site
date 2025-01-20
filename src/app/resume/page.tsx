import ResumeHeader from "@/components/resume/resume-header";
import ResumeBlock from "@/components/resume/resume-block";
import ResumeProject from "@/components/resume/resume-project";
import ResumeEducation from "@/components/resume/resume-education";

export default function ResumePage() {
	return (
		<div className="flex flex-col items-center gap-16 w-full max-w-xl mt-16">
			<ResumeHeader
				profileImage="/images/profile.jpg"
				name="Shey Laplanche"
				subtext="Full Stack Developer"
				location="San Francisco, CA"
			/>
			<ResumeBlock title="About">
				<div className="px-2 flex flex-col items-start gap-4 w-full">
					<p>
						I&apos;m an Australian full-stack developer living out
						in California. I developing tangible applications and
						tools around data. I am very experienced in data
						manipulation and API development using Python,
						full-stack application development using Typescript and
						am currently learning Rust.
					</p>
					<p>
						I have recently completed my CS degree back in Perth and
						have moved out to San Francisco. I am now seeking a team
						that will have me bring my creative problem solving
						skills, high level of technical adaptability and
						particularity for the graceful and visually pleasing
						solution.
					</p>
					<p>
						Also looking for connections or pickup runs around the
						city! – HMU!
					</p>
				</div>
			</ResumeBlock>

			<ResumeBlock title="Projects">
				<div className="flex flex-col gap-12">
					<ResumeProject
						date="2024"
						title="Backboard - NBA Fantasy Dashboard"
						description={
							<div className="flex flex-col gap-4">
								<p>
									An NBA dashboard for viewing a live and
									historical, daily summaries of NBA
									performances from a Fantasy Points
									perspective.
								</p>
								<ul className="list-disc list-inside">
									<li>
										Built with React on the Next.js
										framework
									</li>
									<li>
										PostgreSQL backend hosted on Supabase
									</li>
									<li>Deployed to Vercel</li>
								</ul>
							</div>
						}
						images={[
							{
								src: "/images/projects/backboard/players-page.png",
								title: "Players Page",
							},
							{
								src: "/images/projects/backboard/roster-page.png",
								title: "Roster Page",
							},
						]}
						links={[
							{
								title: "Code",
								url: "https://github.com/0xshey/backboard",
								type: "code",
							},
							{
								title: "Live Application",
								url: "https://backboard-sepia.vercel.app/",
								type: "deployment",
							},
						]}
					/>
					<ResumeProject
						date="2023"
						title="Shopping Assistant Web-App at Curtin University"
						description={
							<div className="flex flex-col gap-4">
								<p>
									A full-stack Django web-application for the
									client to browse grocery products from a
									range of retailers.
								</p>
								<ul className="list-disc list-inside">
									<li>
										Fetches catalog items with a Selenium
										based web-scraped.
									</li>
									<li>
										Products stored in a PostgreSQL
										database.
									</li>
									<li>
										Displayed using the DaisyUI CSS
										framework.
									</li>
									<li>
										Deployed temporarily for a 3 month
										period.
									</li>
								</ul>
							</div>
						}
					/>
				</div>
			</ResumeBlock>
			<ResumeBlock title="Education">
				<ResumeEducation
					date="2020 – 2023"
					course="Bachelor of Computer Science"
					institution="Curtin University"
					location="Bentley, Western Australia"
				/>
				<ResumeEducation
					date="2017 – 2018"
					course="Bachelor of Computer Systems Engineering"
					institution="Curtin University"
					location="Bentley, Western Australia"
				/>
			</ResumeBlock>
		</div>
	);
}
