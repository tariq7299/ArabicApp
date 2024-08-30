import Container from "react-bootstrap/esm/Container";
import MyTitle from "../components/common/MyTitle";
import SectionMeta from "../components/common/SectionMeta";
import { FaFacebookMessenger } from "react-icons/fa6";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {
  FaFacebook,
  FaSquareXTwitter,
  FaSquareInstagram,
  FaHeadset,
  FaEnvelopeOpen,
  FaLocationDot,
} from "react-icons/fa6";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MyButton from "../components/common/MyButton";
import InputLabel from '@mui/material/InputLabel';
import { useForm, Controller } from 'react-hook-form';
import { gql, useMutation, useQuery } from '@apollo/client';
import { handleResponseNotification } from "../helper/helperFunctions";
import { GET_SELECT_FIELDS_CHOICES } from "../graphql/queries/contactUs/GET_SELECT_FIELDS_CHOICES";
import { CREATE_CONTACT_SUBMISSION } from "../graphql/mutations/contactUs/CREATE_CONTACT_SUBMISSION";



export default function ContactUs() {


  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { touchedFields, dirtyFields, errors, isDirty, isValid },
    control
  } = useForm()

  //   function returnOnlyTouchedFieldsVals(fieldsVals, touchedFields) {
  //     const touchedFieldsss = Object.keys(fieldsVals).reduce((acc, key) => {
  //         if (touchedFields[key]) {
  //             acc[key] = fieldsVals[key];
  //         }
  //         return acc;
  //     }, {});
  //     console.log()
  //     return touchedFieldsss
  // }

  function areAllFieldsEmpty(data) {
    const areAllFiledsareEmpty = Object.values(data).every((value) => value === '' || value === undefined || value === null);
    console.log("areAllFiledsareEmpty", areAllFiledsareEmpty)
    return areAllFiledsareEmpty
  }

  function isSubmitButtonDisabled() {
    // const formValues = getValues();
    console.log("dirtyFields", dirtyFields)
    console.log("areAllFieldsEmpty(dirtyFields", areAllFieldsEmpty(dirtyFields))
    console.log("isValid", isValid)
    console.log("isDirty", isDirty)
    // const changedFields = this.returnOnlyTouchedFieldsVals(formValues, dirtyFields);
    const value = !isDirty || areAllFieldsEmpty(dirtyFields);
    // const value = !isDirty || !isValid || areAllFieldsEmpty(dirtyFields);
    console.log("value", value)
    return value;
  }


  // function isSubmitButtonDisabled() {
  //   // If all fields is valid and contains content
  //   // If fields got dirty
  //   const watchFields = watch()
  //   console.log("dirtyFields", dirtyFields)
  //   const isAnyFieldFilled = Object.values(watchFields).some(
  //     field => field?.fieldValue && (typeof field.fieldValue === 'string' && field.fieldValue?.trim()) !== ""
  //   );
  //   return isAnyFieldFilled
  // }

  // useEffect(() => {
  //   const isAnyFieldFilled = Object.values(watchFields).some(
  //     field => field?.fieldValue && (typeof field.fieldValue === 'string' && field.fieldValue?.trim()) !== ""
  //   );
  //   setIsSubmitEnabled(isAnyFieldFilled);
  // }, [watchFields]);


  const { loading: loadingChoices, error: errorFetchingChoices, data: selectFieldsChoices } = useQuery(GET_SELECT_FIELDS_CHOICES);

  const [submitContactSubmission, { loading: submitting }] = useMutation(CREATE_CONTACT_SUBMISSION);

  if (loadingChoices) return <p>Loading...</p>;

  const { genderChoices, countryChoices, arabicLevelChoices, languageChoices } = selectFieldsChoices.contactUsSelectFieldsChoices;


  const handleNewContactSubmission = async (data) => {

    console.log("data", data)


    // const parsedData = {
    //   ...data,
    //   age: data.age === '' ? 0 : parseInt(data.age, 10)
    // };

    try {
      const response = await submitContactSubmission({ variables: { input: { ...data } } });

      console.log("response", response)

      handleResponseNotification(response)

    } catch (err) {
      console.log("err", err)

    }

  }

  return (
    <>
      <section className="contact-us-page__section mt-7 py-4 py-lg-9 ">

        <Container fluid className="p-3 px-lg-6">

          <div className="contact-us-page-title px-5 py-5">

            <MyTitle
              text="Contact Us"
              className="display-4 text-primary text-center px-6  "
            ></MyTitle>
            <SectionMeta className="fs-5 text-primary pb-4 text-center ">
              Any question or remarks? Just write us a message!
            </SectionMeta>

          </div>

          <article className="row">

            <div className="col-12 col-lg-5 bg-primary text-center text-lg-start p-6 contact-us-page__contact-info-wrapper">

              <h2 className="text-secondary-2 fw-bold fs-1">Contact information</h2>
              <p className="text-secondary-1 pb-4 fs-6 ">
                {" "}
                We will be happy to receive your message!
              </p>

              <div className="row d-flex gap-5 gap-lg-6  contact-us-page__contact-info">

                <div className="col-12 row mx-auto p-0">

                  <div className="col-12 col-lg-auto d-flex justify-content-center justify-content-lg-start align-items-center pb-3 p-lg-0 pe-lg-5">
                    <FaHeadset className="icon--medium text-secondary-1 " />
                  </div>{" "}

                  <p className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start   text-secondary-1 text-center text-lg-start align-items-center p-lg-0 ">
                    0201099133377
                  </p>

                </div>


                <div className="col-12 row mx-auto p-0">

                  <div className="col-12 col-lg-auto d-flex justify-content-center justify-content-lg-start align-items-center pb-3 p-lg-0 pe-lg-5">
                    <FaEnvelopeOpen className="icon--medium text-secondary-1  text-center text-lg-start " />
                  </div>{" "}
                  <p className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start   text-secondary-1 text-center text-lg-start align-items-center  p-lg-0 ">
                    tr.sar77an78@gmail.com
                  </p>
                </div>

                <div className="col-12 row mx-auto p-0">

                  <div className="col-12 col-lg-auto d-flex justify-content-center justify-content-lg-start align-items-center pb-3 p-lg-0 pe-lg-5">
                    {" "}
                    <FaLocationDot className="icon--medium text-secondary-1 " />
                  </div>{" "}
                  <p className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start   text-secondary-1 text-center text-lg-start align-items-center p-lg-0 ">
                    25 9th District, Ismael Wahbi, Nasr City, Cairo, Egypt
                  </p>
                </div>

              </div>

              <div className="text-center d-flex gap-5 justify-content-center justify-content-lg-start pt-6">
                <FaFacebookMessenger className="icon--big text-secondary-2 " />
                <FaFacebook className="icon--big text-secondary-2" />
                <FaSquareXTwitter className="icon--big text-secondary-2" />
                <FaSquareInstagram className="icon--big text-secondary-2" />
              </div>

            </div>

            <div className="col-12 col-lg-7 bg-secondary-1 contact-us-page__inputs">

              <form onSubmit={handleSubmit(handleNewContactSubmission)} className="row d-flex- justify-content-lg-center p-lg-6 p-3 gap-3 ">

                <div className="row d-flex   justify-content-between p-0">

                  <div className="col-12 col-lg-4 py-5 pe-xl-4 max-400 mx-auto mx-lg-0 ">
                    <Controller
                      name="firstName"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField
                          type="text"
                          {...field}
                          label="First Name" variant="standard" placeholder="Ahmed" fullWidth
                        />
                      )}
                    />


                  </div>

                  <div className="col-12 col-lg-4 py-5 pe-xl-4 max-400 mx-auto  mx-lg-0">

                    <Controller
                      name="lastName"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField type="text" {...field} label="Last Name" variant="standard" placeholder="Mostafa..." fullWidth />
                      )}
                    />
                  </div>

                  <div className="col-12 col-lg-4 py-5 pe-xl-4 max-400 mx-auto mx-lg-0">
                    <Controller
                      name="email"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField {...field} type="email" label="Email" variant="standard" placeholder="tr.sar77an78@gmail.com.." fullWidth />
                      )}
                    />
                  </div>

                  <div className="col-12 col-lg-4 py-5 pe-xl-4 max-400 mx-auto mx-lg-0">
                    <Controller
                      name="phone"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField {...field} type="text" label="Phone Number" variant="standard" placeholder="01099133377.." fullWidth />
                      )}
                    />
                  </div>

                  <div className="col-12 col-lg-4 py-5 pe-xl-4 max-400 mx-auto mx-lg-0 ">
                    <Controller
                      name="age"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: true,
                        valueAsNumber: true,
                        min: {
                          value: 7,
                          message: "Age must be at least 7."
                        },
                        max: {
                          value: 120,
                          message: "Age must be less than 120."
                        }
                      }}
                      render={({ field }) => (

                        <TextField {...field} onChange={(e) => field.onChange(parseInt(e.target.value, 10) || "")}
                          onSubmit={(e) => field.onSubmit(parseInt(e.target.value, 10) || 0)}
                          type="text" label="Age" variant="standard" placeholder="24.." fullWidth />
                      )}
                    />
                  </div>
                  {/* <h1>{errors?.age?.message}</h1> */}

                  <div className="col-12 col-lg-4 py-4 pe-xl-4 max-400 mx-auto mx-lg-0 ">

                    <InputLabel htmlFor="nativeLanguage" id="nativeLanguage-label">Native Language</InputLabel>
                    <Controller
                      name="nativeLanguage"
                      control={control}
                      defaultValue={languageChoices[0][0]}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          id="nativeLanguage"
                          aria-labelledby="nativeLanguage-label"
                          fullWidth
                          variant="standard"
                        >
                          {languageChoices?.map(([value, label]) => (
                            <MenuItem key={value} value={value}>{label}</MenuItem>
                          ))}
                        </Select>
                      )}
                    />

                  </div>

                  <div className="col-12 col-lg-5 py-4 pe-xl-4 max-400 mx-auto  mx-lg-0">
                    <InputLabel htmlFor="originCountry" id="originCountry-label">Origin Country</InputLabel>
                    <Controller
                      name="originCountry"
                      control={control}
                      defaultValue={countryChoices[0][0]}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          id="originCountry"
                          aria-labelledby="originCountry-label"
                          fullWidth
                          variant="standard"
                        >
                          {countryChoices?.map(([value, label]) => (
                            <MenuItem key={value} value={value}>{label}</MenuItem>
                          ))}
                        </Select>
                      )}
                    />
                  </div>

                  <div className="col-12 col-lg-5 py-4 pe-xl-4 max-400 mx-auto  mx-lg-0">
                    <InputLabel htmlFor="gender" id="gender-label">Gender</InputLabel>
                    <Controller
                      name="gender"
                      control={control}
                      defaultValue={genderChoices[0][0]}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          id="gender"
                          aria-labelledby="gender-label"
                          fullWidth
                          variant="standard"
                          className=""
                        >
                          {genderChoices?.map(([value, label]) => (
                            <MenuItem key={value} value={value}>{label}</MenuItem>
                          ))}
                        </Select>
                      )}
                    />

                  </div>
                </div>



                <FormControl className="row col-9 col-lg-12 py-5  mx-auto ">

                  <Controller
                    name="arabicLevel"
                    control={control}
                    defaultValue={arabicLevelChoices[0][0]}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <>
                        <FormLabel id="arabic-level-label" className="py-3">Arabic Level</FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="arabic-level-label"
                          // defaultValue={arabicLevelChoices[0][0]}
                          name="radio-buttons-group"
                          className="row d-flex justify-content-center col-12 align-items-center gap-4 gap-lg-0"
                          {...field}
                        >
                          {arabicLevelChoices?.map(([value, label]) => (
                            <div key={value} className="col-5 col-xl-3 col-lg-4 p-0" >
                              <FormControlLabel value={value} control={<Radio />} label={label} />
                            </div>
                          ))}
                        </RadioGroup>
                      </>

                    )}
                  />
                </FormControl>

                <div className="col-12">
                  <Controller
                    name="message"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField {...field} type="text" label="Message"
                        variant="standard"
                        multiline
                        fullWidth
                        placeholder="Write your message.."
                        rows={3} />
                    )}
                  />
                </div>

                <div className="d-flex justify-content-center justify-content-lg-end col-12 py-5 pt-lg-7">
                  <MyButton
                    type="submit"
                    isDisabled={isSubmitButtonDisabled()}
                    text={submitting ? "Submitting..." : "Send Message"}
                    className="btn text-primary bg-secondary-2 col-auto button--medium "
                  ></MyButton>
                </div>

              </form>

            </div>

          </article>

        </Container >
      </section >
    </>
  );
}
