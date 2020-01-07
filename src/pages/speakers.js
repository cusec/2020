import React from "react";
import puneet from "../assets/images/speakers/puneet.png";
import abdou from "../assets/images/speakers/abdou.png";
import andre from "../assets/images/speakers/andre.png";
import angelo from "../assets/images/speakers/angelo.png";
import erica from "../assets/images/speakers/erica.png";
import forest from "../assets/images/speakers/forest.png";
import jackie from "../assets/images/speakers/jackie.png";
import kate from "../assets/images/speakers/kate.png";
import kateG from "../assets/images/speakers/kateG.png";
import kristina from "../assets/images/speakers/kristina.png";
import maude from "../assets/images/speakers/maude.png";
import mayuko from "../assets/images/speakers/mayuko.png";
import megan from "../assets/images/speakers/megan.png";
import nicolas from "../assets/images/speakers/nicolas.png";
import phillip from "../assets/images/speakers/phillip.png";
import toria from "../assets/images/speakers/toria.png";


export default class Speakers extends React.Component {

	render() {
		return (
			<React.Fragment>

				<div className="events-container">
					<div className="center-container center-container-margin">

						<h1>Keynote Speakers</h1>

						<div className="event-container">
							<div className="event-icon">
								<img alt="Puneet Mulchandani" src={puneet} className="event-image"></img>
								<p className="speaker-name">Puneet Mulchandani</p>
							</div>
							<div className="event-description">
								<p className="talk-title">Taming Chaos: Life as a Product Manager</p>
								<p >What do product managers do? What role do they play on software development teams? Can chaos really be tamed? We'll talk through the basics of product management, the value that PM's bring to teams, how to use PM's as a resource, and ways to pursue a career in product management. </p>
								<hr className="speaker-break" />
								<p >Puneet Mulchandani is an engineer-turned-product manager who loves solving meaningful problems. He's built and scaled up teams, worked on a variety of complex software and business problems, and even co-founded a tech startup. He led the product and engineering teams at GuestDriven (acquired in 2016), and currently works as the product management lead at Stack Overflow on their Advertising and Talent products. In his spare time, you'll find him playing music, binge-watching videos about space, or on an airplane.</p>
								<hr />
							</div>

						</div>
						<div className="event-container">
							<div className="event-icon">
								<img alt="Kate Gregory" src={kateG} className="event-image"></img>
								<p className="speaker-name">Kate Gregory</p>
							</div>
							<div className="event-description">
								<p className="talk-title">Emotional Code</p>
								<p >Programmers, it turns out, are human beings. This means they not only feel emotions, they leave traces of those emotions behind in their code. Kate will show you why that is so, and what you can do about it.</p>
								<hr className="speaker-break" />
								<p >I have been paid to program for over 40 years now, and it’s almost all been in C++. I code, teach, write, and help people, from an office in rural Ontario. You can take my courses on Pluralsight or watch my talks at conferences the world over. I’m also active in #include {"<"}C++{">"}, trying to make the C++ community more welcoming and inclusive.</p>
								<hr />
							</div>

						</div>
						<div className="event-container">
							<div className="event-icon">
								<img alt="Toria Gibbs" src={toria} className="event-image"></img>
								<p className="speaker-name">Toria Gibbs</p>
							</div>
							<div className="event-description">
								<p className="talk-title">How Search Engines Work: A Thing I Didn’t Learn in University</p>
								<p >You probably learned about databases in university, but did you learn about search engines? The search bar is the most important feature of many websites... and yet most people don’t know how it really works! Toria Gibbs didn’t know how search engines work either, until she landed a job doing search infrastructure. Extrapolating (a.k.a. guessing) from what she knew about databases worked for a while, but eventually she had to buckle down and learn the fundamentals. In this talk, we’ll learn the basic implementation of a search engine. We’ll see how search engines can outperform databases in some ways (but not others!) and what trade-offs were made to achieve this fast performance. You’ll walk away knowing when to add a search engine to your project, how to build it using open source tools, and how to ace a technical interview and succeed at your job, even when you don’t already know the domain!</p>
								<hr className="speaker-break" />
								<p >Toria Gibbs is a Senior Software Engineer on the Search Platform team at Shopify. She is interested in back-end development, distributed systems, information retrieval (including databases and search systems), cloud platforms, and container orchestration. Toria holds a computer science degree from the University of Waterloo. In her spare time, Toria bakes cookies and plays the bassoon in a wind orchestra.</p>
								<hr />
							</div>
						</div>
						<div className="event-container">
							<div className="event-icon">
								<img alt="Mayuko Inoue" src={mayuko} className="event-image"></img>
								<p className="speaker-name">Mayuko Inoue</p>
							</div>
							<div className="event-description">
								<p className="talk-title">Finding Your Way Through the Tech Industry: A Letter to My Former Self</p>
								<p >Navigating the tech industry can be daunting - its more competitive than ever, and it's growing at a rapid rate. How do you identify your goals and stick to your values while staying your authentic self when stepping into your career and onwards? What can you do to play to your strengths and continue to grow? Is it just me that has imposter syndrome? In the format of a letter to my former self - a college student trying to find her way through the tech industry - I'll share lessons and insights I've learned and things I wish I knew as a college student. </p>
								<hr className="speaker-break" />
								<p >Mayuko Inoue is a second generation Japanese American from San Diego, CA living in the San Francisco Bay Area. She works as a Senior iOS Software Engineer at a large tech company in Silicon Valley, and has worked in the tech industry since 2012, at companies like Intuit and Patreon. She makes Youtube videos and online content about what it's like to live as a Software Engineer living in Silicon Valley to help people find their way through the tech industry. She touches on topics such as programming and recent technologies, emotional vulnerability, diversity and inclusion, communication skills, and imposter syndrome.</p>
								<hr />
							</div>
						</div>
						<h1>Invited Speakers</h1>
						<div className="event-container">
							<div className="event-icon">
								<img alt="Phillip Williams" src={phillip} className="event-image"></img>
								<p className="speaker-name">Phillip Williams</p>
							</div>
							<div className="event-description">
								<p className="talk-title">Machine Learning in the Cloud</p>
								<p >Kinaxis offers many Machine Learning products such as time series forecasting. The problem is that we have so much data that it can't all be processed on one machine. This talk will explore the challenges that come with data of that size, the tools and architecture to solve these problems as well as the current state of this niche in the Python ecosystem. I'll be giving explanations and examples of distributed computing, and will explain how technologies such as Docker, Kubernetes, Kafka, Dask and PySpark can fit together to produce an elegant and powerful solution for Machine Learning at scale.</p>
								<hr className="speaker-break" />
								<p >Phil is an Ottawa based Software Developer who completed his undergraduate degrees in Computer Science and Chemical Engineering at the University of Ottawa. He has worked on projects from a variety of domains, from his undergraduate Thesis in Computational Chemistry, his side projects in Virtual Reality and Computational Geometry to his current work on Machine Learning in Academia and Industry. At his current role at Kinaxis, Phil is using Big Data, Cloud Technologies and Distributed Computing to build the next generation of Automatic Machine Learning and Time Series Forecasting.</p>
								<hr />
							</div>
						</div>
						<div className="event-container">
							<div className="event-icon">
								<img alt="Erica Engle" src={erica} className="event-image"></img>
								<p className="speaker-name">Erica Engle</p>
							</div>
							<div className="event-description">
								<p className="talk-title">All about perspective: A deep dive into view creation on iOS and how to make the best choice for your next app</p>
								<p >iOS application development relies on many things, but one of those is how to create views for your users to interact with content in your app. Developers can choose xibs, storyboards, or programmatic style for view creation. With all of these different types there can be confusion (and debate) around which might be the best for your next project. We'll dive into the pros and cons of each as well as give some tips when strategizing where to start when building your app or how to approach this topic when building an app with a team. </p>
								<hr className="speaker-break" />
								<p >Erica is a current Senior Software Engineer at Slack Technologies. She is on the Enterprise team as an iOS engineer at Slack where she works on features such as Enterprise Mobility Management, Single Sign On, and Enterprise Key Management to name a few. Erica graduated from the University of Southern California. When she is not spending her time working on apps she's running marathons and taking walks with her dog, Eddie!</p>
								<hr />
							</div>
						</div>
						<div className="event-container">
							<div className="event-icon">
								<img alt="Kate Arthur" src={kate} className="event-image"></img>
								<p className="speaker-name">Kate Arthur</p>
							</div>
							<div className="event-description">
								<p className="talk-title">The critical role that AI education will play in creating a fair and inclusive world</p>
								<p >AI influences the world around us, from the posts we see on social media to our assignment grades - even our credit scores. But education is struggling to keep up. As the technology is evolving faster than we can understand, how do we educate teachers and children about AI, and its potential to cause both harm and good? How can we prepare young people for an unpredictable tomorrow? In this talk, Kate Arthur, CEO of KCJ, will outline the roles that AI systems play in daily life, and how these developments could be used to meet the UN’s Sustainable Development Goals deadline of 2030. Drawing on her experience of creating learning experiences for over 8,000 educators and 250,000 young people, Kate can share how she inspires engagement with computer science, and creates communities of digital skills - building on from her open letter in La Presse that was supported by leading thinkers like Yoshua Bengio, Lyse Langlois and Hugo Larochelle.</p>
								<hr className="speaker-break" />
								<p >Kate Arthur is the founder and CEO of Kids Code Jeunesse (KCJ), a national charity determined to give every Canadian child access to digital skills education. In 2019, KCJ launched #kids2030, an initiative to educate kids and educators on artificial intelligence, ethics, and on using technology to achieve the UN's Sustainable Development Global Goals by 2030. Kate was raised and educated in the U.K., Nigeria, Saudi Arabia, Argentina and Canada, and has witnessed the powers of an educated country and an uneducated one. Kate sits on a number of boards and committees and is also a dedicated mentor to young women entering business and entrepreneurship.</p>
								<hr />
							</div>
						</div>
						<div className="event-container">
							<div className="event-icon">
								<img alt="Maude Lemaire" src={maude} className="event-image"></img>
								<p className="speaker-name">Maude Lemaire</p>
							</div>
							<div className="event-description">
								<p className="talk-title">10 Things You Should Know Before Refactoring Anything</p>
								<p >Slack strives to makes people’s working lives simpler, more pleasant and more productive. From global Fortune 100 companies to corner markets, businesses and teams of every kind use Slack to bring the right people together with all the right information. Whereas just two years ago the product had 2 million daily active users, today it boasts over 12 million! Unfortunately, with quick growth come tough growing pains, and Slack was (and still isn’t) immune to them. This is the tale of multiple refactoring efforts and the many lessons we learned in our attempts to boost application performance company-wide developer productivity. Follow me through the obstacles and hiccups we overcame to make Slack what it is today: a reliable, speedy product hundreds of developers can contribute to every day. You’ll walk away knowing the critical ""when""s, ""why""s, and ""how""s of a successful refactor!</p>
								<hr className="speaker-break" />
								<p >Maude is a Staff Software Engineer at Slack Technologies Inc., based out of San Francisco.  In her time at Slack, she’s worked on a few different teams: first as a product engineer building the Grid product, then as a performance engineer focused on scaling out the backend to handle some of our largest Enterprise customers 📈. She currently works on the infrastructure team, focusing on making sure that other backend engineers at Slack are as productive as they can possibly be 🏃🏻‍♀️.Prior to moving to the bay area, Maude was front-end software engineer at Rent the Runway in New York City 🗽 working with the growth and customer acquisition team. Maude holds a BSc. in Software Engineering 👩🏻‍🎓 from McGill University in Montréal, QC 🇨🇦."</p>
								<hr />
							</div>
						</div>
						<div className="event-container">
							<div className="event-icon">
								<img alt="Forest Anderson" src={forest} className="event-image"></img>
								<p className="speaker-name">Forest Anderson</p>
							</div>
							<div className="event-description">
								<p className="talk-title">Cultivating a Healthy Open Source Community</p>
								<p >Veloren is an open source multiplayer game written in Rust, with aesthetics similar to Minecraft. It has contributors from all around the world. Since it is an open source project, it needs strong and healthy development practices. As the meta lead for the project, Forest works to proactively improve many different parts of this process. This talk will go over Veloren's techniques that will work for any project, as well as some that are more unique. Some topics include release cycles, decentralized design, public outreach, and talent acquisition.</p>
								<hr className="speaker-break" />
								<p >Forest is a student who enjoys making games and running security competitions. He co-leads Hack All The Things and the Lame Jam. He is the meta lead on the Veloren project, in which he focuses on CI and community development. He also writes a weekly dev blog that highlights the project's progress. On the side, he is a 4th-year student enjoying his 5th year at Carleton University. He is studying computer science with honours in game development. He is the CTO of Timsle and works out of the Impact Hub Ottawa. Forest has done research in the Graphics, Images and Games Lab at Carleton. His research focuses are image processing and web security. This will be his 4th year at CUSEC! Be sure to catch him at the board game night. If you want to discuss other topics such as Rust, CI/CD, security, game development, or anything in between, he's sure to want to chat!</p>
								<hr />
							</div>
						</div>
						<div className="event-container">
							<div className="event-icon">
								<img alt="Megan Doherty" src={megan} className="event-image"></img>
								<p className="speaker-name">Megan Doherty</p>
							</div>
							<div className="event-description">
								<p className="talk-title">The Soft Skills in Software: Branding Yourself as a Technical Person</p>
								<p >From co-op dropout to Startup Director to Technical Account Manager at Microsoft. Why soft skills in a technical role give you the leading edge.""Putting the Soft skills in Software"" will outline the importance of technical skills in soft skill roles and vice versa. Often time software engineering, computer science and other technical students feel pigeon holed into taking a developer role. Megan will explore how branching out into different avenues in tech, by leveraging soft skill abilities and good old fashion hustle, can lead you to the career you envision. This speech will also highlight the opportunities that co-op may not give you, that GPA isn't as relevant in a real life context and how building your brand as a technical person is as important as ever.</p>
								<hr className="speaker-break" />
								<p >Megan is a Technical Account Manager for Microsoft based in Toronto and recent software engineering graduate from the University of New Brunswick. Previously, a Director for a start-up, she understands the value in leveraging Microsoft solutions in education. As an artist and a software engineer, she's always wondered why the gap between technology and creativity was so large. When Megan isn't working, she's an illustrator for cybersecurity comics, a UI/UX designer and competitive painter.</p>
								<hr />
							</div>
						</div>
						<div className="event-container">
							<div className="event-icon">
								<img alt="Nicolas Cuillery" src={nicolas} className="event-image"></img>
								<p className="speaker-name">Nicolas Cuillery</p>
							</div>
							<div className="event-description">
								<p className="talk-title">Mobile Development is The Worst (I love it!)</p>
								<p ></p>
								<hr className="speaker-break" />
								<p >Nicolas is a software developer. Graduated in electronic 10 years ago from the french engineering school CPE-Lyon, he has worked his way up to a CTO position in the Canadian branch of the consulting company Zenika. As a CTO, he helps both the company and its employees to shine and glow on all technical aspects. As a consultant, he advises and helps companies to overcome their challenges. Always driven by passion, he embraces the emerging technologies and actively promotes the ones he believes in. He has taken an active role in the JavaScript community by contributing to multiples libraries and frameworks, writing blog posts and organizing technical meetups in Montreal.</p>
								<hr />
							</div>
						</div>
						<div className="event-container">
							<div className="event-icon">
								<img alt="Kristina Balaam" src={kristina} className="event-image"></img>
								<p className="speaker-name">Kristina Balaam</p>
							</div>
							<div className="event-description">
								<p className="talk-title">Careers in Cybersecurity: The jobs you never knew you wanted</p>
								<p >Cybersecurity is one of the fastest growing and understaffed industries in tech. And yet, as students, many of us were never exposed to the exciting career opportunities it offers! In this talk, we'll discuss possible career paths, what a role in cybersecurity is really like, and how students can get started pursuing a career in infosec. </p>
								<hr className="speaker-break" />
								<p >Kristina Balaam is a Security Intelligence Engineer at Lookout where she reverse-engineers mobile malware. Prior to Lookout, she worked as an Application Security Engineer at Shopify focusing mostly on Android mobile security. Kristina graduated with a bachelor's of computer science from McGill University in 2012, and is currently pursuing a MSc. in information security engineering from the SANS Institute of Technology. She is passionate about public speaking and educating consumers and developers on topics in cybersecurity.</p>
								<hr />
							</div>
						</div>
						<div className="event-container">
							<div className="event-icon">
								<img alt="Jackie Chi Kit Cheung" src={jackie} className="event-image"></img>
								<p className="speaker-name">Jackie Chi Kit Cheung</p>
							</div>
							<div className="event-description">
								<p className="talk-title">Artificial Intelligence in the Wild: Challenges and Opportunities</p>
								<p >I will discuss the challenges and opportunities of deploying AI techniques in settings where they are expected to interact with humans or make decisions that have impact on people's lives. I will present a brief overview of how current state-of-the-art methods work, and how their particular strengths and weaknesses translate into downstream applications. I will present success stories in which AI systems are already having an impact in the world. I will also point to several challenges faced by these systems, related to how their behaviour is sometimes unpredictable on certain tasks, at least with respect to how humans might expect them to behave.</p>
								<hr className="speaker-break" />
								<p >Jackie Chi Kit Cheung is an Assistant Professor at McGill University's School of Computer Science, where he co-directs the Reasoning and Learning Lab, and a Canada CIFAR AI Chair at the Mila Research Institute. He obtained his PhD from the University of Toronto. His research focuses on developing computational methods for understanding text and for generating language that is fluent and useful in context.  Specifically, his lab has developed state-of-the-art methods in automatic summarization and text simplification, as well as novel methodologies for probing current NLP systems for their understanding of common sense knowledge. Dr. Cheung is an academic advisor for the Borealis AI research lab in Montreal.</p>
								<hr />
							</div>
						</div>
						
						<div className="event-container">
							<div className="event-icon">
								<img alt="Angelo Pengue" src={angelo} className="event-image"></img>
								<p className="speaker-name">Angelo Pengue</p>
							</div>
							<div className="event-description">
								<p className="talk-title">Device Monitoring, Visualisation, and Alerting with the TICK stack and Grafana</p>
								<p >TICK stack is an open source project offered by InfluxData. These tools specialize in helping us acquire and store time series data from devices, sensors, or anything that emits data! Furthermore, it provides us with easy ways out of the box to visualize and trigger alerts from the data. In this talk, I will walk you through setting up the TICK stack to gather and store device metrics, visualize them on Grafana, and trigger alerts when things start getting hairy, that way you don't have to lose your own hair!</p>
								<hr className="speaker-break" />
								<p >Angelo Pengue is a Software Developer at DRW, where he and his team provide software solutions to network teams varying from operational integrity to business administration. He has a Bachelor of Software Engineering from Concordia University. Previously, he completed vocational training in automobile mechanics at EMSB and worked as an automobile technician for several years. In his free time, Angelo enjoys playing soccer, taking Improv classes, aviation and racing simulation, and learning about personal development. He also loves playing pranks and bringing people closer together!</p>
								<hr />
							</div>
						</div>
						<div className="event-container">
							<div className="event-icon">
								<img alt="André Gauthier" src={andre} className="event-image"></img>
								<p className="speaker-name">André Gauthier</p>
							</div>
							<div className="event-description">
								<p className="talk-title"> The Future of 3D Real-Time Tools</p>
								<p >The world’s most popular real-time 3D platform, Unity provides tools for creators of all kinds to bring their ideas to life. Unity powers over 50% of the world’s mobile games, more than 60% of VR and AR content, and is fast expanding into markets from architecture and engineering to automotives to film. </p>
								<hr className="speaker-break" />
								<p >André Gauthier has been working in the real-time 3D industry for the last 30 years. He started his career as a cofounder of Kaydara, the creator of the Academy Award-winning software MotionBuilder. His team at Kaydara authored tools for motion capture and real-time character animation that have been used in the production of video games and at the core of major virtual film productions including The Matrix, Avatar, and Tintin. André joined Unity six years ago. He helped found the Montreal office of Unity Technologies, where he acts as the Montreal studio head and vice-president of authoring tools and technologies.</p>
								<hr />
							</div>
						</div>
						<div className="event-container">
							<div className="event-icon">
								<img alt="Abdou Sarr" src={abdou} className="event-image"></img>
								<p className="speaker-name">Abdou Sarr</p>
							</div>
							<div className="event-description">
								<p className="talk-title">The Future of Computational Photography</p>
								<p >The world of media is rapidly evolving. As our devices develop more immersive capabilities our demand for photos to escape their current constraints grows larger. In this talk we will discuss the growing innovation of cameras on mobile devices, and the software trends (including AI and AR) that will impact the future.</p>
								<hr className="speaker-break" />
								<p >Abdou Sarr is a fourth year CS student at Carleton University and currently the co-founder of MODU. At MODU he works on bringing what users see in the real world closer to what they see on their mobile devices with immersive capture technologies. Before MODU, Abdou worked as a software engineering intern at companies including Shopify, Canopy Growth Corporation and Motorola Labs. The intersection of mobile technology and the world around us has always fascinated Abdou and he has been deploying iOS apps for over 7 years now. When he's not working on software, he's taking photos and documenting his day-to-day life (instagram: @appdou).</p>
								<hr />
							</div>
						</div>
					</div>
				</div>

			</React.Fragment>
		)
	}
}


