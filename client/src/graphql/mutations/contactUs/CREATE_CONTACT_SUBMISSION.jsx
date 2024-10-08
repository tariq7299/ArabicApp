import { gql } from '@apollo/client';

// Create new contact submission
export const CREATE_CONTACT_SUBMISSION = gql`
  # Submit new contact submission
  mutation CreateContactSubmission( $input: CreateContactSubmissionInput!) {
    createContactSubmission(input: $input) {
       contactSubmission {
        id
        firstName
        lastName
        email
        phone
        age
        nativeLanguage
        originCountry
        gender
        arabicLevel
        message
      }
      isSuccessfull
      responseMessage
      errors {
        field
        messages
      }
    }
  }
`;
