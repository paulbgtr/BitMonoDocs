import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { remark } from "remark";
import html from "remark-html";

import Layout from "../../../components/Layout";

type Props = {
  content: string;
};

const Protection = ({ content }: Props) => {
  return (
    <>
      <Head>
        <title>Bitmono | Protections</title>
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const protectionName = params?.protectionName;
  const markdownWithMetadata = fs

    .readFileSync(`${process.cwd()}/markdown/protections/${protectionName}.md`)

    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  const content = await remark()
    .use(html)
    .process(parsedMarkdown.content);

  const htmlString = content.toString();

  return {
    props: {
      content: htmlString,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(`${process.cwd()}/markdown/protections`);

  const paths = files.map((filename) => ({
    params: {
      protectionName: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Protection;
