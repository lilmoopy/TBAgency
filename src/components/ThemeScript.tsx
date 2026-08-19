import { DEFAULT_THEME, THEME_STORAGE_KEY, themes } from "@/lib/themes";

export default function ThemeScript() {
  const allowed = JSON.stringify(themes);
  const script = `(function(){try{var allowed=${allowed};var t=localStorage.getItem("${THEME_STORAGE_KEY}")||"${DEFAULT_THEME}";if(allowed.indexOf(t)===-1)t="${DEFAULT_THEME}";document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","${DEFAULT_THEME}")}})()`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
