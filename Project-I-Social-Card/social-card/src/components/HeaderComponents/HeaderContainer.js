import React from 'react';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import './Header.css';

function HeaderContainer() {
  return (
    <div>
      <div className="container mt-2">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-2 m-0">
            <ImageThumbnail />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-10">
            <HeaderTitle />
            <HeaderContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContainer;
