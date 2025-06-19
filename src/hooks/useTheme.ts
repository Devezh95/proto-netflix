import {ThemeContext} from '../theme.context'
import { useContext } from "react"
export function useTheme(){
    return useContext(ThemeContext)
}