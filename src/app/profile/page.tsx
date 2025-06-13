import Footer from "@/components/layout/footer";
import NavigationBar from "@/components/layout/navigationbar";
import { Separator } from "@/components/ui/separator";
import { SmileIcon } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Profile() {
  return (
    <>
      <NavigationBar />
      <div className="m-18 flex flex-row">
        <div className="w-2/7 flex flex-col p-8 gap-8">
          <div className="flex flex-row gap-8 items-center">
            <div className="aspect-square flex relative rounded-full overflow-clip w-12">
              <Image
                src="https://pbmusjkkxqeayxdojbrb.supabase.co/storage/v1/object/public/khasfee/content/3.jpg"
                alt="avatar"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="flex-1 line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem architecto sequi quia molestias. Porro quis debitis
              rerum dolorem molestias autem sunt nostrum iure non, cumque ea
              totam dolore, magnam nisi.
            </div>
          </div>
          <Separator />
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>My Account</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-justify pl-8">
                <div>Profile</div>
                <div>Addresses</div>
                <div>Change Password</div>
                <div>Notification Settings</div>
                <div>Privacy Settings</div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>My Purchase</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-justify pl-8">
                <div>Profile</div>
                <div>Addresses</div>
                <div>Change Password</div>
                <div>Notification Settings</div>
                <div>Privacy Settings</div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Notifications</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-justify pl-8">
                <div>Profile</div>
                <div>Addresses</div>
                <div>Change Password</div>
                <div>Notification Settings</div>
                <div>Privacy Settings</div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>My Vouchers</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-justify pl-8">
                <div>Profile</div>
                <div>Addresses</div>
                <div>Change Password</div>
                <div>Notification Settings</div>
                <div>Privacy Settings</div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>My Khasfee Coins</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-justify pl-8">
                <div>Profile</div>
                <div>Addresses</div>
                <div>Change Password</div>
                <div>Notification Settings</div>
                <div>Privacy Settings</div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-5/7 flex flex-col p-8 gap-8 bg-gray-50 shadow-xl">
          <div>My Profile</div>
          <Separator />
          <div className="mx-8 flex flex-col gap-4">
            <div>Full Name</div>
            <div>Username</div>
            <div>Email</div>
            <div>Phone Number</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
