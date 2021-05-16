import React from "react";
import Head from "next/head";

interface Props {
  /** title of the page displayed, appear in bookmarks, search engines */
  title?: string;
  /** describe the content of the page, good for SEO */
  description?: string;
}

//
const Meta: React.FC<Props> = ({ title, description }) => {
  return (
    <Head>
      <title> {title} </title>
      <meta name='description' content={description} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Movie Stan",
  description:
    "A website that can manage all of your google books and make sure it's all in one place as well as keeping you updated with latest books that might interest you",
};

export default Meta;
