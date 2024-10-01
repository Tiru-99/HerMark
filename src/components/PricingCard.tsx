import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  isPopular?: boolean
}

const PricingCard = ({ isPopular = false }: PricingCardProps) => {
  return (
    <div className={cn(
      "border rounded-lg p-6 flex flex-col md:max-w-md ",
      isPopular ? "bg-pink-200 border-pink-300" : "bg-white"
    )}>
      {isPopular && (
        <div className="text-lg font-semibold mb-2">Popular</div>
      )}
      <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full w-fit text-sm font-medium mb-4">
        Silver
      </div>
      <div className="text-2xl font-bold mb-4">
        AED<br /><span className="text-4xl">10,245</span>
      </div>
      <ul className="space-y-2 mb-6 flex-grow">
        <li className="flex items-center">
          <Check className="mr-2 h-5 w-5 text-green-500" />
          <span>Access to All Features</span>
        </li>
        <li className="flex items-center">
          <Check className="mr-2 h-5 w-5 text-green-500" />
          <span>1k lookups / per month</span>
        </li>
        <li className="flex items-center">
          <Check className="mr-2 h-5 w-5 text-green-500" />
          <span>10 Monitoring Quota</span>
        </li>
        <li className="flex items-center">
          <Check className="mr-2 h-5 w-5 text-green-500" />
          <span>30K API Credits / month</span>
        </li>
      </ul>
      <button className="w-full bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded mt-24">
        Book Now
      </button>
    </div>
  )
}

export default function Component() {
    return (
      <div className="container mx-auto px-4 py-16 md:mt-[500px] mt-1">
        <h1 className="text-4xl font-bold md:mb-36 mb-12 text-center">Pricing</h1>
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-6 md:gap-12">
          <PricingCard />
          <div className="md:-mt-16 mb-16">
            <PricingCard isPopular />
          </div>
          <PricingCard />
        </div>
      </div>
    );
  }
  
  