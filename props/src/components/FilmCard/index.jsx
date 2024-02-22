import React from "react";
import FilmImage from "../FilmImage";
import Filmname from "../Filmname";
import FilmText from "../FilmText";

function FilmCard(props) {
  return (
    <div className="FilmCard">
      <FilmImage url={props.image} />
      <Filmname name={props.name} />
      <FilmText text={props.text} />
    </div>
  );
}

export default FilmCard;
