import Link from "next/link";
import FaceBookIcon from "@/assets/icons/facebook.svg";
import InstaIcon from "@/assets/icons/instagram.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import XIcon from "@/assets/icons/sns-x.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 w-full items-center justify-center px-6 py-[30px] bg-white md:flex-row md:justify-between md:self-stretch md:px-10 md:py-[60px] lg:px-[200px]">
      <div className="w-[154px] flex justify-between items-center order-0 text-13-medium text-gray-600 md:order-1">
        <Link href="#">Privacy Policy</Link>
        <span>·</span>
        <Link href="#">FAQ</Link>
      </div>
      <div className="flex justify-between items-center self-stretch md:contents">
        <div className="text-13-medium text-gray-400 md:order-0">
          @codeit-2023
        </div>
        <div className="flex items-center gap-4 md:order-2">
          <Link href="https://www.facebook.com/">
            <FaceBookIcon width={20} height={20} aria-label="페이스북" />
          </Link>
          <Link href="https://www.instagram.com/">
            <InstaIcon width={20} height={20} aria-label="인스타그램" />
          </Link>
          <Link href="https://www.youtube.com/">
            <YoutubeIcon width={20} height={20} aria-label="유튜브" />
          </Link>
          <Link href="https://x.com/">
            <XIcon width={20} height={20} aria-label="X" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
