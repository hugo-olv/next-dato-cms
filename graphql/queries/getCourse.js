import { gql } from 'graphql-request';

export const GET_COURSE = gql`
query {
  course {
    id
    name
    slug
    courseDetails {
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
}`