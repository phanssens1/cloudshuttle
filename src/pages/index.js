import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cloud_shuttle_logo_awesome.png";
import peter from "../images/peter_square.png";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`cloud shuttle`, `peter hanssens`, `data engineering`, `serverless`]}
        title="Home"
      />

      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        />

        <h2 className="inline-block p-3 mb-4 text-xl ">
          Transporting you to the Cloud!
        </h2>
      </section>
      <section>
        <div className="flex mb-4">
          <div className="w-1/3 px-8 max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={peter} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Community Built</div>
              <p className="text-gray-700 text-base">
                Cloud Shuttle was born out of community events - its inspiration and passion come from the sharing and learning of information.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#meetups</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#techconference</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#serverlessdays</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#dataengbytes</span>
            </div>
          </div>
          <div className="w-1/3 px-8 max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={peter} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Cloud Experts</div>
              <p className="text-gray-700 text-base">
                One of our specialties is to help you get started in the cloud.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#controltower</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#serverless</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#cicd</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#aws</span>
            </div>
          </div>
          <div className="w-1/3 px-8 max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={peter} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Data Engineering</div>
              <p className="text-gray-700 text-base">
                The movement of data around a business is what we do.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#dataengineering</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#pipelines</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#dbt</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#lake</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#warehouse</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
