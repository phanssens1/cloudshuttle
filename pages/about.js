import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`Cloud Shuttle`, `Peter Hanssens`, `Community Consulting`, `Serverless`, `Data Engineering`]}
        title="About"
      />

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8">
          <blockquote className="pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
            Getting to the Cloud doesn&apos;t have to be hard. Nor does getting your data setup. 
            Working with experienced professionals who have been through the journey is the way to go.
            There are lots of great Cloud services and tools out there to help you along your way.
          </blockquote>

          <cite className="block mt-4 text-xs font-bold text-right uppercase">
            – Peter Hanssens
          </cite>
        </div>

        <figure className="w-2/3 md:w-1/3">
          <img alt="Peter Hanssens" src="/images/peter_hanssens_new.jpg" />
        </figure>
      </section>
    </Layout>
  );
}

export default AboutPage;
