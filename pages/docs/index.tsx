import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Head from "next/head";
import { remark } from "remark";
import html from "remark-html";

import Layout from "../../components/Layout";

type Props = {
  content: string;
  data: {
    [key: string]: any;
  };
};

const About = ({ content, data }: Props) => {
  return (
    <>
      <Head>
        <title>Bitmono | Getting Started</title>
        <meta
          name="description"
          content="An open-source, free protector for Mono"
        />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main>
        <Layout>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Layout>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const file = fs.readFileSync(`${process.cwd()}/markdown/about.md`, "utf8");

  const { content, data } = matter(file);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const htmlContent = processedContent.toString();

  return { props: { content: htmlContent, data } };
};

export default About;
