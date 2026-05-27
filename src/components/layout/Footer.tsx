import Image from "next/image";
import Link from "next/link";
import FaceBookIcon from "@/assets/icons/facebook.svg";
import InstaIcon from "@/assets/icons/instagram.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import XIcon from "@/assets/icons/sns-x.svg";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 24px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    padding: 60px 40px;
  }

  @media (min-width: 1200px) {
    padding: 60px 200px;
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  @media (min-width: 768px) {
    display: contents;
  }
`;

const Copyright = styled.div`
  font-size: var(--text-13);
  color: var(--gray-400);

  @media (min-width: 768px) {
    order: 0;
  }
`;

const FooterLinks = styled.div`
  width: 154px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  order: 0;

  font-size: var(--text-13);
  color: var(--gray-600);

  @media (min-width: 768px) {
    order: 1;
  }
`;

const FooterSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
    order: 2;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinks>
        <Link href="#">Privacy Policy</Link>
        <span>·</span>
        <Link href="#">FAQ</Link>
      </FooterLinks>
      <BottomRow>
        <Copyright>@codeit-2023</Copyright>
        <FooterSocials>
          <Link href="https://www.facebook.com/">
            <Image src={FaceBookIcon} alt="페이스북" width={20} height={20} />
          </Link>
          <Link href="https://www.instagram.com/">
            <Image src={InstaIcon} alt="인스타그램" width={20} height={20} />
          </Link>
          <Link href="https://www.youtube.com/">
            <Image src={YoutubeIcon} alt="유튜브" width={20} height={20} />
          </Link>
          <Link href="https://x.com/">
            <Image src={XIcon} alt="X" width={20} height={20} />
          </Link>
        </FooterSocials>
      </BottomRow>
    </FooterWrapper>
  );
};

export default Footer;
