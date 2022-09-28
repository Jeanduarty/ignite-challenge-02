import { GenreResponseProps } from "../App";
import { Button } from "./Button";

interface SideBarProps {
  onClick: (props: number) => void;
  selectedGenreId: number;
  genres: GenreResponseProps[]
}

export function SideBar({onClick, selectedGenreId, genres}:SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClick(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}