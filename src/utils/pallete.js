import { getThemeFromLocalStorage } from '@/utils/themeUtils'

const Colors = {
    backgroundColor: {
        light: "#ebe9f1",
        dark: "#171928"
    },
    textColor: {
        light: "#09080c",
        dark: "#f4f3f7"
    },
    primaryColor: {
        light: "#aca2c3",
        dark: "#463c5d"
    },
    secondaryColor: {
        light: "#eeecf3",
        dark: "#0e0c13"
    },
    accentColor: {
        light: "#7f70a4",
        dark: "#6a5b8f"
    }
}

const theme = getThemeFromLocalStorage();

export default {
    backgroundColor: Colors.backgroundColor[theme],
    textColor: Colors.textColor[theme]
}