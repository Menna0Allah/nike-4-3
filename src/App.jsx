import { 
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality 
 } from './sections';
 import Nav from './components/Nav';

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="
    xl:padding-1  wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="Padding-x py-10">
      <Services/>
    </section>
    <section className="Padding">
      <SpecialOffers/>
    </section>
    <section className="padding bg-pale-blue">
    <CustomerReviews/>
    </section>
    <section className="padding-x py-16 w-full">
    <Subscribe/>
    </section>
    <section className="padding-x padding-t pb-8 bg-black">
      <Footer/>
    </section>
  </main>
);

export default App;