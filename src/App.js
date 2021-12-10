import * as React from "react";
import DrawerComponent from "./Components/Drawer";
export default function MyComponent(props) {
  return (
    <div className="test">
      <div className="Drawer">
        <DrawerComponent />
      </div>

      <div className="header">
        <div className="div">
          <div className="builder-columns columns">
            <div className="builder-column column">
              <div className="div-2">
                <p>trainr</p>
              </div>
            </div>

            <div className="builder-column column-2">
              <div className="div-3">
                <div className="builder-columns columns">
                  <div className="builder-column column-3">
                    <div className="div-4">
                      <p style={{ textDecoration: "underline" }}>Sign up</p>
                    </div>
                  </div>

                  <div className="builder-column column-4">
                    <div className="div-5">
                      <p style={{ textDecoration: "underline" }}>Log in</p>
                    </div>
                  </div>

                  <div className="builder-column column-5">
                    <span
                      dangerouslySetInnerHTML={{ __html: "Download app" }}
                      className="span"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="builder-columns columns">
          <div className="builder-column column">
            <div className="div-6">
              <div className="div-7">
                <p style={{ marginTop: 0, marginBottom: 0 }}>
                  Dog training made simple
                </p>
              </div>

              <div className="div-8">
                <p>
                  Start teaching new skills and redirecting unwanted behaviors
                </p>
              </div>

              <span
                dangerouslySetInnerHTML={{ __html: "Download the App" }}
                className="span-2"
              />
            </div>
          </div>

          <div className="builder-column column-6">
            <div className="div-9">
              <picture>
                <img
                  className="image"
                  src="https://i.imgur.com/S3IIWrG.png"
                  alt="Dog running"
                />
              </picture>

              <div className="builder-image-sizer image-sizer" />
            </div>
          </div>
        </div>
      </div>
      <div className="claim-offer-container">
        <div className="div-10">
          <div className="div-11">
            <div className="div-12">
              <p>Get the first month free</p>
            </div>
            <div className="div-13">
              <p>We won’t ask for a credit card, we promise</p>
            </div>
          </div>
          <span
            dangerouslySetInnerHTML={{ __html: "Claim offer" }}
            className="span-3"
          />
        </div>
      </div>
      <div className="pictures">
        <div className="builder-columns columns">
          <div className="builder-column column">
            <div className="div-14">
              <picture>
                <img
                  className="image"
                  src="https://i.imgur.com/qqN3T65.png"
                  alt="Dog holding a ball"
                />
              </picture>

              <div className="builder-image-sizer image-sizer" />
            </div>
          </div>

          <div className="builder-column column-7">
            <div className="div-15">
              <picture>
                <img
                  className="image"
                  src="https://i.imgur.com/Qg3RFR5.png"
                  alt="Dog looking at the sky"
                />
              </picture>

              <div className="builder-image-sizer image-sizer" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer"
        style={{
          marginTop: "auto",
          /* position: "absolute", width: "100%", bottom: 0 */
        }}
      >
        <div className="div-16">
          <div className="div-17">
            <p>trainr</p>
          </div>
          <div className="div-18">
            <div className="div-19">
              <p>Sign up</p>
            </div>
            <div className="div-20">
              <p>Log in</p>
            </div>
            <div className="div-21">
              <p>
                <u>Support</u>
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .test {
          background-color: #2cac66;
          display: flex;
          flex-direction: column;
          height: 100vh;
        }
        @media (max-height: 1100px) {
          .test {
            height: auto;
          }
        }
        .Drawer {
          display: none;
        }

        .header {
          display: flex;
          flex-direction: column;
          position: relative;
          min-height: 100px;
          background-color: rgba(253, 253, 253, 1);
        }
        @media (max-width: 991px) {
          .header {
            min-height: 20px;
            display: none;
          }
          .Drawer {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .header {
            min-height: 20px;
          }
        }
        .div {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: auto;
          margin-bottom: auto;
          margin-right: 80px;
          margin-left: 80px;
        }
        @media (max-width: 991px) {
          .div {
            display: none;
          }
        }
        @media (max-width: 640px) {
          .div {
            display: none;
          }
        }
        .columns {
          display: flex;
        }
        @media (max-width: 999px) {
          .columns {
            flex-direction: column;
            align-items: stretch;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(50% - 10px);
          margin-left: 0px;
        }
        @media (max-width: 999px) {
          .column {
            width: 100%;
          }
        }
        .div-2 {
          display: flex;
          flex-direction: column;
          position: relative;
          text-align: center;
          line-height: normal;
          height: auto;
          margin-top: auto;
          margin-bottom: auto;
          margin-right: auto;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(50% - 10px);
          margin-left: 20px;
        }
        @media (max-width: 999px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-3 {
          position: relative;
          display: flex;
          flex-direction: column;
          margin-bottom: auto;
          margin-top: auto;
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(33.333333333333336% - 13.333333333333334px);
          margin-left: 0px;
        }
        @media (max-width: 999px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-4 {
          display: flex;
          flex-direction: column;
          position: relative;
          text-align: center;
          line-height: normal;
          height: auto;
          margin-top: auto;
          margin-bottom: auto;
          margin-left: auto;
          margin-right: auto;
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(33.333333333333336% - 13.333333333333334px);
          margin-left: 20px;
        }
        @media (max-width: 999px) {
          .column-4 {
            width: 100%;
          }
        }
        .div-5 {
          display: flex;
          flex-direction: column;
          position: relative;
          text-align: center;
          line-height: normal;
          height: auto;
          margin-top: auto;
          margin-bottom: auto;
          margin-left: auto;
          margin-right: auto;
        }
        .column-5 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(33.333333333333336% - 13.333333333333334px);
          margin-left: 20px;
        }
        @media (max-width: 999px) {
          .column-5 {
            width: 100%;
          }
        }
        .span {
          display: flex;
          flex-direction: column;
          position: relative;
          appearance: none;
          padding-top: 15px;
          padding-bottom: 15px;
          padding-left: 0px;
          padding-right: 0px;
          background-color: rgba(16, 109, 53, 1);
          color: white;
          border-radius: 4px;
          text-align: center;
          cursor: pointer;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .span {
            margin-left: auto;
            margin-right: auto;
          }
        }
        .body {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          margin-left: 80px;
          margin-right: 80px;
        }
        @media (max-width: 640px) {
          .body {
            margin-right: 0px;
            margin-left: 0px;
          }
        }
        .div-6 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: auto;
          margin-bottom: auto;
          text-align: center;
          min-width: px;
          margin-left: auto;
          margin-right: auto;
        }
        .div-7 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 0px;
          text-align: left;
          line-height: normal;
          height: auto;
          font-size: 48px;
        }
        @media (max-width: 991px) {
          .div-7 {
            text-align: center;
          }
        }
        .div-8 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          line-height: normal;
          height: auto;
          text-align: left;
          font-size: 24px;
          letter-spacing: -1%;
        }
        @media (max-width: 991px) {
          .div-8 {
            text-align: center;
          }
        }
        .span-2 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 0px;
          appearance: none;
          padding-top: 15px;
          padding-bottom: 15px;
          padding-left: 25px;
          padding-right: 25px;
          background-color: white;
          color: black;
          border-radius: 4px;
          text-align: center;
          cursor: pointer;
          margin-right: auto;
          font-size: 24px;
        }
        @media (max-width: 991px) {
          .span-2 {
            margin-top: 15px;
            margin-bottom: 15px;
            margin-left: auto;
            margin-right: auto;
          }
        }
        .column-6 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(50% - 10px);
        }
        @media (max-width: 999px) {
          .column-6 {
            width: 100%;
          }
        }
        .div-9 {
          display: flex;
          flex-direction: column;
          position: relative;
          text-align: center;
          line-height: normal;
          overflow: hidden;
          margin-right: auto;
          width: 100%;
          align-self: stretch;
          margin-left: auto;
          height: auto;
        }
        @media (max-width: 991px) {
          .div-9 {
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            margin-top: 15px;
          }
        }
        @media (max-width: 640px) {
          .div-9 {
            align-self: stretch;
            width: 100%;
            flex-shrink: auto;
            min-width: 0px;
            min-height: 0px;
            margin-right: auto;
            margin-left: auto;
          }
        }
        .image {
          object-fit: cover;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer {
          width: 100%;
          padding-top: 70.04048582995948%;
          pointer-events: none;
          font-size: 0;
        }
        .claim-offer-container {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          height: auto;
          padding-bottom: 20px;
          background-color: rgba(16, 109, 53, 1);
          margin-right: 80px;
          margin-left: 80px;
        }
        @media (max-width: 991px) {
          .claim-offer-container {
            margin-right: 20px;
            margin-left: 20px;
          }
        }
        @media (max-width: 640px) {
          .claim-offer-container {
            margin-right: auto;
            margin-left: auto;
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 20px;
            padding-top: 20px;
          }
        }
        .div-10 {
          position: relative;
          margin-top: 20px;
          display: flex;
          flex-direction: row;
        }
        @media (max-width: 640px) {
          .div-10 {
            display: flex;
            flex-direction: column;
            align-items: stretch;
          }
        }
        .div-11 {
          margin-right: auto;
          display: flex;
          flex-direction: column;
          margin-left: 50px;
        }
        @media (max-width: 991px) {
          .div-11 {
            margin-left: 50px;
            margin-right: auto;
            display: flex;
            flex-direction: column;
          }
        }
        @media (max-width: 640px) {
          .div-11 {
            margin-left: auto;
            margin-right: auto;
          }
        }
        .div-12 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 0px;
          text-align: center;
          line-height: normal;
          height: auto;
          margin-right: auto;
          font-size: 24px;
          color: rgba(255, 255, 255, 1);
          font-weight: 600;
        }
        @media (max-width: 991px) {
          .div-12 {
            margin-right: auto;
          }
        }
        .div-13 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 10px;
          text-align: center;
          line-height: normal;
          height: auto;
          margin-right: auto;
          color: rgba(255, 255, 255, 1);
        }
        .span-3 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: auto;
          appearance: none;
          padding-top: 15px;
          padding-bottom: 15px;
          padding-left: 25px;
          padding-right: 25px;
          background-color: rgba(249, 250, 251, 1);
          color: rgba(8, 8, 8, 1);
          border-radius: 4px;
          text-align: center;
          cursor: pointer;
          margin-bottom: auto;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 991px) {
          .span-3 {
            margin-left: auto;
            margin-right: auto;
          }
        }
        @media (max-width: 640px) {
          .span-3 {
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
          }
        }
        .pictures {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          margin-left: 80px;
          margin-right: 80px;
        }
        @media (max-width: 640px) {
          .pictures {
            margin-left: 0px;
            margin-right: 0px;
          }
        }
        .div-14 {
          display: flex;
          flex-direction: column;
          position: relative;
          text-align: center;
          line-height: normal;
          overflow: hidden;
          width: 100%;
          align-self: stretch;
          flex-grow: 1;
          margin-left: auto;
          margin-right: auto;
        }
        @media (max-width: 991px) {
          .div-14 {
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            margin-top: 15px;
          }
        }
        @media (max-width: 640px) {
          .div-14 {
            width: 100%;
            display: block;
            flex-grow: 0;
            line-height: 0;
            margin-left: auto;
            margin-right: auto;
            margin-top: 0px;
            min-width: 0;
            max-height: auto;
            text-align: 0;
          }
        }
        .column-7 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(50% - 10px);
        }
        @media (max-width: 999px) {
          .column-7 {
            width: 100%;
          }
        }
        .div-15 {
          display: flex;
          flex-direction: column;
          position: relative;
          text-align: center;
          line-height: normal;
          height: auto;
          overflow: hidden;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          align-self: stretch;
        }
        @media (max-width: 991px) {
          .div-15 {
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            margin-top: 15px;
          }
        }
        @media (max-width: 640px) {
          .div-15 {
            min-width: 0px;
            width: 100%;
            margin-left: auto;
            object-position: center;
            object-fit: contain;
            align-self: stretch;
            min-height: 0px;
            margin-bottom: 0px;
            margin-right: auto;
          }
        }
        .footer {
          display: flex;
          flex-direction: column;
          position: relative;
          min-height: 80px;
          background-color: rgba(255, 255, 255, 1);
        }
        @media (max-width: 991px) {
          .footer {
            min-height: 80px;
          }
        }
        @media (max-width: 640px) {
          .footer {
            min-height: 80px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            background-color: rgba(255, 255, 255, 1);
          }
        }
        .div-16 {
          position: relative;
          margin-top: auto;
          margin-bottom: auto;
          margin-right: 80px;
          margin-left: 80px;
          display: flex;
          flex-direction: row;
        }
        @media (max-width: 640px) {
          .div-16 {
            margin-left: 0px;
            margin-right: 0px;
            display: flex;
            flex-direction: column;
            align-items: stretch;
          }
        }
        .div-17 {
          display: flex;
          flex-direction: column;
          position: relative;
          text-align: center;
          line-height: normal;
          height: auto;
          margin-top: auto;
          margin-bottom: auto;
        }
        @media (max-width: 640px) {
          .div-17 {
            margin-right: auto;
            margin-left: auto;
          }
        }
        .div-18 {
          display: flex;
          flex-direction: row;
          position: relative;
          margin-left: auto;
        }
        @media (max-width: 640px) {
          .div-18 {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            margin-left: auto;
            margin-right: auto;
          }
        }
        .div-19 {
          display: flex;
          flex-direction: column;
          position: relative;
          text-align: center;
          line-height: normal;
          height: auto;
          margin-top: auto;
          margin-bottom: auto;
          margin-left: auto;
          margin-right: 52px;
          text-decoration: underline;
        }
        @media (max-width: 640px) {
          .div-19 {
            margin-left: auto;
            margin-right: auto;
          }
        }
        .div-20 {
          display: flex;
          flex-direction: column;
          position: relative;
          text-align: center;
          line-height: normal;
          height: auto;
          margin-top: auto;
          margin-bottom: auto;
          margin-left: auto;
          margin-right: 52px;
          text-decoration: underline;
        }
        @media (max-width: 640px) {
          .div-20 {
            margin-left: auto;
            margin-right: auto;
          }
        }
        .div-21 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 0px;
          line-height: normal;
          height: auto;
          text-align: center;
          margin-right: 52px;
          margin-left: auto;
        }
        @media (max-width: 640px) {
          .div-21 {
            margin-right: auto;
            margin-left: auto;
          }
        }
      `}</style>
    </div>
  );
}
