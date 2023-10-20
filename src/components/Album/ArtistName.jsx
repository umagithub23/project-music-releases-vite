const ArtistName = ({ url, text }) => {
  return (
    <div className="artistName">
      <h3>
        <a href={url}>{text}</a>
      </h3>
    </div>
  );
};

export default ArtistName;
