import React from "react";
import {
  Header,
  HotspotBanner,
  RegisterForm,
  Community,
  EventsPR,
  ExclusiveContent,
  Footer,
} from "../../utils/componentsExport";

const Homepage = () => {
  return (
    <section>
      <Header />
      <main>
        <HotspotBanner />
        <RegisterForm />
        <Community />
        <EventsPR />
        <ExclusiveContent />
      </main>
      <Footer />
    </section>
  );
};

export default Homepage;
