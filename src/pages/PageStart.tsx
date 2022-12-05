const images = ["lippen", "manikur", "maskara", "pensel", "puder"];

export const PageStart = () => {
  return (
    <div className="pageStart">
      <h2>GET MAKEUP AND GO</h2>
      <p>
        GENIAL EFFECT EVERY TIME Discover phenomenal volume, feel unique and get
        a stunning look you've never had before thanks to Lashcode products!
      </p>
      <div className="images">
        {images.map((image, i) => {
          return (
            <div className={`gallery__item--${i + 1} gallery`} key={i}>
              <img src={`/images/${image}.png`} className="galleryImg" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
