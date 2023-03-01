import axios from "axios";
import { useEffect, useState } from "react";
import ProfilePictureDialog from "./dialog-box/profile-picture/Dialog";
import DeleteAccountDialog from "./dialog-box/delete-account/Dialog";
import "./success.css";
import sample from "../../../images/user.png";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import Upload from "./upload-data/Upload";
import ProfilePicture from "./inputs/profile-picture/ProfilePicture";
import Name from "./inputs/name/Name";
import ContactNumber from "./inputs/contact-number/ContactNumber";
import DOB from "./inputs/dob/DOB";
import Gender from "./inputs/gender/Gender";
import Textarea from "./inputs/textarea/Textarea";

function Success() {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const token = cookies.get("jwtToken");

  // --------------------------------------
  // defining states

  const [userImage, setUserImage] = useState("");
  const [dialog, setDialog] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [uploadRequest, setUploadRequest] = useState(false);

  const [updateName, setUpdateName] = useState("");
  const [emailChange, setEmailChange] = useState("");
  const [updateNumber, setUpdateNumber] = useState("");
  const [updateDOB, setUpdateDOB] = useState("");
  const [updateMale, setUpdateMale] = useState("");
  const [updateFemale, setUpdateFemale] = useState("");
  const [updateTextarea, setUpdateTextarea] = useState("");
  const [textareaFilled, setTextareaFilled] = useState({});

  const [mainToInput, setMainToInput] = useState(false);
  const [finalValues, setFinalValues] = useState({});

  // -------------------------------------

  // -------------------------------------
  // requesting data from DB on every reload

  useEffect(() => {
    if (token) {
      axios
        .post("http://localhost:5000/upload/update", { token: token })
        .then((res) => {
          // console.log("in", res.data);
          const {
            profilePicture,
            name,
            email,
            contactNumber,
            DOB,
            gender,
            textarea,
          } = res.data;

          setUserImage(profilePicture);
          setUpdateName(name);
          setEmailChange(email);
          setUpdateNumber(contactNumber);
          setUpdateDOB(DOB);
          setUpdateMale(gender);
          setUpdateFemale(gender);
          setUpdateTextarea(textarea);
          if (textarea === "") {
            setTextareaFilled(false);
          } else {
            setTextareaFilled(true);
          }

          setFinalValues((prev) => {
            return {
              ...prev,
              profilePicture: profilePicture,
              name: name,
              contactNumber: contactNumber,
              DOB: DOB,
              gender: gender,
              textarea: textarea,
            };
          });
        });
    } else {
      navigate("/failure");
    }
    // eslint-disable-next-line
  }, []);

  // ------------------------------------------

  // -----------------------------------------
  // functions related with profile picture

  function switchDialog() {
    setDialog((prev) => {
      return !prev;
    });
  }

  function showImage(i) {
    setUserImage(i);
    setFinalValues((prev) => {
      return { ...prev, profilePicture: i };
    });
  }

  function removeImage() {
    setUserImage(sample);
    setFinalValues((prev) => {
      return { ...prev, profilePicture: "" };
    });
  }

  // -----------------------------------------

  // -------------------------------------
  // functions directly related with success page

  function saveButton() {
    if (token) {
      setUploadRequest(true);
      setMainToInput(true);
      // console.log("out", finalValues);
    } else {
      navigate("/failure");
    }
  }

  function logout() {
    cookies.remove("jwtToken");
    navigate("/");
  }

  // --------------------------------------

  return (
    <div>
      {uploadRequest && <Upload token={token} information={finalValues} />}

      <div className="body">
        <div className="main">
          <div className="left">
            <ProfilePicture
              switchDialog={switchDialog}
              userImage={userImage}
              sample={sample}
            />

            <ProfilePictureDialog
              dialog={dialog}
              switchDialog={switchDialog}
              showImage={showImage}
              delete={removeImage}
            />

            <table className="leftTable">
              <tbody>
                <tr>
                  <td className="short-list">Name : </td>
                  <td>
                    <Name
                      updateName={updateName}
                      mainToInput={mainToInput}
                      inputToMain={(f) => {
                        setMainToInput(f);
                      }}
                      nameToMain={(value) => {
                        setFinalValues((prev) => {
                          return { ...prev, name: value };
                        });
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="short-list">Email address : </td>
                  <td>{emailChange}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="right">
            <table className="rightTable">
              <tbody>
                <tr>
                  <td>Contact Number :</td>
                  <td>
                    <ContactNumber
                      updateNumber={updateNumber}
                      mainToInput={mainToInput}
                      numberToMain={(value) => {
                        setFinalValues((prev) => {
                          return { ...prev, contactNumber: value };
                        });
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Date of Birth :</td>
                  <td>
                    <DOB
                      DOBToMain={(value) => {
                        setFinalValues((prev) => {
                          return { ...prev, DOB: value };
                        });
                      }}
                      updateDOB={updateDOB}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Gender :</td>
                  <td>
                    <div className="gender">
                      <Gender
                        updateMale={updateMale}
                        updateFemale={updateFemale}
                        genderToMain={(value) => {
                          setFinalValues((prev) => {
                            return { ...prev, gender: value };
                          });
                        }}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="about-me">About me :</td>
                  <td
                    style={{
                      display: textareaFilled && "flex",
                      width: textareaFilled && "100%",
                    }}
                  >
                    <Textarea
                      textareaFilled={(value) => {
                        setTextareaFilled(value);
                      }}
                      updateTextarea={updateTextarea}
                      mainToInput={mainToInput}
                      textareaToMain={(value) => {
                        setFinalValues((prev) => {
                          return { ...prev, textarea: value };
                        });
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <button className="button-only text-primary" onClick={saveButton}>
                Save
              </button>
              <button className="button-only logout-btn" onClick={logout}>
                Log out
              </button>
            </div>
          </div>
        </div>
        <p className="delete-account" onClick={() => setVisibility(true)}>
          Delete Account
        </p>
        <DeleteAccountDialog
          show={visibility}
          onHide={() => setVisibility(false)}
        />
      </div>
    </div>
  );
}

export default Success;
