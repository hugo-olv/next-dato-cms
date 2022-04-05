import { GraphQLClient } from 'graphql-request';
import { GET_COURSE } from '../graphql';

export default function Home() {
  return (
    <div className="">
      <h1>Home</h1>
    </div>
  )
}

export async function getStaticProps() {
  const endpoint = "https://graphql.datocms.com/";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
    }
  });
  const course = await graphQLClient.request(GET_COURSE);
  console.log(course);
  return {
    props: course
  }
}