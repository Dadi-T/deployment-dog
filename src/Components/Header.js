import styled from "styled-components";

export default function HeaderComponent(props) {
  return (
    <Header>
      <Div>
        <Columns className="builder-columns">
          <Column className="builder-column">
            <Div2>
              <p>trainr</p>
            </Div2>
          </Column>

          <Column2 className="builder-column">
            <Div3>
              <div className="builder-columns">
                <Column3 className="builder-column">
                  <Div4>
                    <p>Sign up</p>
                  </Div4>
                </Column3>

                <Column4 className="builder-column">
                  <Div5>
                    <p>Log in</p>
                  </Div5>
                </Column4>

                <Column5 className="builder-column">
                  <Span dangerouslySetInnerHTML={{ __html: "Download app" }} />
                </Column5>
              </div>
            </Div3>
          </Column2>
        </Columns>
      </Div>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100px;
  background-color: rgba(253, 253, 253, 1);
  @media (max-width: 991px) {
    min-height: 20px;
  }
  @media (max-width: 640px) {
    min-height: 20px;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 80px;
  margin-left: 80px;
  @media (max-width: 991px) {
    display: none;
  }
  @media (max-width: 640px) {
    display: none;
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

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  line-height: normal;
  height: auto;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: auto;
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

const Div3 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
  margin-top: auto;
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: calc(33.333333333333336% - 13.333333333333334px);
  margin-left: 0px;
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
  height: auto;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
`;

const Column4 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: calc(33.333333333333336% - 13.333333333333334px);
  margin-left: 20px;
  @media (max-width: 999px) {
    width: 100%;
  }
`;

const Div5 = styled.div`
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
`;

const Column5 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: calc(33.333333333333336% - 13.333333333333334px);
  margin-left: 20px;
  @media (max-width: 999px) {
    width: 100%;
  }
`;

const Span = styled.span`
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
  @media (max-width: 991px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
