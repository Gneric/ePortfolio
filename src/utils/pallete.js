import { getThemeFromLocalStorage } from '@/utils/themeUtils'
import Colors from '@/data/blankTab/colors'

const theme = getThemeFromLocalStorage();

export default {
    backgroundColor: Colors.backgroundColor[theme],
    textColor: Colors.textColor[theme]
}