import twitter from "/public/icons/twitter.svg";
import github from "/public/icons/github.svg";
import mail from "/public/icons/mail.svg";
import Image from "next/image";
import Link from "next/link";
export default function Socials() {
  return (
    <div className="flex space-x-4">
      <div className="flex">
        <Link
          href="https://twitter.com/alsjourney"
          target="_blank"
          className="btn btn-primary"
        >
          <Image
            src={twitter as string}
            width={40}
            alt={"Twitter Link"}
            className="hover:opacity-50"
          />
        </Link>
      </div>

      <Link
        href="https://github.com/alsjourney"
        target="_blank"
        className="btn btn-primary"
      >
        <Image
          src={github as string}
          width={40}
          alt={"Github Link"}
          className="hover:opacity-50"
        />
      </Link>
      <Link href="mailto:alsjourneydev@hotmail.com" className="btn btn-primary">
        <Image
          src={mail as string}
          width={40}
          alt={"Email Link"}
          className="hover:opacity-50"
        />
      </Link>
    </div>
  );
}
