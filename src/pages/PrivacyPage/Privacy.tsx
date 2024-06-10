import Navigation from "../../Components/Navbar/Navbar";
import "./privacy.css";
import Footer from "../../Components/Footer/Footer";

export const Privacy = () => {
  return (
    <div>
      <Navigation />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "70%" }}>
          <div
            className="privacy_container"
            style={{ backgroundColor: "lightgray" }}
          >
            <h1 id="privacy_heading">Privacy Policy</h1>
            <br />
            <h2 className="headings">Introduction</h2>
            <br />
            <p
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              Welcome to Beat Tech Blog. We value your privacy and are committed
              to protecting your personal data. This Privacy Policy explains how
              we collect, use, and safeguard your information when you use our
              app, particularly when you log in and use our app.
            </p>
            <br />
            <h2 className="headings">Information We Collect</h2>
            <br />
            <h3
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
              }}
              className="sub_headings"
            >
              Personal Information
            </h3>
            <br />
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              When you create an account or log in to our app, we may collect
              the following personal information: <br /><br /> 
              <ul style={{ marginLeft: "20px" }}>
                <li>Name</li>
                <li>Email</li>
                <li>address</li>
                <li>Phone number</li>
                <li>Shipping address</li>
                <li>
                  Payment information (processed by third-party payment
                  processors)
                </li>
                <li>
                  Facebook profile information (e.g., profile picture, likes,
                  interests, and other public information)
                </li>
              </ul>
            </p>
            <br />
            <h3
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
              }}
              className="sub_headings"
            >
              Usage Data
            </h3>
            <br />
            <p
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              We may also collect information about how the app is accessed and
              used, including: <br /><br /> 
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  Device information (e.g., mobile device type, operating
                  system)
                </li>
                <li>IP address</li>
                <li>
                  App usage statistics * Log data (e.g., access times, pages
                  viewed, errors encountered)
                </li>
                <li>Interaction data (e.g., likes, comments, shares)</li>
              </ul>
            </p>
            <br />
            <h2 className="headings">How We Use Your Information</h2>
            <br />
            <p
              style={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              We use the information we collect for the following purposes: <br /><br /> 
              <ul style={{marginLeft: '20px'}}>
                <li>To
              provide and maintain our services: Including processing
              transactions, shipping products, and providing customer support.</li>
                <li>To improve our Facebook page and app: By analysing usage data to
              enhance user experience and functionality.</li>
                <li>To communicate with
              you: Sending updates, promotional materials, and important notices
              related to your account or transactions.</li>
                <li>To ensure security and
              prevent fraud: Protecting against unauthorised access, maintaining
              data accuracy, and ensuring the appropriate use of information.</li>
              </ul>
            </p>
            <br />
            <h3
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
              }}
              className="sub_headings"
            >
              Sharing Your Information
            </h3>
            <br />
            <p
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                flexDirection: 'column',
              }}
            >
              We do not sell, trade, or rent your personal information to third
              parties. However, we may share your data with: <br /><br /> 
              <ul style={{marginLeft: '20px'}}>
                <li>Service
              providers: Such as payment processors, shipping companies, and IT
              service providers who assist in the operation of our app.</li>
                <li>Legal
              and regulatory authorities: When required by law or to protect our
              legal rights.</li>
              </ul>
            </p>
            <br />
            <h3
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
              }}
              className="sub_headings"
            >
              Data Security
            </h3>
            <br />
            <p
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                flexDirection: 'column',
              }}
            >
              We implement a variety of security measures to maintain the safety
              of your personal information. These measures include: <br /><br /> 
              <ul style={{marginLeft: '20px'}}>
                <li>Encryption: Encrypting sensitive information during transmission.</li>
                <li>Access controls: Limiting access to your personal data to
              authorised personnel only.</li>
                <li>Regular audits: Conducting regular
              security audits and updates.</li>
              </ul>
            </p>
            <br />
            <h2 className="headings">Your Rights</h2>
            <br />
            <p
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                flexDirection: 'column',
              }}
            >
              You have the following rights regarding your personal data: <br /><br /> 
              <ul style={{marginLeft: '20px'}}>
                <li>Access: You can request a copy of the information we hold about
              you.</li>
                <li>Correction: You can request corrections to any inaccurate
              or incomplete information.</li>
                <li>Deletion: You can request the
              deletion of your personal data, subject to certain legal
              obligations.</li>
                <li>Objection: You can object to the processing of your
              data for certain purposes. To exercise any of these rights, please
              contact us at a.ndaobong@gmail.com.</li>
              </ul>
            </p>
            <br />
            <h2 className="headings">Changes to This Privacy Policy</h2>
            <br />
            <p
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                flexDirection: 'column',
              }}
            >
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              We encourage you to review this Privacy Policy periodically for
              any changes. Contact Us If you have any questions about this
              Privacy Policy, please contact us:<br /><br /> 
              <ul style={{marginLeft: '20px'}}>
                <li>Email: a.ndaobong@gmail.com</li>
                <li>Address: 28 Aya Road, GRA, Ikot Ekpene, Akwa Ibom State, Nigeria.</li>
              </ul><br />
              By using our app, you consent to this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
