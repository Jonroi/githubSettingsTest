import { useJoinClanMutation } from "@/entities/Clan";
import { toast } from "react-toastify";
import { useClientTranslation } from "@/shared/i18n";
import { useParams } from "next/navigation";

const useJoinClan = () => {

   const { lng } = useParams();
   const lng2 = lng as string;
   const { t } = useClientTranslation(lng2, "clan");
   const [joinClan] = useJoinClanMutation();


   const handleJoin = async (clan_id: string, player_id: string, join_message: string, onSuccess?: () => void) => {
      try {
         const result = await joinClan({ clan_id, player_id, join_message }).unwrap();
         toast.success(t("toast_join_success"));
         if (onSuccess) onSuccess();
      } catch (error) {
         toast.error(`${JSON.stringify(error)}`);
      }
   };

   return { handleJoin };

}

export default useJoinClan;
