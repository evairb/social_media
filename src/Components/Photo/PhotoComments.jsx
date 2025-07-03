import React from 'react';
import UserContext from '../../UserContext';
import PhotoCommentsForms from './PhotoCommentsForms';

const PhotoComments = props => {
  const { login } = React.useContext(UserContext);
  return <div>{login && <PhotoCommentsForms id={props.id} />}</div>;
};

export default PhotoComments;
