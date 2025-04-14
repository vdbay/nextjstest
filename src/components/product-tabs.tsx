import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ProductTabs() {
  return (
    <div className="bg-black rounded-3xl p-4">
      <Tabs defaultValue="moisturizer">
        <TabsList className="grid grid-cols-3 bg-transparent mb-4">
          <TabsTrigger
            value="moisturizer"
            className="data-[state=active]:bg-[#e9c978] data-[state=active]:text-black rounded-full"
          >
            MOISTURIZER
          </TabsTrigger>
          <TabsTrigger
            value="sunscreen"
            className="data-[state=active]:bg-[#e9c978] data-[state=active]:text-black rounded-full"
          >
            SUNSCREEN
          </TabsTrigger>
          <TabsTrigger
            value="facial-wash"
            className="data-[state=active]:bg-[#e9c978] data-[state=active]:text-black rounded-full"
          >
            FACIAL WASH
          </TabsTrigger>
        </TabsList>

        <TabsContent value="moisturizer" className="text-white">
          <div className="mb-4">
            <p className="text-sm">Khaslee Skin Moisturizer</p>
            <h3 className="text-2xl font-bold">CERA PROBIOTIC</h3>
            <h4 className="text-xl font-bold">"MOISTURIZER"</h4>
            <p className="text-sm mt-2">50 ml</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <BenefitItem text="Good Regeneration" />
              <BenefitItem text="Stronger Skin Barrier" />
              <BenefitItem text="Stress Defense" />
              <BenefitItem text="Deep Penetration" />
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=200&width=100"
                alt="Cera Probiotic Moisturizer"
                width={100}
                height={200}
                className="h-[200px] object-contain"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <Button className="bg-[#e9c978] hover:bg-[#d4b76a] text-black rounded-full px-6 group">
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="sunscreen">
          <div className="h-[300px] flex items-center justify-center text-white">
            <p>Sunscreen product information</p>
          </div>
        </TabsContent>

        <TabsContent value="facial-wash">
          <div className="h-[300px] flex items-center justify-center text-white">
            <p>Facial wash product information</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 rounded-full bg-[#e9c978] flex items-center justify-center text-black text-xs">
        ✓
      </div>
      <span>{text}</span>
    </div>
  );
}
