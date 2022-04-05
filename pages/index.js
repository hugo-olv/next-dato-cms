import {gql, GraphQLClient} from 'graphql-request';

export default function Home() {
  return (
    <div className="">
      <h1>Home</h1>
    </div>
  )
}

const query = gql`
query {
  course {
    id
    name
    slug
    courseDetail {
      ... on CourseHeaderRecord {
        __typename
        bigTitle
        smallTitle
        buttonText
        description
        id
      }
    }
  }
}
`;