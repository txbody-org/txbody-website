import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowUpRightIcon } from "lucide-react";

const SutraSDKDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} size={"lg"} className="z-20">
          READ MORE <ArrowUpRightIcon size={"18"} />
        </Button>
      </DialogTrigger>
      <DialogContent className="border-white/10">
        <DialogHeader>
          <DialogTitle>Sutra SDK</DialogTitle>
          <DialogDescription>
            The Sutra SDK is a lightweight governance toolkit designed for
            building governance-enabled dApps on Cardano. It includes essential
            components for proposal lifecycle management, identity verification,
            and voting logic, ready to integrate into your applications.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SutraSDKDialog;
