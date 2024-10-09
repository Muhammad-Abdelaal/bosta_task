import { useContext } from "react";
import { useTranslation } from "react-i18next";
import Context from "../../../Store/Context";

function LangBtn({style}) {
  const { i18n, t } = useTranslation();
  const ctx = useContext(Context);
  
  const changeLanguage = (lang) => {
    ctx.functions.changeLangState(lang)
  };
  return (
    <div onClick={()=>{changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')}} style={{cursor:'pointer', color:'#4f5665', fontSize:'17px', fontWeight:'700', ...style}}>
      {t('header.langBtn')}
    </div>
  )
}

export default LangBtn