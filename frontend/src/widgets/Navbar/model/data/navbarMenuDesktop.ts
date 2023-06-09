import navLogo from "@/shared/assets/images/altLogo.png";
import {NavbarMenu,ItemType} from "../types/types";
import {RoutePaths} from "@/shared/appLinks/RoutePaths";
import {AppExternalLinks} from "@/shared/appLinks/appExternalLinks";

export const navbarMenuDesktop: NavbarMenu = Object.freeze([
    {

        name: 'yhteiso',
        elements: [
            {
                elementText: "Foorumi",
                link: {
                    path: AppExternalLinks.reddit,
                    isExternal: true

                }
            },

            {
                elementText: "Palaute",
                link: {
                    path: AppExternalLinks.googleFeedback,
                    isExternal: true
                }
            },

        ],
        isActive: false,
        type: ItemType.navDropDown,
        position: "left"
    },

    {

        name: 'peli',
        elements: [
            {
                elementText: "klaaniesittelyt",
                link: {
                    path: AppExternalLinks.stub,
                    isExternal: false

                }
            },

            {
                elementText: "leaderboard",
                link: {
                    path: AppExternalLinks.stub,
                    isExternal: false
                }
            },

            {
                elementText: "hahmogalleria",
                link: {
                    path: AppExternalLinks.stub,
                    isExternal: false
                }
            },

            {
                elementText: "kuvagalleria",
                link: {
                    path: AppExternalLinks.stub,
                    isExternal: false
                }
            },

        ],
        isActive: false,
        type: ItemType.navDropDown,
        position: "left"
    },

    // {
    //     name: 'About',
    //     path: RoutePaths.ABOUT,
    //     isActive: false,
    //     type: ItemType.navLink,
    //     position: "left"
    // },
    {
        name: 'Nav logo',
        path: RoutePaths.MAIN,
        src: navLogo,
        type: ItemType.navLogo,
        position: "center"
    },
    {
        name: 'Uutiset',
        path: RoutePaths.NEWS,
        isActive: false,
        type:  ItemType.navLink,
        position: "right"
    },
    {
        name: 'Tekijat',
        path:  RoutePaths.MEMBERS,
        isActive: false,
        type: ItemType.navLink,
        position: "right"
    },

    // {
    //     name : 'Tekijat',
    //     path: '/#workers',
    //     isActive: false,
    //     type: "navLink",
    //     position : "right"
    // },

    // {
    //     name : '⠀⠀⠀⠀',
    //     type: ItemType.navLinkFake,
    //     position : "right",
    //     reactKey: 'somekeyhere'
    // },
]);
