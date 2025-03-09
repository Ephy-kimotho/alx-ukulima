import { FaUserCircle } from "react-icons/fa";
import { quicksand } from "@/fonts";
import { Power } from "lucide-react";
import Button from "@/components/common/Button";
import withAuth from "@/hoc/withAuth";

function Profile() {
  //TODO: Write function to log the user out
  const signOut = () => {
    console.log("Logged out");
  };

  return (
    <section
      className={`${quicksand.className} relative bg-[#F0F0F0] min-h-screen flex flex-col items-center py-6`}
    >
      <div className="space-y-5">
        <FaUserCircle className="size-32 md:size-40 mx-auto text-night" />
        <p className="text-night text-2xl md:text-3xl font-bold">
          Hello John Doe.
        </p>
      </div>
      <div className="text-black space-y-4 w-[80%] max-w-sm  text-lg mt-5 ">
        <p className="border-b-2 border-b-night py-2">
          <span className="font-bold">Full Name: </span> John Doe
        </p>
        <p className="border-b-2 border-b-night py-2">
          <span className="font-bold">Email: </span> john@yahoo.com
        </p>
        <p className="border-b-2 border-b-night py-2">
          <span className="font-bold">Phone: </span> 0100599654
        </p>
      </div>

      <div className="absolute bottom-10">
        <Button
          action={signOut}
          moreStyles="flex items-center py-4 justify-center text-lg font-bold rounded-xl gap-2 w-52 bg-moss-green tracking-wider hover:scale-105 cursor-pointer active:scale-95 text-white"
        >
          <Power />
          <span className="text-white">Log out</span>
        </Button>
      </div>
    </section>
  );
}

export default withAuth(Profile);
