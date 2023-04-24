import {HeroSection} from "@/widgets/HeroSection";
import cls from "./MainPage.module.scss";
import {Button, ButtonSize, ButtonTheme} from "@/shared/ui/Button/Button";
import {AppExternalLinks} from "@/shared/appLinks/appExternalLinks";
import {Container} from "@/shared/ui/Container";
import {DescriptionWithNav} from "@/widgets/DescriptionWithNav";
import {NewsSection} from "@/widgets/NewsSection";
import {Navbar} from "@/widgets/Navbar";
import {FeedbackSideButton} from "@/features/FeedbackByExternalSource";
import {openLinkInNewTab} from "@/shared/lib/openLinkInNewTab/openLinkInNewTab";


const MainPage = () => {

    const handleClick = () => {
        openLinkInNewTab(AppExternalLinks.webgl);
    }

    return (
        <>
            <FeedbackSideButton/>
            <Navbar overlayed marginTop={20} />
            <HeroSection className={cls.heroSection} >
                <Button withScalableLink theme={ButtonTheme.Graffiti} size={ButtonSize.XXXL} onClick={handleClick} > Pelaa netissa !</Button>
            </HeroSection>

            <Container>
                <DescriptionWithNav/>
            </Container>
            <NewsSection/>
        </>
    );
};

export default MainPage;



