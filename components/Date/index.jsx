import { handleDate } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

export default function Date({ date }) {
  return (
    <>
      <p className="text-sm text-gray-500">
        <span className="mr-1">
          <FontAwesomeIcon icon={faClock} />
        </span>
        {handleDate(date)}
      </p>
    </>
  );
}
