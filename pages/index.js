import "tailwindcss/tailwind.css"
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import CARDS from "../components/cards";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`Cloud Shuttle`, `Peter Hanssens`, `Community Consulting`, `Serverless`, `Data Engineering`]}
        title="Home - Cloud Shuttle - transporting you to the cloud!"
      />

      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src="/images/cloud_shuttle_logo_awesome.png"
        />

        <h2 className="inline-block p-3 mb-4 text-xl ">
          Transporting you to the Cloud!
        </h2>
      </section>

      <section className="text-center">
        <div id="responsiveVideoWrapper" className="relative h-0 pb-fluid-video">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/wdwUz-ubH-E"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <CARDS />
    </Layout>
  );
}

export default IndexPage;

