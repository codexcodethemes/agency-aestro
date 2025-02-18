import { type FC } from "react";
import * as S from "./styled";
import { Logo } from "@components/Logo";
import { Container } from "@components/Container";
import { Socials } from "@components/Socials";
import { Newsletter } from "@modules/Newsletter";

export const Footer: FC = () => {
    return (
        <S.FooterStyled>
            <Container>
                <Newsletter />
                <S.FooterContainer>
                    <Logo />

                    <S.FooterContent>
                        <p>© 2024 All rights reserved by codexcode.pl</p>
                    </S.FooterContent>
                    <Socials />
                </S.FooterContainer>
            </Container>
        </S.FooterStyled>
    );
};
