const AlbumName = ({ name, url }) => {
  return (
    <div className="albumName">
      <h2>
        <a href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
      </h2>
    </div>
  );
};

export default AlbumName;
