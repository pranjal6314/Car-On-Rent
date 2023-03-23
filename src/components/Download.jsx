import Img1 from "../images/download/appstore.svg";
import Img2 from "../images/download/googleapp.svg";

function Download() {
  return (
    <>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            <h2>Get the most out of our services with our app</h2>
            <p>
              Don't miss out on our app's exclusive benefits. With just a few clicks, you can access our top-quality services and products, tailored to your needs. Our user-friendly app ensures a seamless renting experience, so you can enjoy our offerings hassle-free. Join our community of satisfied customers and maximize your experience with us today.
            </p>
            <div className="download-text__btns">
              <img alt="download_img" src={Img2} />
              <img alt="download_img" src={Img1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
