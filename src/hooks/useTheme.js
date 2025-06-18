import { ThemeContext } from "../ThemeProvider"
import { useContext } from "react"
export function useTheme(){
    return useContext(ThemeContext)
}