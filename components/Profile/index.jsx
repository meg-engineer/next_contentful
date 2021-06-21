import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Profile() {
  return (
    <div className="p-4 border-t border-b md:border md:rounded">
      <div className="flex py-2">
        <img
          src="/images/me.png"
          className="h-10 w-10 rounded-full mr-2 object-cover"
        />
        <div>
          <p className="font-semibold text-gray-700">Megumi Tanimoto</p>
          <p className="font-semibold text-gray-600 text-xs">Editor</p>
        </div>
      </div>
      <p className="text-gray-500 py-3 text-sm">
        フロントエンドエンジニア１年目。
        <br />
        エンジニアライフ、技術的なアウトプットを中心に発信します。
      </p>
      <div className="text-center">
        <button className="btn btn-primary mr-3">
          <a
            href="https://github.com/meg-engineer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </button>
        <button className="btn btn-info mr-3">
          <a
            href="https://github.com/meg-engineer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </button>
      </div>
    </div>
  );
}
