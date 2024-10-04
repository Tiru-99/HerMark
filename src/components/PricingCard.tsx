import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

interface PricingCardProps {
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ isPopular = false }) => {
  return (
    <Card className={`overflow-hidden ${isPopular ? "border-2 border-primary relative" : ""}`}>
      {isPopular && (
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 rotate-45">
          <Badge variant="default" className="bg-primary text-primary-foreground px-6 py-1">
            Popular
          </Badge>
        </div>
      )}
      <CardHeader className="pb-8">
        <div className="space-y-2">
          <Badge variant="secondary" className="text-sm font-medium">
            Silver
          </Badge>
          <h3 className="text-2xl font-semibold">Premium Plan</h3>
        </div>
        <div className="mt-4 flex flex-col">
          <span className="text-sm text-muted-foreground">Starting from</span>
          <div className="flex items-baseline">
            <span className="text-4xl font-bold">AED</span>
            <span className="text-6xl font-bold ml-2">10,000</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <ul className="space-y-4 text-sm">
          <li className="flex items-center">
            <div className="bg-primary/10 rounded-full p-1 mr-3">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <span className="font-medium">Access to All Features</span>
          </li>
          <li className="flex items-center">
            <div className="bg-primary/10 rounded-full p-1 mr-3">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <span className="font-medium">1k lookups / per month</span>
          </li>
          <li className="flex items-center">
            <div className="bg-primary/10 rounded-full p-1 mr-3">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <span className="font-medium">10 Monitoring Quota</span>
          </li>
          <li className="flex items-center">
            <div className="bg-primary/10 rounded-full p-1 mr-3">
              <Check className="h-5 w-5 text-primary" />
            </div>
            <span className="font-medium">30K API Credits / month</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter className="pt-4">
        <a
          href="https://wa.me/+971585605980?text=I%20am%20interested%20in%20the%20Premium%20Plan%20For%20HerMark."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-black bg-yellow-200 hover:bg-yellow-300 h-12 text-lg flex items-center justify-center"
        >
          Enquire Now
        </a>
      </CardFooter>
    </Card>
  );
};

const Component: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:mt-96 mt-20">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-4xl font-bold">Simple Pricing</h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your needs
          </p>
        </div>
        <PricingCard isPopular />
      </div>
    </div>
  );
};

export default Component;
