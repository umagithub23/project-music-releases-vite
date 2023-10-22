const ArtistName = ({ name, url }) => {
  return (
    <div className="artistName">
      <h3>
        <a href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
      </h3>
    </div>
  );
};

export default ArtistName;
