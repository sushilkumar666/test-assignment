
import Image from 'next/image';

const Footer = () => {
  return (
    <footer >
      <div className="mx-auto py-10  bottom-0 bg-black text-white w-full max-w-screen-2xl md:px-56 px-1">
        <div>
        
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" aria-label="Instagram">
              <Image src='/icons/facebook.png' width='30' height='30' priority alt='facebook' />
            </a>
            <a href="#" aria-label="Facebook">
            <Image src='/icons/instagram.png' width='30' height='30' priority alt='instagram' />
            </a>
            <a href="#" aria-label="Twitter">
            <Image src='/icons/twitter.png' width='30' height='30' priority alt='twitter' />
            </a>
            <a href="#" aria-label="Twitch">
            <Image src='/icons/twitch.png' width='30' height='30' priority alt='twitch' />
            </a>
            <a href="#" aria-label="YouTube">
            <Image src='/icons/youtube.png' width='30' height='30' priority alt='youtube' />
            </a>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 mt-10 pl-2 md:grid-cols-4 gap-4  md:text-left">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
            <a href="#" className="hover:underline">Corporate Information</a>
          </div>
          <div className="grid grid-cols-1  pl-2 md:grid-cols-4 gap-4  md:text-left">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
            <a href="#" className="hover:underline">Corporate Information</a>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-sm">© Alley Text</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
