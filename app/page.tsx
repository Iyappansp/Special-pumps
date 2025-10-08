import Faq from "@/components/elements/faq"
import Layout from "@/components/layout/Layout"
import About4 from "@/components/sections/About4"
// import Cta4 from "@/components/sections/Cta4"
import Hero4 from "@/components/sections/Hero4"
// import Items4 from "@/components/sections/Items4"
// import Others4 from "@/components/sections/Others4"
import Project2 from "@/components/sections/Project2"
import Properties4 from "@/components/sections/Properties4"
// import Team3 from "@/components/sections/Team3"
import Testimonial4 from "@/components/sections/Testimonial4"

export default function Home() {

	return (
		<>

			<Layout headerStyle={4} footerStyle={4}>
				<Hero4 />
				<About4 />
				<Properties4 />
				<Project2 />
				{/* <Items4 /> */}
				<Testimonial4 />
				{/* <Others4 /> */}
				{/* <Team3 /> */}
				<Faq />
				{/* <Cta4 /> */}
			</Layout>
		</>
	)
}