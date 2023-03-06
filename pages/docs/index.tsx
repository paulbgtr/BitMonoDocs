import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps } from "next";
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
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
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
