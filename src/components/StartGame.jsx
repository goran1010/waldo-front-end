import { useState } from "react";
import Spinner from "./Spinner";

export default function StartGame() {
  const [isFetching, setIsFetching] = useState(false);

  return (
    <form>
      <div>
        <label htmlFor="select-image">Select image: </label>{" "}
        <select name="select-image" id="select-image">
          <option value="image-1">Image 1</option>
          <option value="image-2">Image 2</option>
          <option value="image-3">Image 3</option>
        </select>
        <div>
          <button type="submit">Start the game</button>
        </div>
      </div>
      {isFetching ? <Spinner /> : <img src="" alt="Where's Waldo logo" />}
    </form>
  );
}
