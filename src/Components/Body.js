import styled from "styled-components";

export default function BodyComponent(props) {
  return (
    <Body>
      <Columns className="builder-columns">
        <Column className="builder-column">
          <Div>
            <Div2>
              <p>Dog training made simple</p>
            </Div2>

            <Div3>
              <p>
                Start teaching new skills and redirecting unwanted behaviors
              </p>
            </Div3>

            <Span dangerouslySetInnerHTML={{ __html: "Download the App" }} />
          </Div>
        </Column>

        <Column2 className="builder-column">
          <Div4>
            <picture>
              <Image />
            </picture>

            <Imagesizer className="builder-image-sizer" />
          </Div4>
        </Column2>
      </Columns>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  margin-left: 80px;
  margin-right: 80px;
  @media (max-width: 640px) {
    margin-right: 0px;
    margin-left: 0px;
  }
`;

const Columns = styled.div`
  display: flex;
  @media (max-width: 999px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: calc(50% - 10px);
  margin-left: 0px;
  @media (max-width: 999px) {
    width: 100%;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  min-width: px;
  margin-left: auto;
  margin-right: auto;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 0px;
  text-align: left;
  line-height: normal;
  height: auto;
  font-size: 48px;
  @media (max-width: 991px) {
    text-align: center;
  }
`;

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  line-height: normal;
  height: auto;
  text-align: left;
  font-size: 24px;
  letter-spacing: -1%;
  @media (max-width: 991px) {
    text-align: center;
  }
`;

const Span = styled.span`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 0px;
  appearance: none;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 25px;
  padding-right: 25px;
  background-color: #3898ec;
  color: white;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  margin-right: auto;
  font-size: 24px;
  @media (max-width: 991px) {
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: calc(50% - 10px);
  margin-left: 20px;
  @media (max-width: 999px) {
    width: 100%;
  }
`;

const Div4 = styled.div`
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
  @media (max-width: 991px) {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    margin-top: 15px;
  }
  @media (max-width: 640px) {
    align-self: stretch;
    width: 100%;
    flex-shrink: auto;
    min-width: 0px;
    min-height: 0px;
  }
`;

const Image = styled.img`
  object-fit: cover;
  object-position: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const Imagesizer = styled.div`
  width: 100%;
  padding-top: 70.04048582995948%;
  pointer-events: none;
  font-size: 0;
`;
