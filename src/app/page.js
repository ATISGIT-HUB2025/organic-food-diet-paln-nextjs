import HeroBanner from "@/app/pages/Hero/HeroBanner";
import WhyChooseUs from "@/app/pages/Hero/WhyChooseUs";
import MealPlans from "@/app/pages/Hero/MealPlans";
import About from "@/app/pages/Hero/About";
import ContactBanner from "@/app/pages/Hero/ContactBanner";
import HowWorkMealPlan from "@/app/pages/Hero/HowWorkMealPlan";
import Testimonials from "@/app/pages/Testimonils/Testimonials";
import Blog from "@/app/pages/Blog/Blog";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <About />
      <MealPlans />
      <WhyChooseUs />
      <ContactBanner />
      <HowWorkMealPlan />
      <Testimonials />
      <Blog limit={3} />
    </>
  );
}
