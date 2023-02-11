import Head from "next/head";

type Props = {
  /** title of the page displayed, appear in bookmarks, search engines */
  title?: string;
  /** describe the content of the page, good for SEO */
  description?: string;
};

export const Meta = ({ title, description }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};
