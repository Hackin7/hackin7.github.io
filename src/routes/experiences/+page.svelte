<script lang="ts">
	import SocialIcons from '@rodneylab/svelte-social-icons';
	import type { PageServerData } from './$types';
	import Tag, { tagCat, tagPriority, tagSort } from '../../components/Tag.svelte';
	export let data: PageServerData;
	let experiences = data.experiences.map((item, index, arr) => ({
		...item
	}));
</script>

{JSON.stringify(experiences)}
<h1 class="text-3xl text-left font-bold underline">Work Experience</h1>
<div class="text-left prose max-w-none">
	<div class="flex flex-row">
		<!--<img
			class="rounded-t-lg object-cover w-20 h-10"
			src="https://www.dsta.gov.sg/images/default-source/revamp/dsta_logoea8a31700a1d6b0c895eff0000f6c7a3.svg?sfvrsn=1f975adf_2"
			alt=""
		/>-->
		<div>
			<h2 id="2019-2020">DSTA Internship: Apr-July 2023</h2>
			<p>Worked on the Sensor Systems in the Drone Versus Drone Project. This includes</p>
			<ol>
				<li>Configuring AWS Infrastructure such as EC2, Kinesis Video Streams, IoT Core.</li>
				<li>
					Developed an Android app to send Video data through KVS and metadata through IoT Core for
					Video Analytics
				</li>
				<li>
					Developed a Simple Python GUI to interface with video analytics solution for ease of
					deployment
				</li>
				<li>
					Set up, maintained, and utilised the 3D printer to produce mounts. Did electronics
					assembly, testing &amp; soldering on the drone.
				</li>
			</ol>
		</div>
	</div>

	<h2 id="2019-2020">Fabrica AI Internship: 2023</h2>
	<p>Worked on</p>
	<ol>
		<li>
			PCB/Electronics Design and Debugging
			<ul>
				<li>Handled various components such as MOSFETs, Op Amps</li>
			</ul>
		</li>
		<li>
			Worked on Arduino Mega, Due (PlatformIO)
			<ul>
				<li>Handled various components and communication protocols (Roboclaw, UART, I2C, SPI)</li>
				<li>Coded various unit tests</li>
			</ul>
		</li>
		<li>CAD modeling inter PCB brackets with Fusion 360</li>
		<li>Sourcing for components and Liasing with sellers/PCB Manufacturers</li>
		<li>
			Made Scripts &amp; Excel Sheets to automate several processes (Eg. Gerber file generation,
			BOM)
		</li>
	</ol>
</div>

<h1 class="text-3xl text-left font-bold underline">Education</h1>
<div class="text-left prose max-w-none">
	<h2 id="2019-2020">Nanyang Junior College: 2019-2020</h2>
	<ul>
		<li>Enrolled in Nanyang Junior College</li>
		<li>Was in the Robotics Club as a CCA</li>
		<li>
			Was in the robotics team (NYCasuals 2019) that got
			<ul>
				<li>1st in RoboCupJunior Rescue CoSpace during RoboCup Singapore 2019 and</li>
				<li>
					Best Presentation Award in RoboCupJunior Rescue Simulation during RoboCup Sydney 2019
				</li>
			</ul>
		</li>
		<li>
			Co-founded (and am currently the Vice President of) the NYCompSci Student Interest Group
		</li>
		<li>Was on the JC1 Block Test Honor Roll</li>
		<li>In NYJC Galileo Programme</li>
		<li>
			Participated in many Computing Related Events like
			<ul>
				<li>CodeXtremeApps Hackathon (2019): Finalist</li>
				<li>Australian Informatics Olympiad (2019): Bronze</li>
				<li>National Olympiad of Informatics (2020)</li>
				<li>Cyberthon (2020): In the team that got Commendation Award</li>
			</ul>
		</li>
		<li>
			Also Participated in Academic/ Engineering Events like
			<ul>
				<li>Australian Mathematical Olympiad (2019): Certificate of Credit</li>
				<li>Singapore Physics Olympiad (2019): Honorable Mention</li>
				<li>Tech For Good (2019)</li>
			</ul>
		</li>
		<li>
			Participated in projects to help the community like
			<ul>
				<li>TechPals Season 2 (2019): Built an LED matrix to motivate the elderly to exercise</li>
				<li>
					NY Buddy Tutors Programme (2019): Giving Peer Tutoring at Club Rainbow every Saturday
				</li>
			</ul>
		</li>
	</ul>

	<h2 id="2015-2018">Chung Cheng High Yishun: 2015-2018</h2>
	<ul>
		<li>Enrolled in Chung Cheng High School Yishun</li>
		<li>
			Was in Volleyball as a CCA, played the Middle Blocker, and participated in C and B divisions
			in the North Zone.
		</li>
		<li>Was a Class Monitor in 2016, and a National Education Ambassador in 2017-2018.</li>
		<li>
			Participated in many academic and computing-related activities, such as
			<ul>
				<li>BuildingBloCS (2017): Team won first place in the competition</li>
				<li>EUREKA Competition (2017)</li>
				<li>Singapore Junior Physics/Chemistry Olympiad (2018)</li>
			</ul>
		</li>
		<li>
			Received EDUSAVE awards like the
			<ul>
				<li>EDUSAVE Scholarship for all 4 years</li>
				<li>EDUSAVE Award for achievement, Good Leadership &amp; Service (EAGLES) in 2017</li>
				<li>EDUSAVE Character award in 2018.</li>
			</ul>
		</li>
		<li>On the Principal’s List (Among the top in the level) in 2015, 2016, 2018</li>
		<li>
			Was Top in these few subjects
			<ul>
				<li>Science (2015)</li>
				<li>Mathematics (2016)</li>
				<li>Computing (2017)</li>
				<li>Physics (2018)</li>
			</ul>
		</li>
		<li>
			Got the Zhuang Wei Liang Mathematics Award (2016), and the Zhuang Zhu Lin Scholarship (2017).
		</li>
		<li>7 Distinctions for O Levels, with a raw L1R5 of 6.</li>
	</ul>

	<h2 id="2009-2014">Canberra Primary School: 2009-2014</h2>
	<ul>
		<li>Enrolled in Canberra Primary School</li>
		<li>Was in Infocomm and Media Club as a CCA</li>
		<li>Scored 239 for PSLE</li>
	</ul>
</div>
<br />

{#each experiences as experience}
	{JSON.stringify(experience)}
	<svelte:component this={experience.default} />
{/each}
