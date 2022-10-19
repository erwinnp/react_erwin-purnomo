import { gql } from '@apollo/client';

export const allPassangers = gql`
  query allPassangers {
    list_pengunjung {
      id
      nama
      umur
      jenis_kelamin
    }
  }
`;

export const pasangersById = gql`
  query passangerById($id: Int!) {
    list_pengunjung(where: { id: { _eq: $id } }) {
      id
      nama
      umur
      jenis_kelamin
    }
  }
`;
