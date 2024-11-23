import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      {/* Meta Tags for SEO */}
      <Head>
        <title>My Awesome App</title>
        <meta name="description" content="This is an awesome app built with Next.js" />
        <meta property="og:title" content="My Awesome App" />
        <meta property="og:description" content="Explore the amazing features of My Awesome App." />
        <meta property="og:image" content="/images/preview.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Main Content */}
      <main>
        <h1>Welcome to My Awesome App</h1>
        <p>Start exploring the amazing features!</p>
      </main>
    </>
  );
};

export default HomePage;
