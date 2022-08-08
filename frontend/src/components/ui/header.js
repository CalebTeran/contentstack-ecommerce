import React, { useState } from "react";

//gatsby imports
import { Link, navigate} from 'gatsby'
import { useIsClient } from "../../hooks"

// material imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// icons imports
import headerStyles from "./headerStyles";
import search from '../../images/search.svg'
import cart from '../../images/cart.svg'
import account from '../../images/account-header.svg'
import menu from '../../images/menu.svg'

export default function Header({ categories }){
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isClient, key } = useIsClient()

  const classes = headerStyles();
  const matchesMD = useMediaQuery((ThemeProvider) => ThemeProvider.breakpoints.down('md'));
  const routes = [...categories, {node: {name: 'Contact Us', strapiId:'contact', link: '/contact'}}]
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  
  const drawer = (
    <SwipeableDrawer 
      open={drawerOpen}
      onOpen={ () => setDrawerOpen(true)}
      onClose={ () => setDrawerOpen(false)}
      disableBackdropTransition={!iOS} 
      disableDiscovery={iOS}
      classes={{ paper: classes.drawer}}
      >
      <List disablePadding>
          {routes.map(route =>(
        <ListItem 
          component={Link}
          to={route.node.link || `/${route.node.name.toLowerCase()}`}
          divider
          button
          key={route.node.srapiId}
          >
          <ListItemText 
          classes={{primary: classes.listItemText}}
          primary={route.node.name}/>
        </ListItem>
          ))}
      </List>
    </SwipeableDrawer>
  )
  
  const activeIndex = () => {
    const pathname =
      typeof window !== "undefined"
        ? window.location.pathname.split("/")[1]
        : null

    const found = routes.indexOf(
      routes.filter(
        ({ node: { name, link } }) =>
          (link || `/${name.toLowerCase()}`) === `/${pathname}`
      )[0]
    )

    return found === -1 ? false : found
  }

  const actions = [
    {icon: search, alt: 'search', visible: true, onClick: () => console.log("search")},
    {icon: cart, alt: 'cart', visible: true, link: '/cart',},
    {icon: account, alt: 'account', visible: !matchesMD, link: '/account',},
    {icon: menu, alt: 'menu', visible: matchesMD, onClick: () => setDrawerOpen(true)}]

  const tabs = (
    <Tabs value={activeIndex()} classes={{ indicator: classes.coloredIndicator, root: classes.tabs }}>
    {routes.map(route => (
      <Tab 
      component={Link} 
      to={route.node.link || `/${route.node.name.toLowerCase()}`}
      classes={ {root: classes.tab }}
      label={route.node.name}
      key={route.node.strapiId}/>
    ))}
  </Tabs>
  )

  return(
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button component={Link} to="/home"  classes={{ root: classes.logoContainer}}>
          <Typography variant="h1">
            <span className={classes.logoText}>Calub</span> Shop
          </Typography>
        </Button>
        { matchesMD ? drawer :tabs }
        { actions.map( action =>{
          if(action.visible){
            return(
            <IconButton 
            onClick={action.onClick}
            key={action.alt} 
            component={ action.onClick ? undefined : Link} 
            to={action.onClick ? undefined : action.link} 
            >
            <img className={classes.icon} src={action.icon} alt={action.alt}/>
          </IconButton>
        )}
          
        }
        )
        }
      </Toolbar>
    </AppBar>
  )
}