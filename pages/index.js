import Header from "@/components/Header";

export default function Home({news}) {
  console.log(news);
  return (
    <main>
      <Header />
    </main>
  );
}

export async function getServerSideProps(context) {
  const request = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9791470b6ae34ef4ad08a5cc2dfedeac"
  ).then((res) => res.json());

  return {
    props: {
      news: request,
    },
  };
}

// 9791470b6ae34ef4ad08a5cc2dfedeac
//
