import { Pictures } from "./Pictures";
import { Motivation } from "./Motivation";

export function RightSide({progress}) {

    return (
        <div className="motivation-and-pictures">
          <Motivation />
          <Pictures></Pictures>
        </div>
    )
}