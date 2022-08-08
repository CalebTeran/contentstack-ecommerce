import { makeStyles } from "@material-ui/core/styles"

export default makeStyles(theme => ({
    coloredIndicator: {
        backgroundColor: "#fff",
    },
    logo: {
        [theme.breakpoints.down("xs")]: {
            fontSize: "3rem",
        },
    },
    logoText: {
        color: theme.palette.common.offBlack,
    },
    logoContainer: {
        [theme.breakpoints.down("md")]: {
            marginRight: "auto",
        },
    },
    tab: {
        ...theme.typography.body1,
        fontWeight: 500,
    },
    tabs: {
        marginLeft: "auto",
        marginRight: "auto",
    },
    icon: {
        height: "3rem",
        width: "3rem",
        [theme.breakpoints.down("xs")]: {
            height: "2rem",
            width: "2rem",
        },
    },
    drawer: {
        backgroundColor: theme.palette.primary.main,
    },
    listItemText: {
        color: "#fff",
    },
    badge: {
        fontSize: "1rem",
        color: "#fff",
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.75rem",
            height: "1.1rem",
            width: "1.1rem",
            minWidth: 0,
        },
    },
}))
