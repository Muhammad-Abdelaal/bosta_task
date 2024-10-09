import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../../Store/Context";
import { useTranslation } from "react-i18next";


function UrlLanguageHelper  ()  {
    const ctx = useContext(Context);
    const navigate = useNavigate()
    const {i18n} = useTranslation();

    const supportedLangs = Object.keys(i18n.options.resources);
    const switchLang = ctx.functions.changeLangState;
    const path = location.pathname;
    const langPrefix = path.split('/')[1];

    useEffect(() => {
        if (langPrefix && i18n.language !== langPrefix) {
            switchLang(langPrefix);  
        }
      
        if (!supportedLangs.includes(langPrefix)) {
            navigate(`/${i18n.options.lng}${path}`, { replace: true });
        }
    }, [navigate, i18n.language, i18n.options.lng, path,langPrefix, supportedLangs, switchLang ]);
  };

  
  export default UrlLanguageHelper;