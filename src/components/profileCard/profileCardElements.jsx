import styled, { css } from 'styled-components';

const ProfileInfoStyles = css`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin: 5px;
`;

const OtherDetailsStyle = css`
  font-weight: bold;
  font-style: italic;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

const neumorphic = css`
  -webkit-box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
  background: linear-gradient(
    -45deg,
    rgba(0, 0, 0, 0.22),
    rgba(255, 255, 255, 0.01)
  );
`;

const ProfileInfoNeumorphic = css`
  -webkit-box-shadow: 3px 3px 10px #d3d8ec, -3px -3px 6px #a6aed1;
  box-shadow: 3px 3px 10px #d3d8ec, -3px -3px 6px #a6aed1;
  background: linear-gradient(
    -45deg,
    rgba(0, 0, 0, 0.22),
    rgba(255, 255, 255, 0.25)
  );
`;

const MoreInfoNeumorphic = css`
  -webkit-box-shadow: inset 3px 3px 5px #4e5469, inset -3px -3px 6px #a6aed1;
  box-shadow: inset 3px 3px 5px #4e5469, inset -3px -3px 6px #a6aed1;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.2),
    rgba(225, 225, 225, 0.2)
  );
`;

const DetailsNeumorphic = css`
  -webkit-box-shadow: 3px 3px 5px #353f63, -3px -3px 6px #a6aed1;
  box-shadow: 3px 3px 5px #353f63, -3px -3px 6px #a6aed1;
  background: linear-gradient(
      -90deg,
      rgba(225, 225, 225, 0),
      rgba(0, 0, 0, 0.1)
    ),
    linear-gradient(-45deg, rgba(0, 0, 0, 0.), rgba(225, 225, 225, 0.01));
`;

const OtherDetailsNeumorphic = css`
  -webkit-box-shadow: inset 3px 3px 5px #353f60, inset -3px -3px 6px #a6aed1;
  box-shadow: inset 3px 3px 5px #353f60, inset -3px -3px 6px #a6aed1;
  background: linear-gradient(
      90deg,
      rgba(164, 95, 228, 0.2),
      rgba(0, 0, 0, 0.05)
    ),
    linear-gradient(-45deg, rgba(0, 0, 0, 0.3), rgba(225, 225, 225, 1));

  @media screen and (max-width: 480px) {
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.1),
        rgba(225, 225, 225, 0.9)
      ),
      linear-gradient(-45deg, rgba(0, 0, 0, 1), rgba(225, 225, 225, 0.1));
  }
`;

export const ProfileCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0.3fr, 1fr));
  grid-auto-flow: column;
  justify-items: center;
  margin: 25px 15px;
  border-radius: 20px;
  ${neumorphic}

  @media screen and (max-width: 968px) {
    grid-auto-flow: row;
    justify-content: center;
    align-items: center;
    justify-self: center;
    width: 95%;
  }

  @media screen and (max-width: 480px) {
    display: grid;
    grid-template-rows: 0.5fr 0.4fr;
    grid-row-gap: 10px;
    align-content: center;
    justify-content: center;
    border-radius: 15px;
  }

  @media screen and (max-width: 360px) {
    width: 360px;
  }
`;

export const Infos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 10px 0;

  @media screen and (max-width: 968px) {
    grid-template-columns: repeat(2, 0.3fr);
    align-items: center;
    justify-content: center;
    align-content: center;
    justify-items: center;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
  }

  @media screen and (max-width: 360px) {
    width: 100%;
  }
`;

export const ProfileInfo = styled.div`
  margin: 10px 10px;
  padding: 0 10px;
  display: grid;
  border-radius: 20px;
  align-self: center;
  ${ProfileInfoNeumorphic}

  @media screen and (max-width: 968px) {
    width: 85%;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    align-self: center;
    justify-self: center;
  }
`;

export const ProfileUsername = styled.p`
  font-weight: bolder;
  font-size: larger;
  font-family: sans-serif;
  align-self: center;
`;

export const FullName = styled.p`
  ${ProfileInfoStyles}
  font-size: larger;
`;

export const LoginStamp = styled.p`
  font-size: small;

  @media screen and (max-width: 480px) {
    text-align: center;
    margin-left: -55px;
  }
`;

export const GenderComp = styled.p`
  ${ProfileInfoStyles}
`;

export const Phone = styled.p`
  ${ProfileInfoStyles}
  font-size: medium;
`;

export const EmailComp = styled.p`
  ${ProfileInfoStyles}
  font-size: small;
`;

export const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 20px;
  margin: 10px 10px;
  ${MoreInfoNeumorphic}

  @media screen and (max-width: 968px) {
    width: 85%;
  }

  @media screen and (max-width: 480px) {
    margin: 0 10px;
    width: 80%;
    align-self: center;
    justify-self: center;
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Lat = styled.span`
  ${OtherDetailsStyle}
  font-size: small;
`;

export const Long = styled.span`
  ${OtherDetailsStyle}
  font-size: small;
`;

export const PaymentInfo = styled.div`
  display: grid;
  width: 80%;
  margin-top: 20px;
  align-self: center;
  line-height: 10px;
`;

export const PayMethod = styled.strong`
  ${OtherDetailsStyle}
  font-size: large;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin: 35px 10px;
  padding: 5px;
  ${DetailsNeumorphic}

  @media screen and (max-width: 768px) {
    padding: 10px;
  }

  @media screen and (max-width: 480px) {
    padding: 5px;
  }
`;

export const OtherDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  border-radius: 20px;
  ${OtherDetailsNeumorphic}
  margin: 5px;

  @media screen and (max-width: 480px) {
    margin: 5px 0;
  }
`;

export const CreditCard = styled.p`
  ${OtherDetailsStyle}
  font-size: large;
`;

export const CardType = styled.p`
  ${OtherDetailsStyle}
  font-size: small;
`;

export const Domain = styled.p`
  ${OtherDetailsStyle}
  font-size: large;
`;

export const MacAdd = styled.em`
  ${OtherDetailsStyle}
  font-size: large;
`;

export const Url = styled.p`
  ${OtherDetailsStyle}
  font-size: large;
`;

export const Align = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 130px minmax(250px, 1fr);
`;
