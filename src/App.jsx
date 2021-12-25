import { CssModules } from "./components/CssModules";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";

export const App = () => {
    return (
        <div>
            <CssModules />
            <StyledJsx />
            <StyledComponents />
        </div>
    );
};
