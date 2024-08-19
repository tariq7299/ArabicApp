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

export default function ContactUs() {
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

              <form action="" className="row gap-4 d-flex- justify-content-between p-6">

                <TextField label="First Name" variant="standard" className="col-12 col-lg-3" placeholder="Ahmed" />
                <TextField label="First Name" variant="standard" className="col-12 col-lg-3" />
                <TextField label="First Name" variant="standard" className="col-12 col-lg-3" />
                <TextField label="First Name" variant="standard" className="col-12 col-lg-3" />
                <TextField label="First Name" variant="standard" className="col-12 col-lg-3" />
                <TextField label="First Name" variant="standard" className="col-12 col-lg-3" />
                <TextField label="First Name" variant="standard" className="col-12 col-lg-3" />
                <TextField label="First Name" variant="standard" className="col-12 col-lg-3" />
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  // value={age}
                  // onChange={handleChange}
                  className="col-12 col-lg-3"
                  variant="standard"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>

                <RadioGroup
                  row
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  className="row d-flex justify-content-center col-12 align-items-center gap-5"
                >
                  <div className="col-5 col-lg-3" >
                    <FormControlLabel value="female" control={<Radio />} label="Feew ewemale" />
                  </div>
                  <div className="col-5 col-lg-3">
                    <FormControlLabel value="male" control={<Radio />} label="Mle" />
                  </div>
                  <div className="col-5 col-lg-3">
                    <FormControlLabel value="other" control={<Radio />} label="Othewer" />
                  </div>
                  <div className="col-5 col-lg-3">
                    <FormControlLabel value="other" control={<Radio />} label="weewewewe" />
                  </div>
                  <div className="col-5 col-lg-3">
                    <FormControlLabel value="other" control={<Radio />} label="Othewewer" />
                  </div>
                  <div className="col-5 col-lg-3">
                    <FormControlLabel value="other" control={<Radio />} label="Otewewe ewewewher" />
                  </div>
                </RadioGroup>

                <TextField label="First Name"
                  variant="standard"
                  className="col-12"
                  multiline
                  rows={3} />

                <div className="d-flex justify-content-center justify-content-lg-end col-12">

                  <MyButton
                    text="Send Message"
                    className="btn text-primary bg-secondary-2 col-auto button--medium "
                  ></MyButton>
                </div>

              </form>

            </div>

          </article>

        </Container>
      </section>
    </>
  );
}
