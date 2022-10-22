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

export const deletePassanger = gql`
  mutation deletePassanger($id: Int = 10) {
    delete_list_pengunjung_by_pk(id: $id) {
      id
    }
  }
`;

export const addPassanger = gql`
  mutation addPassanger(
    $jenis_kelamin: String = ""
    $nama: String = ""
    $umur: Int!
  ) {
    insert_list_pengunjung(
      objects: { nama: $nama, umur: $umur, jenis_kelamin: $jenis_kelamin }
    ) {
      returning {
        id
      }
    }
  }
`;

export const updateDataPassanger = gql`
  mutation updatePassanger(
    $id: Int!
    $nama: String = ""
    $umur: Int!
    $jenis_kelamin: String = ""
  ) {
    update_list_pengunjung_by_pk(
      pk_columns: { id: $id }
      _set: { nama: $nama, umur: $umur, jenis_kelamin: $jenis_kelamin }
    ) {
      id
      nama
      umur
      jenis_kelamin
    }
  }
`;
