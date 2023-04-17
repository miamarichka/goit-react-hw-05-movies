import { StyledLink } from "./Navigation.styled"
import css from '../app.module.css';

export const Navigation = () => (
 <nav className={css.navigation}>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">
          Movies
        </StyledLink>
      </nav>   
)