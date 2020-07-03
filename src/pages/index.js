import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import CARDS from "../components/cards";
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

      <section className="text-center">
        <div className="flex space-x-8">
          <CARDS
            title="Community"
            image="mugShot"
            description="The power of community is when enthusiastic people come together and share what they know and don't know - thus growing from their collective knowledge!"
            keywords={[`DataEngBytes`, `ServerlessDays`, `Meetups`, `Conferences`]}
          />
          <CARDS
            title="Consulting"
            image="mugShot"
            description="Often time I hear businesses just wanting that new dashboard created, or that data source onboarded or to clean up their infrastracture - we can help with that!"
            keywords={[`Data Engineering`, `Serverless`, `AWS`, `Cloud`]}
          />
          <CARDS
            title="Teaching"
            image="mugShot"
            description="Invariably the missing ingredient in consulting engagements is the lack of 'how-to' knowledge within a business to enable its employees - this covers that!"
            keywords={[`Mentoring`, `Workshops`, `Walk-throughs`]}
          />
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
