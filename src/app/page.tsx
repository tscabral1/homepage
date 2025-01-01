import Favorite from "@/components/Favorite";
import { BiSolidBookOpen, BiSolidKeyboard } from "react-icons/bi";
import {
  BsDiscord,
  BsFillLightningChargeFill,
  BsGithub,
  BsMicrosoftTeams,
  BsNewspaper,
  BsReddit,
  BsWhatsapp,
  BsDropbox,
} from "react-icons/bs";
import {
  FaExclamation,
  FaFileExcel,
  FaGetPocket,
  FaN,
  FaReact,
  FaSquarePollHorizontal,
  FaX,
  FaEvernote,
} from "react-icons/fa6";
import { FcSupport } from "react-icons/fc";
import { IoLogoYoutube } from "react-icons/io5";
import { PiSunHorizonBold } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import {
  SiGmail,
  SiKibana,
  SiNetflix,
  SiSvelte,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function Home() {
  return (
    <main className="bg-[#2a2a2a] h-screen pt-9 grid grid-cols-3 gap-4 px-56 justify-between">
      {/* General Favorites */}
      <div>      
        <Favorite
          url="https://docs.google.com/spreadsheets/d/1G2kIeOkdKvTIvlwt4yLxlyheYwPx8e1WMuiNJ7Ge5C8/edit?usp=sharing"
          title="Finanças"
          icon={<FaFileExcel />}
          color="text-[green]"
        />
        <Favorite
          url="https://www.youtube.com"
          title="YouTube"
          icon={<IoLogoYoutube />}
          color="text-[red]"
        />
        <Favorite
          url="https://www.gmail.com"
          title="Gmail"
          icon={<SiGmail />}
          color="text-[#DB4437]"
        />
        <Favorite
          url="https://web.whatsapp.com"
          title="Whatsapp"
          icon={<BsWhatsapp />}
          color="text-[#25d366]"
        />
        <Favorite
          url="https://discord.com/app"
          title="Discord"
          icon={<BsDiscord />}
          color="text-[#7289d9]"
        />
        <Favorite
          url="https://dropbox.com/"
          title="Dropbox"
          icon={<BsDropbox />}
          color="text-[#0060FF]"
        />
        <Favorite
          url="https://www.evernote.com/Login.action"
          title="Evernote"
          icon={<FaEvernote />}
          color="text-[#00A82D]"
        />
        <Favorite
          url="https://www.1377x.to/"
          title="1337x"
          icon={<FaX />}
          color="text-orange-700"
        />
        <Favorite
          url="https://getpocket.com/pt/saves"
          title="Pocket"
          icon={<FaGetPocket />}
          color="text-[#eb3372]"
        />
        <Favorite
          url="https://www.uol.com.br"
          title="Uol"
          icon={<BsNewspaper />}
          color="text-orange-500"
        />
        <Favorite
          url="https://monkeytype.com/"
          title="Monkey Type"
          icon={<BiSolidKeyboard />}
          color="text-[#e2b714]"
        />
        <Favorite
          url="https://www.reddit.com/r/unixporn/"
          title="Reddit"
          icon={<BsReddit />}
          color="text-[#ff581a]"
        />
        <Favorite
          url="https://www.netflix.com"
          title="Netflix"
          icon={<SiNetflix />}
          color="text-[#e50914]"
        />
        <Favorite
          url="https://chat.openai.com/"
          title="Chat GPT"
          icon={<BsFillLightningChargeFill />}
          color="text-[#159a7d]"
        />
      </div>

      {/* Work Favorites */}
      <div>
        <Favorite
          url="https://teams.microsoft.com"
          title="Teams"
          icon={<BsMicrosoftTeams />}
          color="text-[#7B83EB]"
        />
        <Favorite
          url="https://rhwponto.teleperformance.com.br/webponto/default.asp"
          title="RHWPonto"
          icon={<FaSquarePollHorizontal />}
          color="text-[#808080]"
        />
        <Favorite
          url="https://reports.llsapi.com/partner/app/kibana#"
          title="Kibana"
          icon={<SiKibana />}
          color="text-[#e8488b]"
        />
        <Favorite
          url="https://minhaescala.teleperformance.com.br/web/guest"
          title="Total View"
          icon={<FaN />}
          color="text-sky-500"
        />
        <Favorite
          url="https://docs.google.com/spreadsheets/d/1Wk0T8A4YC2DsKm1GBLhGLtxcdBIVx3Cfzp-J9KS0aJs/edit#gid=90191052"
          title="Liderança"
          icon={<FaFileExcel />}
          color="text-[green]"
        />
        <Favorite
          url="https://support.teleperformance.com"
          title="Support"
          icon={<FcSupport />}
          color="text-[purple]"
        />
        <Favorite
          url="https://mytp.ontp.app/"
          title="MyTP"
          icon={<BiSolidBookOpen />}
          color="text-[purple]"
        />
        <Favorite
          url="https://totemrhexpress.teleperformance.com.br/tpctotemrh/Login/Index?Origem=INTRANET"
          title="Totem"
          icon={<FaExclamation />}
          color="text-[yellow]"
        />
        <Favorite
          url="https://tp4you.teleperformance.com.br"
          title="TP4You"
          icon={<RxAvatar />}
          color="text-[pink]"
        />
        <Favorite
          url="https://workday.languageline.com"
          title="Workday"
          icon={<PiSunHorizonBold />}
          color="text-[yellow]"
        />
      </div>

      {/* Dev Favorites */}
      <div>
        <Favorite
          url="https://github.com"
          title="Github"
          icon={<BsGithub />}
          color="text-[white]"
        />
        <Favorite
          url="https://vercel.com/dashboard"
          title="Vercel"
          icon={<SiVercel />}
          color="text-[white]"
        />
        <Favorite
          url="https://react.dev/learn"
          title="React Docs"
          icon={<FaReact />}
          color="text-[#61dbfb]"
        />
        <Favorite
          url="https://nextjs.org/docs"
          title="Next Docs"
          icon={<TbBrandNextjs />}
          color="text-[white]"
        />
        <Favorite
          url="https://kit.svelte.dev/docs/introduction"
          title="Sveltekit Docs"
          icon={<SiSvelte />}
          color="text-orange-700"
        />
        <Favorite
          url="https://tailwindcss.com/docs/installation"
          title="Tailwind Docs"
          icon={<SiTailwindcss />}
          color="text-[#0677a9]"
        />
      </div>
    </main>
  );
}
