import heartIcon from "../../assets/icons/heart.svg";
import playIcon from "../../assets/icons/play.svg";
import dotsIcon from "../../assets/icons/dots.svg";

const CoverImage = ({ albumName, url }) => {
  return (
    <div className="coverImageWrapper">
      <img className="coverImage" src={url} alt={albumName} />
      <span className="iconWrapper">
        <button type="button" className="heartIcon">
          <img src={heartIcon} />
        </button>
        <button type="button" className="playIcon">
          <img src={playIcon} />
        </button>
        <button type="button" className="dotsIcon">
          <img src={dotsIcon} />
        </button>
      </span>
    </div>
  );
};

export default CoverImage;
