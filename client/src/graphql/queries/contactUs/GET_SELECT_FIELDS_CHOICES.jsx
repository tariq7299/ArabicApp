import { gql } from '@apollo/client';

// Get select input fields choices
export const GET_SELECT_FIELDS_CHOICES = gql`
  query getContactUsSelectFieldsChoices {
    contactUsSelectFieldsChoices {
      genderChoices
      countryChoices
      arabicLevelChoices
      languageChoices
    }
  }
`;
