import { useThemeContext } from "../ThemeContext";
import { CiLight, CiDark } from "react-icons/ci";

const Theme = () => {
    const { theme, toggleTheme } = useThemeContext();
    return (
        <div
            style={{
                backgroundColor: theme === "Light" ? "white" : "#0e0e20",
                transition: "background-color 0.3s ease-in-out",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <button
                onClick={toggleTheme}
                style={{
                    color: theme === "Light" ? "black" : "white",
                    backgroundColor: theme === "Light" ? "#e7e7e7" : "#161725",
                    fontSize: "18px",
                    fontWeight: "bold",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "5px",
                    outline: "none",
                    cursor: "pointer",
                }}
            >
                <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>{theme} {theme === "Light" ? <CiLight size={25} /> : <CiDark size={25} />}
                </p>
            </button>
        </div>
    );
};

export default Theme;
