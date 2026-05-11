import { LocaleMessages } from "./type";
import zh from "./zh";
import en from "./en";
import vi from "./vi";
import { Context } from "hono";

export default {
    getMessages: (
        locale: string | null | undefined
    ): LocaleMessages => {
        // multi-language support
        if (locale === "en") return en;
        if (locale === "zh") return zh;
        if (locale === "vi") return vi;

        // fallback language
        return en;
    },
    getMessagesbyContext: (
        c: Context<HonoCustomType>
    ): LocaleMessages => {
        const locale = c?.get?.("lang") || c.env?.DEFAULT_LANG;
        // multi-language support
        if (locale === "en") return en;
        if (locale === "zh") return zh;
        if (locale === "vi") return vi;

        // fallback language
        return en;
    }
}
