import React from 'react';
import ProfileCard from '../profileCard/profileCard';
import { Profile } from './profilesElements';

const Profiles = ({ profiles }) => {
  return (
    <>
      <Profile>
        {profiles.map((profile, id) => (
          <ProfileCard key={id} {...profile} />
        ))}
      </Profile>
    </>
  );
};

export default Profiles;
