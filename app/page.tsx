import Hero from '@/components/Hero';
import CompaniesSlider from '@/components/CompaniesSlider';
import PlanGrowth from '@/components/PlanGrowth';
import ComparisonTable from '@/components/ComparisonTable';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <CompaniesSlider />
      <PlanGrowth />
      <ComparisonTable />
      <Testimonials />
    </>
  );
}
