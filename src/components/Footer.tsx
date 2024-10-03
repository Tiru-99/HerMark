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
                <li>Shipping and payment</li>
                <li>Partners</li>
                <li>Blog</li>
                <li>Contacts</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">MENU</h3>
              <ul className="space-y-2">
                <li>For a couple</li>
                <li>For him</li>
                <li>For her</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <button className="p-2 bg-black text-white rounded-full">
              <Send size={20} />
            </button>
            <button className="p-2 bg-black text-white rounded-full">
              <MessageCircle size={20} />
            </button>
          </div>
          <p className="text-sm text-right">
            1901 Thornridge Cir. Shiloh,<br />Hawaii 81063
          </p>
        </div>
      </div>
    </footer>
  );
}
