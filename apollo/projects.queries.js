import gql from 'graphql-tag';

export const GET_PROJECTS = gql`
  query MyQuery {
    mainProjects: projects(where: { mainProject: true }) {
      appKey
      title
      id
      smallDescription
      img {
        url
        fileName
      }
      row
      column
    }
    smallProjects: projects(where: { mainProject: false, archived: false }) {
      appKey
      title
      id
      smallDescription
      img {
        url
        fileName
      }
    }
    archivedProjects: projects(where: { mainProject: false, archived: true }) {
      title
      id
      smallDescription
      projectUrl
      img {
        url
        fileName
      }
    }
  }
`;