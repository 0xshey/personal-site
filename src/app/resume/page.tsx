"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Info } from "lucide-react";
import Link from "next/link";

import ResumeHeader from "@/components/resume/resume-header";
import ResumeBlock from "@/components/resume/resume-block";
import ResumeProject from "@/components/resume/resume-project";
import ResumeEducation from "@/components/resume/resume-education";

export default function ResumePage() {
	return (
		<div className="min-h-screen bg-background flex flex-col items-center py-12 px-4 md:px-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="w-full max-w-2xl flex flex-col gap-12"
			>
				{/* Back Navigation */}
				<Link
					href="/#work"
					className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors w-fit group"
				>
					<ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
					<span className="text-sm font-medium">Back to Work</span>
				</Link>

				<ResumeHeader
					profileImage="/images/profile.jpg"
					name="Shey Laplanche"
					subtext="Full Stack Developer"
					location="San Francisco, CA"
				/>

				<div className="space-y-12">
					<ResumeBlock title="About">
						<div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
							<p>
								I&apos;m an Australian full-stack developer
								living out in California. Very experienced with
								Python for data manipulation and API
								applications. I also love building React
								front-end's for my projects to make them
								accessible to less technical audiences.
							</p>
							<p>
								I have recently graduated from (BSc.) Computer
								Science in Perth, Australia, moved to San
								Francisco and would love to join a team where I
								can utilise my technical, interpersonal and
								creative skills in a data development
								environment.
							</p>
							<p>
								Also looking for connections or pickup runs
								around the city! Get in touch :)
							</p>
						</div>
					</ResumeBlock>

					<ResumeBlock title="Projects">
						<div className="flex flex-col gap-12">
							<ResumeProject
								date="2024"
								title="Backboard - NBA Fantasy Dashboard"
								description={
									<div className="flex flex-col gap-4 text-sm text-muted-foreground">
										<p>
											An NBA dashboard for viewing a live
											and historical, daily summaries of
											NBA performances from a Fantasy
											Points perspective.
										</p>
										<ul className="list-disc list-inside space-y-1">
											<li>
												Built with React on the Next.js
												framework
											</li>
											<li>
												PostgreSQL backend hosted on
												Supabase
											</li>
											<li>Deployed to Vercel</li>
										</ul>
									</div>
								}
								images={[
									{
										src: "/images/projects/backboard/1.png",
										title: "Players Page",
									},
									{
										src: "/images/projects/backboard/2.png",
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
										url: "https://backboard-rankings.vercel.app/",
										type: "deployment",
									},
								]}
							/>
							<ResumeProject
								date="2023"
								title="Shopping Assistant Web-App at Curtin University"
								description={
									<div className="flex flex-col gap-4 text-sm text-muted-foreground">
										<p>
											A full-stack Django web-application
											for the client to browse grocery
											products from a range of retailers.
										</p>
										<ul className="list-disc list-inside space-y-1">
											<li>
												Fetches catalog items with a
												Selenium based web-scraper.
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
												Deployed temporarily for a 3
												month period.
											</li>
										</ul>
									</div>
								}
							/>
						</div>
					</ResumeBlock>

					<ResumeBlock title="Education">
						<div className="flex flex-col gap-6">
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
						</div>
					</ResumeBlock>
				</div>

				<div className="flex items-center gap-2 text-xs text-muted-foreground/60 bg-muted/30 p-4 rounded-lg">
					<Info className="w-4 h-4 shrink-0" />
					<p>
						With read.cv shutting down soon (RIP), I have migrated
						my resume here!
					</p>
				</div>
			</motion.div>
		</div>
	);
}
