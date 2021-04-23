<script>
	import Navbar from "./Components/Navbar.svelte";
	import Banner from "./Components/Banner.svelte";
	import Services from "./Components/Services.svelte";
	import About from "./Components/About.svelte";
	import Testimonials from "./Components/Testimonials.svelte";
	import Social from "./Components/Social.svelte";
	import Footer from "./Components/Footer.svelte";
	import DATA from "./Data/Data";

	const {
		NAVBAR_DATA, 
		HEADER, 
		BANNER_DATA, 
		SERVICE_DATA,
		ABOUT_DATA,
		TESTIMONIAL_DATA,
		SOCIAL_DATA,
		FOOTER_DATA,
	} = DATA;

  </script>

  <!----------------MARKUP----------------------->
  
  <main>
	<!-- Navbar -->
	<Navbar navlists={NAVBAR_DATA} header={HEADER} />

	<!-- Banner -->
	<Banner bannerData={BANNER_DATA} />
	<!-- Services -->
	<Services serviceData={SERVICE_DATA} />

	<!-- About -->
	<About aboutData={ABOUT_DATA} />

	<!-- Testimonials -->
	<Testimonials testimonialData={TESTIMONIAL_DATA} />
	
	<!-- Social Media -->
	<Social socialData={SOCIAL_DATA} />
	
	<!-- Footer -->
	<Footer footerData={FOOTER_DATA} header={HEADER} />
</main>