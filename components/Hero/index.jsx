import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-md py-5">
          <Image src="/images/yatta.png" width={150} height={150} />
          <p className="mb-5 text-sm text-gray-500">
            エンジニアライフ、技術的なアウトプットを中心に発信します。
          </p>
        </div>
      </div>
    </div>
  );
}
