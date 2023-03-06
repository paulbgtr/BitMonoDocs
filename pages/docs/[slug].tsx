import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { readFileSync } from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

interface Props {
  title: string;
  content: string;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const Page = ({ title, content }: Props) => (
  <div>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>
);

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const protectionsDirectory = `${process.cwd()}/markdown/protections`;
  const filenames = readFileSync(
    `${protectionsDirectory}/protections.json`,
    "utf8"
  );

  try {
    const slugs = JSON.parse(filenames) as string[];
    const paths = slugs.map((slug) => ({ params: { slug } }));
    return { paths, fallback: false };
  } catch (error) {
    console.error(error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { slug } = params as Params;
  const fullPath = `${process.cwd()}/content/posts/${slug}.md`;
  const fileContents = readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const htmlContent = processedContent.toString();

  return {
    props: { title: data.title, content: htmlContent },
  };
};

export default Page;
