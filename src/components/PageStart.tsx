const images = ["lippen", "manikur", "maskara", "pensel", "puder"];

export const PageStart = () => {
  return (
    <div className="pageStart">
      <h2>GET MAKEUP AND GO</h2>
      <p>
        GENIALER EFFEKT JEDES MAL Entdecken Sie ein phänomenales Volumen, fühlen
        Sie sich einzigartig und bekommen Sie einen umwerfenden Blick, den Sie
        so noch nie hatten, dank der Produkte von Lashcode!
      </p>
      <div className="images">
        {images.map((image, i) => {
          return (
            <div className={`gallery__item--${i + 1} gallery`} key={i}>
              <img src={`/images/${image}.png`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
