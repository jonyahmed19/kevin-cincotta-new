import profile from "../images/profile.jpg";
const ContactInfo = () => {
  // const profile = require("../images/profile.jpg");


  return (
    <div className="contact">
      <img src={profile} alt="" />
      <table>
        <tbody>
          <tr>
            <td className="label">Email:</td>
            <td>
              <a href="mailto:kevin@1ndr.com">Kevin@1NDR.com</a>
            </td>
          </tr>
          <tr>
            <td className="label">Phone:</td>
            <td>
              <a href="tel:3035697783">303.569.7783</a>
            </td>
          </tr>
          <tr>
            <td className="label">Instagram:</td>
            <td>
              <a href="https://www.instagram.com/1ndr.works">@1ndr.works</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactInfo;
