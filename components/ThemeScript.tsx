import { THEME_STORAGE_KEY } from "@/lib/theme";

export default function ThemeScript() {
  const script = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");var d=t==="dark";document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light";}catch(e){document.documentElement.classList.remove("dark");document.documentElement.style.colorScheme="light";}})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
