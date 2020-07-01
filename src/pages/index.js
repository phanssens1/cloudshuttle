import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import logoCloudShuttle from "../images/cloud_shuttle_logo_awesome.png";

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
          src={logoCloudShuttle}
        />

        <h2 className="inline-block p-3 mb-4 text-xl ">
          Transporting you to the Cloud!
        </h2>
      </section>
    </Layout>
  );
}

export default IndexPage;
