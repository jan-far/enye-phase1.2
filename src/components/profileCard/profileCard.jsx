import React from 'react';
import {
  CardType,
  CreditCard,
  Domain,
  EmailComp,
  FullName,
  GenderComp,
  LoginStamp,
  Location,
  MacAdd,
  OtherDetails,
  Phone,
  ProfileCardContainer,
  PaymentInfo,
  PayMethod,
  ProfileInfo,
  ProfileUsername,
  Url,
  Lat,
  Long,
  Align,
  Infos,
  MoreInfo,
  Details
} from './profileCardElements';

const ProfileCard = ({
  FirstName,
  LastName,
  Email,
  Gender,
  LastLogin,
  Longitude,
  Latitude,
  MacAddress,
  PaymentMethod,
  PhoneNumber,
  URL,
  UserName,
  CreditCardNumber,
  CreditCardType,
  DomainName,
}) => {
  return (
    <>
      <ProfileCardContainer>
        <Infos>
          <ProfileInfo>
            <Align>
              USERNAME: &nbsp;<ProfileUsername>{UserName}</ProfileUsername>
            </Align>
            <Align>
              Full Name: &nbsp;
              <FullName>
                {LastName} {FirstName}
              </FullName>
            </Align>
            <Align>
              Gender: &nbsp; <GenderComp>{Gender}</GenderComp>
            </Align>
            <Align>
              Email: &nbsp;<EmailComp>{Email}</EmailComp>{' '}
            </Align>
            <Align>
              Phone Number: &nbsp; <Phone>{PhoneNumber}</Phone>
            </Align>
            <LoginStamp>last login: {LastLogin}</LoginStamp>
          </ProfileInfo>
          <MoreInfo>
            <Location>
              Location: &nbsp;
              <Lat>lat ({Latitude})</Lat> &nbsp; <Long>long ({Longitude})</Long>
            </Location>
            <p style={{ marginBottom: '-5px' }}>Payment Informations </p>
            <PaymentInfo>
              <Align>
                Payment Method: <PayMethod>{PaymentMethod}</PayMethod>
              </Align>
              <Align>
                Card Number: <CreditCard>{CreditCardNumber}</CreditCard>
              </Align>
              <Align>
                Card Type: <CardType>{CreditCardType}</CardType>{' '}
              </Align>
            </PaymentInfo>
          </MoreInfo>
        </Infos>
        <Details>
          <OtherDetails>
          <div
            style={{
              fontWeight: 'bolder',
              fontSize: 'larger',
              color: 'white',
              marginTop: '5px',
            }}
          >
            Other Details
          </div>
          <Align>
            Domain: <Domain>{DomainName}</Domain>
          </Align>
          <Align>
            MacAddress: <MacAdd>{MacAddress}</MacAdd>
          </Align>
          <Align>
            URL: <Url>{URL}</Url>
          </Align>
        </OtherDetails>
        </Details>
        </ProfileCardContainer>
    </>
  );
};

export default ProfileCard;
