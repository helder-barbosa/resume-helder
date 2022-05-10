import React from 'react';
import getUser from '../utils/getUser';
import Head from 'next/head';
import Header from '../components/Header';
import Education from '../components/Education';
import Footer from '../components/Footer';
import Summary from '../components/Summary';

const Index = ({ repos, user }) => {
  return (
    <div>
      <div id="header" className="container mx-auto">
        <Head>
          <title>Helder Barbosa - FullStack Developer</title>
          <link rel="icon" href="/static/favicon.ico" />
        </Head>

        <Header />

        <div>
          <img
            className=" mx-auto w-64"
            id="profile-photo"
            src="/static/photo.png"
            alt="Helder Barbosa photograph"
          />
        </div>

        <Summary />

        <Education />

        <h3 className="text-4xl font-bold font-sans text-center my-8 uppercase text-blue-900">
          Tech Contributions
        </h3>
        <pre className=" block flex-wrap sm:grid grid-cols-3">
          {repos.slice(0, 12).map((repo) => {
            return (
              <div
                key={repo.id}
                className=" font-sans rounded-xl border 
            bg-gray-100 p-5 mx-2 my-2 sm:mx-3 my-3 
            p-4 hover:shadow-lg"
              >
                <h3 className=" truncate italic font-bold sm:text-lg flex-nowrap hover:text-yellow-500">
                  <a href={repo.html_url}>{repo.full_name}</a>
                </h3>
                <ul>
                  <li>Language: {repo.language}</li>
                  <li>Updated : {repo.updated_at.split('T', 1)}</li>
                </ul>
              </div>
            );
          })}
        </pre>
      </div>

      <Footer />
    </div>
  );
};
export default Index;

export async function getServerSideProps(context) {
  const { repos, user } = await getUser('helder-barbosa');

  return {
    props: {
      currentDate: new Date().toString(),
      repos,
      user,
    },
  };
}
