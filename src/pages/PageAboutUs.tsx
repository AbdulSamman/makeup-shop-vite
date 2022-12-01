import "../styles/pages/pageAboutUs.scss";
export const PageAboutUs = () => {
  return (
    <div className="pageAboutUs">
      <section className="first">
        <div className="text">
          <h4>About us</h4>
          <p>
            Our products are created from the combination of natural Ingredients
            with the Good Vibes philosophy.
            <br /> Therefore our products are:
            <br />
            <b>Good:</b> good as the quality of the products and the effect that
            they have on people's lives.
            <br />
            <b>Simple:</b> simplifies your day to make more time and space for
            the Letting things die makes you happy.
            <br />
            <b>Naturally:</b> close to nature in every way, from the ingredients
            to the colors of the packaging.
          </p>
        </div>
        <div>
          <img src="/images/aboutUs.jpg" />
        </div>
      </section>
      <section className="second">
        <div>
          <img src="/images/aboutUs2.jpg" />
        </div>
        <div className="text">
          <h4>Was wir tun</h4>
          <p>
            Your well-being is what interests us most.
            <br /> we want to be by your side to give you a daily dose of good
            humor and to give self-love. <br /> There is a way of loving that we
            can bring to ourselves is to take care of our skin.
            <br />
            That's why well-being for our products is the result of a holistic
            Process that starts from the inside out with the <br /> dietary
            supplements and works externally with skin care, body care, and
            makeup.
          </p>
        </div>
      </section>
    </div>
  );
};
