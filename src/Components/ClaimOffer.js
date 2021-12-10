export default function ClaimOffer(props) {
  return (
    <>
      <div className="claim-offer-container">
        <div className="div">
          <div className="div-2">
            <div className="div-3">
              <p>Get the first month free</p>
            </div>
            <div className="div-4">
              <p>We won’t ask for a credit card, we promise</p>
            </div>
          </div>
          <span
            dangerouslySetInnerHTML={{ __html: "Claim offer" }}
            className="span"
          />
        </div>
      </div>
      <style jsx>{`
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
        .div {
          position: relative;
          margin-top: 20px;
          display: flex;
          flex-direction: row;
        }
        @media (max-width: 640px) {
          .div {
            display: flex;
            flex-direction: column;
            align-items: stretch;
          }
        }
        .div-2 {
          margin-right: auto;
          display: flex;
          flex-direction: column;
          margin-left: 50px;
        }
        @media (max-width: 991px) {
          .div-2 {
            margin-left: 50px;
            margin-right: auto;
            display: flex;
            flex-direction: column;
          }
        }
        @media (max-width: 640px) {
          .div-2 {
            margin-left: auto;
            margin-right: auto;
          }
        }
        .div-3 {
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
          .div-3 {
            margin-right: auto;
          }
        }
        .div-4 {
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
        .span {
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
          .span {
            margin-left: auto;
            margin-right: auto;
          }
        }
        @media (max-width: 640px) {
          .span {
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
          }
        }
      `}</style>
    </>
  );
}
