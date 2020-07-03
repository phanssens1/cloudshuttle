import React from "react";
import Head from 'next/head'
import Link from 'next/link'

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
        <div className="inline-block p-3 mb-4 text-xl ">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/wdwUz-ubH-E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </section>

      <section className="text-center">
        <div className="flex flex-wrap md:flex-no-wrap lg:flex-no-wrap xl:flex-no-wrap">
          <CARDS
            title="Community"
            image="/images/bytes_center.svg"
            description="The power of community is when enthusiastic people come together and share what they know and don't know - thus growing from their collective knowledge!"
            keywords={[`DataEngBytes`, `ServerlessDays`, `Meetups`, `Conferences`]}
          />
          <CARDS
            title="Consulting"
            image="/images/undraw_developer.png"
            description="Often time I hear businesses just wanting that new dashboard created, or that data source onboarded or to clean up their infrastracture - we can help with that!"
            keywords={[`Data Engineering`, `Serverless`, `AWS`, `Cloud`]}
          />
          <CARDS
            title="Teaching"
            image="/images/undraw_teaching.png"
            description="Invariably the missing ingredient in consulting engagements is the lack of 'how-to' knowledge within a business to enable its employees - this covers that!"
            keywords={[`Mentoring`, `Workshops`, `Walk-throughs`]}
          />
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;

