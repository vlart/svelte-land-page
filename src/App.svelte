<script>
	import Navbar from "./Components/Navbar.svelte";
	// import Banner from "./Components/Banner/Banner.svelte";
	// import Services from "./Components/Services/Services.svelte";
	// import About from "./Components/About/About.svelte";
	// import Testimonials from "./Components/Testimonials/Testimonials.svelte";
	// import Social from "./Components/Social/Social.svelte";
	// import Footer from "./Components/Footer/Footer.svelte";
	import DATA from "./Data/Data";

	const {
		NAVBAR_DATA, 
		HEADER, 
		BANNER_DATA, 
		SERVICE_DATA,
		ABOUT_DATA,
		TESTIMONIAL_DATA,
		SOCIAL_DATA,
	} = DATA;
  </script>
  <main>
	<!-- Navbar -->
	<Navbar navlists={NAVBAR_DATA} header={HEADER} />

	<!-- Banner -->
	<!-- <Banner bannerData={DATA.BANNER_DATA} /> -->

	<!-- Services -->
	<!-- <Services serviceData={DATA.SERVICE_DATA} /> -->

	<!-- About -->
	<!-- <About aboutData={DATA.ABOUT_DATA} /> -->

	<!-- Testimonials -->
	<!-- <Testimonials testimonialData={DATA.TESTIMONIAL_DATA} /> -->
	
	<!-- Social Media -->
	<!-- <Social socialData={DATA.SOCIAL_DATA} /> -->
	
	<!-- Footer -->
	<!-- <Footer footerData={DATA.FOOTER_DATA} header={DATA.HEADER} /> -->
</main>