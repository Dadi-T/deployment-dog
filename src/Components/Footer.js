import styled from "styled-components";

export default function FooterComponent(props) {
  return (
    <Footer>
      <Div>
        <Div2>
          <p>trainr</p>
        </Div2>
        <Div3>
          <Div4>
            <p>Sign up</p>
          </Div4>
          <Div5>
            <p>Log in</p>
          </Div5>
          <Div6>
            <p>
              <u>Support</u>
            </p>
          </Div6>
        </Div3>
      </Div>
    </Footer>
  );
}

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 80px;
  background-color: rgba(255, 255, 255, 1);
  @media (max-width: 991px) {
    min-height: 80px;
  }
  @media (max-width: 640px) {
    min-height: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: rgba(255, 255, 255, 1);
  }
`;

const Div = styled.div`
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 80px;
  margin-left: 80px;
  display: flex;
  flex-direction: row;
  @media (max-width: 640px) {
    margin-left: 0px;
    margin-right: 0px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
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
  @media (max-width: 640px) {
    margin-right: auto;
    margin-left: auto;
  }
`;

const Div3 = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-left: auto;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-left: auto;
    margin-right: auto;
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
  margin-right: 52px;
  text-decoration: underline;
  @media (max-width: 640px) {
    margin-left: auto;
    margin-right: auto;
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
  margin-right: 52px;
  text-decoration: underline;
  @media (max-width: 640px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const Div6 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 0px;
  line-height: normal;
  height: auto;
  text-align: center;
  margin-right: 52px;
  margin-left: auto;
  @media (max-width: 640px) {
    margin-right: auto;
    margin-left: auto;
  }
`;
