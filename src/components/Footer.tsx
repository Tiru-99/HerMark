import { Send, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-black p-8 md:mt-24 mt-12 mx-4 font-sans border-2 border-pink-500">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-6 md:mb-0 md:mr-12"> {/* Moved mr-12 here */}
            <div className="flex items-center mb-4">
              <img src='/logoblack3.png' className='scale-75' alt="Logo" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <h3 className="font-bold mb-4">INFORMATION</h3>
              <ul className="space-y-2">
                <li>Privacy</li>
                <li>FAQ</li>
                <li>About Us</li>
                <li>Partners</li>    
              </ul>
            </div>
            
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a className="p-2 bg-black text-white rounded-full">
              <Send size={20} />
            </a>
            <a className="p-2 bg-black text-white rounded-full"  href="https://wa.me/971555378328?text=I%20am%20interested%20in%20the%20Premium%20Plan%20For%20HerMark.">
              <MessageCircle size={20} />
            </a>
          </div>
          <p className="text-sm  font-bold text-left">
            Phone: +971 55 537 8328<br />Address: Office 906, Park Regis, Business Bay, Dubai
          </p>
        </div>
      </div>
    </footer>
  );
}
