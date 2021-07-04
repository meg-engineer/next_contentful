import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <div className="header navbar mb-2 py-5">
      <div className="container mx-auto flex justify-between">
        <div className="flex-1">
          <Link href="/">
            <a className="text-4xl font-bold hover:text-gray-500">Meg Blog</a>
          </Link>
        </div>
        <div className="pt-4 flex justify-between">
          <div>
            <a
              href="https://github.com/meg-engineer"
              className="hover:text-gray-500 mr-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/MegEngineer"
              className="hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
