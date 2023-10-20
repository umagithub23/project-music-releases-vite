const AlbumName = ({ text, url }) => {
  return (
    <div className="albumName">
      <h2>
        <a href={url}>{text}</a>
      </h2>
    </div>
  );
};

export default AlbumName;
