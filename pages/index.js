import Body from "@/components/Body";
import Header from "@/components/Header";

export default function Home({ news }) {
  console.log(news);
  return (
    <main>
      <Header />
      <Body news={news} />
    </main>
  );
}

export async function getServerSideProps(context) {
  const request = await fetch(
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=9791470b6ae34ef4ad08a5cc2dfedeac"
  ).then((res) => res.json());

  return {
    props: {
      news: request.articles,
    },
  };
}

// 9791470b6ae34ef4ad08a5cc2dfedeac

