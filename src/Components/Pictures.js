export default function Pictures(props) {
  return (
    <>
      <div className="columns">
        <div className="builder-columns columns-2">
          <div className="builder-column column">
            <div className="div">
              <picture>
                <img className="image" />
              </picture>

              <div className="builder-image-sizer image-sizer" />
            </div>
          </div>

          <div className="builder-column column-2">
            <div className="div-2">
              <picture>
                <img className="image" />
              </picture>

              <div className="builder-image-sizer image-sizer" />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .columns {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          margin-right: 80px;
          margin-left: 80px;
        }
        .columns-2 {
          display: flex;
        }
        @media (max-width: 999px) {
          .columns-2 {
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
        .div {
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
          .div {
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            margin-top: 15px;
          }
        }
        @media (max-width: 640px) {
          .div {
            width: 100%;
            display: block;
            flex-grow: 0;
            line-height: 0;
            margin-left: 0;
            margin-right: 0;
            margin-top: 0px;
            min-width: 0;
            max-height: auto;
            text-align: 0;
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
        .div-2 {
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
          .div-2 {
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            margin-top: 15px;
          }
        }
        @media (max-width: 640px) {
          .div-2 {
            min-width: 0px;
            width: 100%;
            margin-left: auto;
            object-position: center;
            object-fit: contain;
            align-self: stretch;
            min-height: 0px;
            margin-bottom: 0px;
          }
        }
      `}</style>
    </>
  );
}
