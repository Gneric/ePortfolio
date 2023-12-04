import { getThemeFromLocalStorage } from '@/utils/themeUtils'
import Colors from '@/data/colors'

const theme = getThemeFromLocalStorage();

export default {
    backgroundColor: Colors.backgroundColor[theme],
    textColor: Colors.textColor[theme]
}