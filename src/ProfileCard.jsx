
/* eslint-disable react/prop-types */
function ProfileCard({title,handle,image,description}){
    return( 
      <div className="card" style={{minHeight:"100%"}}>
      <div className="card-image">
        <figure className="image is-1by1">
          <img
            src={image}
            alt="pda icon"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src={image}
                alt="pda fullImage"
              />
            </figure>
          </div>
          <div className="media-content mt-3">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6">{handle}</p>
          </div>
        </div>
      </div>
      <div className="content mx-3">
        {description}
      </div>
    </div>
    
    );
}

export default ProfileCard;

