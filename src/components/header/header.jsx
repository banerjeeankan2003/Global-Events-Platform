import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
        <Link href="/">
          <Image alt="logo" src={'/images/icon.png'} width={50} height={50} />
        </Link>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title">Discover Events Around the World</p>
      </div>
    </header>
  );
};