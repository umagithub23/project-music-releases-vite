import AlbumName from "./AlbumName";
import ArtistName from "./ArtistName";
import CoverImage from "./CoverImage";
import "./Album.css";

const getArtistContents = (artists) => {
  const artistContents = artists.map((artist) => (
    <ArtistName key={artist.name} text={artist.name} url={artist.url} />
  ));

  const last = artistContents.pop();

  if (last === undefined) {
    return <></>;
  }

  if (artistContents.length === 0) {
    return last;
  }

  artistContents.push(<p key="and">and</p>);
  artistContents.push(last);

  return artistContents;
};

const Album = ({ album }) => {
  return (
    <div className="album">
      <CoverImage url={album.imageUrl} text={album.name} />
      <AlbumName text={album.name} url={album.url} />
      <section className="artistWrapper">
        {getArtistContents(album.artists)}
      </section>
    </div>
  );
};

export default Album;
